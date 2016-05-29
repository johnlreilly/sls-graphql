import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UsersIndex from './components/users/index';
import UsersShow from './components/users/show';
import UsersEdit from './components/users/edit';
import UsersNew from './components/users/new';
// import DeptsIndex from './components/depts/index';
// import DeptsShow from './components/depts/show';
// import DeptsEdit from './components/depts/edit';
// import DeptsNew from './components/depts/new';

export default (
  [
  <Route path="/" component={App}>
    <IndexRoute component={UsersIndex} />
    <Route path="users/:username/show" component={UsersShow} />
    <Route path="profile" component={UsersEdit} />
    <Route path="users/new" component={UsersNew} />
  </Route>
  // ,
  // <Route path="/depts" component={App}>
  //   <IndexRoute component={DeptsIndex} />
  //   <Route path="depts/:deptname/show" component={DeptsShow} />
  //   <Route path="profile" component={DeptsEdit} />
  //   <Route path="depts/new" component={DeptsNew} />
  // </Route>
  ]
 );
