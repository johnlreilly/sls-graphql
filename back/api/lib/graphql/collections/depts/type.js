'use strict';

const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'Dept',
  description: 'Department',
  fields: () => ({
    id: {type: GraphQLString},
    deptname: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    token: {type: GraphQLString}
  })
});
