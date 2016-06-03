'use strict'

const Promise = require('bluebird')

let validate = {
  deptname: (deptname) => {
    let re = /^[a-z0-9_-]{3,25}$/
    if (!re.test(deptname)) return Promise.reject('invalid deptname')
  },
  email: (email) => {
    let re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!re.test(email)) return Promise.reject('invalid email')
  },
  name: (name) => {
    return
  },
  token: (token) => {
    return
  }
}

module.exports = (data) => {
  Object.keys(data).forEach((d) => { validate[d](data[d]) })
  return Promise.resolve()
}
