import 'whatwg-fetch';
import _ from 'lodash';
import { push } from 'react-router-redux';

import { API_URL } from './index';
import {resetError} from './error';

import {
  ERROR,
  GET_DEPTS,
  GET_DEPT,
  CREATE_DEPT,
  UPDATE_DEPT,
  DELETE_DEPT
  // LOGIN_DEPT,
  // LOGOUT_DEPT
} from './constants';

export function createDept(dept) {
  const query = { "query":
    `mutation createNewDept {
      dept: createDept (
        name: "${dept.name}",
        email: "${dept.email}"
        street: "${dept.street }"
        city: "${dept.city}"
        state: "${dept.state}"
        postalCode: "${dept.postalCode}"
        country: "${dept.country}"
        latitude: "${dept.latitude}"
        longitude: "${dept.longitude}"
      )
      {
        id
        name
        email
        street
        city
        state
        postalCode
        country
        latitude
        longitude
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: CREATE_DEPT,
    payload: json
  }))
  .then(() => dispatch(push('/')))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function getDepts() {
  const query = { "query":
    `{
      depts {
        name
        email
        street
        city
        state
        postalCode
        country
        latitude
        longitude
        token
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: GET_DEPTS,
    payload: json
  }))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function getDept(deptname) {
  const query = { "query":
    `{
      dept(deptname: "${deptname}")
      {
        id
        name
        email
        token
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: GET_DEPT,
    payload: json
  }))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function updateDept(dept) {
  const query = { "query":
    `mutation updateExistingDept {
      dept: updateDept (
        name: "${dept.name}"
        email: "${dept.email}"
        city: "${dept.city}"
        state: "${dept.state}"
        postalCode: "${dept.postalCode}"
        country: "${dept.country}"
        latitude: "${dept.latitude}"
        longitude: "${dept.longitude}"
        token: "${dept.token}"
      )
      {
        id
        name
        email
        street
        city
        state
        postalCode
        country
        latitude
        longitude
        token
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(payload => dispatch({payload, type: UPDATE_DEPT}))
  .then(() => dispatch(push('/')))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function deleteDept(token) {
  const query = { "query":
    `mutation deleteExistingDept {
      dept: deleteDept (
        token: "${token}"
      )
      {
        name
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: DELETE_DEPT,
    payload: json
  }))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

// export function loginDept(dept) {
//   const query = { "query":
//     `mutation loginDept {
//       dept: loginDept (
//         deptname: "${dept.deptname}",
//         password: "${dept.password}"
//       )
//       {
//         id
//         deptname
//         name
//         email
//         token
//       }
//     }`
//   };

//   return (dispatch) => {
//     dispatch(resetError());

//     return fetch(`${API_URL}/data/`, {
//       method: 'POST',
//       body: JSON.stringify(query)
//     })
//     .then(response => response.json())
//     .then(json => _.isEmpty(json.errors) ? json : Promise.reject(json.errors[0]))
//     .then(payload => {
//       dispatch({payload, type: LOGIN_DEPT})
//     })
//     .catch(exception => dispatch({
//       type: ERROR,
//       payload: exception.message
//     }));

//   }
// }

// export function logoutDept() {
//   return dispatch => {
//     dispatch({type: LOGOUT_DEPT});
//     dispatch(push('/'));
//   }
// }
