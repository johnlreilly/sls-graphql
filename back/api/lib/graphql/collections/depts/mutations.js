'use strict';

const GraphQLString = require('graphql').GraphQLString;
const GraphQLNonNull = require('graphql').GraphQLNonNull;

const deptType = require('./type');
const validate = require('./validate');
const authorize = require('../../../auth').authorize;
const resolves = require('./resolves');

module.exports = {
  createDept: {
    type: deptType,
    description: 'Create Dept',
    args: {
      deptname: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(source, args) {
      return validate(args).then(() => resolves.create(args));
    }
  },
  updateDept: {
    type: DeptType,
    description: 'Update Dept',
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) },
      deptname: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(source, args) {
      return validate(args).then(() => authorize(args.token, ['UPDATE_DEPT'])).then((dept) => resolves.update(dept, args));
    }
  },
  deleteDept: {
    type: DeptType,
    description: 'Delete Dept',
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(source, args) {
      return validate(args).then(() => authorize(args.token, ['DELETE_DEPT'])).then((dept) => resolves.remove(dept));
    }
  }
}