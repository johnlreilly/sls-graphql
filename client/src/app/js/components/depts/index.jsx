import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDepts } from '../../actions/depts';
import { Link } from 'react-router';

class DeptsIndex extends Component {
  componentWillMount() {
    this.props.getDepts();
  }

  render() {
    const { depts } = this.props;

    return (
      <div className="row">
        <div className="twelve columns">
          <h1>Depts</h1>
          <hr />
          {depts.length ? (
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Deptname</th>
                  <th>Name</th>
                  <th>E-Mail</th>
                </tr>
              </thead>
              <tbody>
              {depts.map((dept) => {
                return (
                  <tr key={'dept-' + dept.deptname}>
                    <td>
                      <Link to={ 'depts/' + dept.deptname + '/show' }>{dept.deptname}</Link>
                    </td>
                    <td>{dept.name}</td>
                    <td>{dept.email}</td>
                  </tr>
                )}
              )}
              </tbody>
            </table>
          ) : <div>There are currently no departments available to display<hr /></div> }
          <Link to={ 'depts/new' } className="button button-primary">Create New Dept</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { depts: state.depts.all };
}

export default connect(mapStateToProps, { getDepts })(DeptsIndex);
