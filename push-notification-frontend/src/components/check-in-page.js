import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { getNotification } from '../actions/notificationsActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class CheckIn extends Component {


state = {
  name: ''
}


onChange = e => { 
  this.setState({ 
      [e.target.name]: e.target.value,
  });
}


onSubmit = e => {
  e.preventDefault();

  var name = this.state.name
  console.log(name)

  if (name == "")
    alert('enter a username')
  else
  this.props.getNotification(name)
  }

  render() {
  
    return (
        <div  style={{padding: '25%'}}>
          <Form style={{display: 'inline-block'}} onSubmit={this.onSubmit}>
            <FormGroup>
              <Input 
                type="text"
                name="name"
                id="username"
                placeholder="username"
                onChange={this.onChange}
              />
              <br/>
              <Button>Check in</Button>
            </FormGroup>
          </Form>
          <p><Link to="/notification">Open this link in a new tab or window, in which you will recieve a push notification</Link></p>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.name
});


export default connect (mapStateToProps, {getNotification}) (CheckIn);
