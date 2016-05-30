import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateDept, deleteDept} from '../../actions/depts';
import { Link } from 'react-router';

class DeptsEdit extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    if (confirm('Do you want to delete this dept?')) {
      this.props.deleteDept(this.props.dept.token)
        // .then(this.props.logoutDept)
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.refs.name.value;
    const email = this.refs.email.value;

    if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
      const dept = {
        name,
        email,
        token: this.props.dept.token
      };

      this.props.updateDept(dept);
    } else {
      alert('Please fill out all fields');
    }
  }

  render() {
    const {dept} = this.props;

    if (!dept) return null;

    return (
      <div className="row">
        <div className="four columns offset-by-four">
          <h1>Edit Profile</h1>
          <hr />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Name" className="u-full-width" ref="name" defaultValue={dept.name}/>
            <input type="email" placeholder="E-Mail" className="u-full-width" ref="email" defaultValue={dept.email} />
            <input type="street" placeholder="Street" className="u-full-width" ref="street" />
            <input type="text" placeholder="City" className="u-full-width" ref="city" />
            <input type="text" placeholder="State" className="u-full-width" ref="state" />
            <input type="text" placeholder="Postal Code" className="u-full-width" ref="postalCode" />
            <input type="text" placeholder="Country" className="u-full-width" ref="country" />
            <input type="double" placeholder="Latitude" className="u-full-width" ref="latitude" />
            <input type="double" placeholder="Longitude" className="u-full-width" ref="longitude" />
            <input type="submit" className="button button-primary" />
            <Link to="/" className="u-pull-right button">Cancel</Link>
          </form>
          <hr />
          <button onClick={this.onDeleteClick.bind(this)} className="button u-full-width">Delete</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({depts: {currentDept}}) => ({dept: currentDept});

export default connect(mapStateToProps, {updateDept, deleteDept})(DeptsEdit);
