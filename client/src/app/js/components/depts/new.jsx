import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createDept } from '../../actions/depts';
import { Link } from 'react-router';

class DeptsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    handleSubmit(event) {
        event.preventDefault();

        const name = this.refs.name.value;
        const deptname = this.refs.deptname.value;
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const street = this.refs.street.value;
        const city = this.refs.city.value;
        const state = this.refs.state.value;
        const postalCode = this.refs.postalCode.value;
        const country = this.refs.country.value;
        const latitude = this.refs.latitude.value;
        const longitude = this.refs.longitude.value;

        if (name.length !== 0 && deptname.length !== 0 && email.length !== 0 && password.length !== 0) {
            const dept = {
                name,
                deptname,
                email,
                password,
                street,
                city,
                state,
                postalCode,
                country,
                latitude,
                longitude
            };

            this.props.createDept(dept);
        } else {
            alert('Please fill out all fields');
        }
    }

    render() {
        return ( < div className = "row" >
            < div className = "four columns offset-by-four" >
            < form onSubmit = { this.handleSubmit.bind(this) } >
            < h1 > Add dept < /h1> < hr / >
            < input type = "text" placeholder = "Name" className = "u-full-width" ref = "name" / >
            < input type = "text" placeholder = "Dept Name" className = "u-full-width" ref = "deptname" / >
            < input type = "email" placeholder = "E-Mail" className = "u-full-width" ref = "email" / >
            < input type = "password" placeholder = "Password" className = "u-full-width" ref = "password" / >
            < input type = "street" placeholder = "Street" className = "u-full-width" ref = "street" / >
            < input type = "city" placeholder = "City" className = "u-full-width" ref = "city" / >
            < input type = "state" placeholder = "State" className = "u-full-width" ref = "state" / >
            < input type = "postalCode" placeholder = "Postal Code" className = "u-full-width" ref = "postalCode" / >
            < input type = "country" placeholder = "Country" className = "u-full-width" ref = "country" / >
            < input type = "latitude" placeholder = "Latitude" className = "u-full-width" ref = "latitude" / >
            < input type = "longitude" placeholder = "Longitude" className = "u-full-width" ref = "longitude" / >
            < input type = "submit" className = "button button-primary" / >
            < Link to = "/" className = "u-pull-right button" > Cancel < /Link> 
            < /form> 
            < /div> 
            < /div>
        );
    }
}

export default connect(null, { createDept })(DeptsNew);
