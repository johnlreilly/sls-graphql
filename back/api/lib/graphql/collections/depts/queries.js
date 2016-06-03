'use strict'

const GraphQLList = require('graphql').GraphQLList
const GraphQLString = require('graphql').GraphQLString
const GraphQLNonNull = require('graphql').GraphQLNonNull

const DeptType = require('./type')
const validate = require('./validate')
const resolves = require('./resolves')

module.exports = {
  depts: {
    type: new GraphQLList(DeptType),
    description: 'List of departments',
    resolve: function (source, args) {
      return resolves.getAll()
    }
  },
  dept: {
    type: DeptType,
    description: 'Get a Dept by deptname',
    args: {
      deptname: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: function (source, args) {
      return validate(args).then(() => resolves.get(args.deptname))
    }
  }
}
