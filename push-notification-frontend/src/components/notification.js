import React, { Component } from 'react';
import { connect } from 'react-redux';
import WebSocket from 'isomorphic-ws';
import { Link } from 'react-router-dom';

class Notification extends Component {

  render() {
  
    this.ws = new WebSocket("ws://localhost:9090");
    this.ws.onmessage = function(evt) {
        alert(evt.data);
    }
  
    return (
        <div style={{padding: '25%'}}>
          <p>Check in with a desired username in previous window to recieve a notification here</p>
          <p><Link to="/CheckIn">Go back</Link></p>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    message: state.message
});

export default connect (mapStateToProps) (Notification);
