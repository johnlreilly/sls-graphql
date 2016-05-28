import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getDept } from '../../actions/depts';
import { Link } from 'react-router';

class DeptsShow extends Component {
  componentWillMount() {
    this.props.getDept(this.props.params.deptname);
  }

  render() {
    const { dept } = this.props;

    if (!dept) {
      return <div className="row"><div className="twelve columns">Loading...</div></div>
    }

    return (
      <div className="row">
        <div className="four columns offset-by-four">
          <h1>{dept.name}</h1>
          <hr />
          <p>{dept.id}</p>
          <p>{dept.email}</p>
          <p>{dept.deptname}</p>
          <p>{dept.street}</p>
          <p>{dept.city}</p>
          <p>{dept.state}</p>
          <p>{dept.postalCode}</p>
          <p>{dept.country}</p>
          <p>{dept.latitude}</p>
          <p>{dept.longitude}</p>
          <hr />
          <Link to='/' className="button u-full-width">Back</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { dept: state.depts.dept };
}

export default connect(mapStateToProps, { getDept })(DeptsShow);
