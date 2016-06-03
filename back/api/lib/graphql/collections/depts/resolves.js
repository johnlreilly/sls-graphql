'use strict'

const Promise = require('bluebird')
const uuid = require('uuid')
const bcryptjs = require('bcryptjs')
const db = require('../../../dynamodb')
const authenticate = require('../../../auth').authenticate
const invoke = require('../../../invoke')
const _ = require('lodash')

const stage = process.env.SERVERLESS_STAGE
const projectName = process.env.SERVERLESS_PROJECT
const deptsTable = projectName + '-depts-' + stage

module.exports = {
  create (dept) {
    dept.id = uuid.v1()
    dept.permissions = ['UPDATE_DEPT', 'DELETE_DEPT']

    // generated salted hash with bcryptjs with 10 work factor
    dept.password_hash = bcryptjs.hashSync(dept.password, 10)

    delete dept.password // don't save plain password!

    return db('put', {
      TableName: deptsTable,
      Item: dept
    })
    // let's invoke another lambda asynchronously (don't wait till it finished)!
    .then(() => invoke('timeout', {dept, delay: 70}))  // no actual delay here
    // if we pass a callback it will run synchronously, so we'll get a response
    .then(() => invoke('timeout', {dept, delay: 50}, (response) => {
      // this should be delayed for 50ms
      // let's do something with the response
      if (response.result === 'success') {
        console.log('response data:', response)
      } else {
        return Promise.reject(new Error('Something went wrong :(     '))
      }
    }))
    // finally return the dept record
    .then(() => dept)
  },

  get (deptname) {
    return db('get', {
      TableName: deptsTable,
      Key: {deptname},
      AttributesToGet: [
        'id',
        'deptname',
        'email'
      ]
    }).then(reply => reply.Item)
  },

  getAll () {
    return db('scan', {
      TableName: deptsTable,
      AttributesToGet: [
        'id',
        'deptname',
        'email'
      ]
    }).then(reply => reply.Items)
  },

  update (dept, obj) {
    // update data
    dept.deptname = obj.name || dept.deptname
    dept.email = obj.email || dept.email
    dept.password_hash = bcryptjs.hashSync(obj.password, 10)

    return db('put', {
      TableName: deptsTable,
      Item: dept
    }).then(() => _.merge({}, dept, obj))
  },

  remove (dept) {
    return db('delete', {
      TableName: deptsTable,
      Key: { deptname: dept.deptname }
    })
  }
}
