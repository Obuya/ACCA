import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { uuid } from 'uuidv4';
 
const CreateRoomPage = () => (
 <div>
    <CreateRoomForm />
  </div>
);
const INITIAL_STATE = {
    backgroundImg: '',
    numOfppl: '0',
    roomID: uuid(),
    roomName: '',
    roomSize: '',
    tag: '',
  };
 
  class CreateRoomBase extends Component {
    constructor(props) {
      super(props);
   
      this.state = { ...INITIAL_STATE };
    }
   
    onSubmit = event => {
      const { backgroundImg, numOfppl, roomID, roomName, roomSize,tag } = this.state;
          // Create a user in your Firebase realtime database
          this.props.firebase
            .rooms().doc()
            .set({
                backgroundImg,
                numOfppl,
                roomID,
                roomName,
                roomSize,
                tag,
            })
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.BROWSE);
        })
        .catch(error => {
          this.setState({ error });
        });
   
      event.preventDefault();
    };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
        backgroundImg,
        numOfppl,
        roomID,
        roomName,
        roomSize,
        tag,
      } = this.state;
      return (
      <section className="login-dark">
      <form id="postbg" method="post" onSubmit={this.onSubmit} >
          <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
          <div className="form-group">
          <input
          className="form-control"
            name="roomName"
            value={roomName}
            onChange={this.onChange}
            type="text"
            placeholder="Room Name"
          />
            </div>
          <div className="form-group">
          <input
          className="form-control"
            name="roomSize"
            value={roomSize}
            onChange={this.onChange}
            type="number"
            min = '2'
            max = "100"
            placeholder="Room size"
          />
           </div>
         <div className="form-group">
          <input
          className="form-control"
            name="tag"
            value={tag}
            onChange={this.onChange}
            type="text"
            placeholder="tag"
          />
           </div>
           <div className="form-group">
          <input
          className="form-control"
            name="backgroundImg"
            value={backgroundImg}
            onChange={this.onChange}
            type="text"
            placeholder="Image url"
          />
           </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Create Room</button>
            </div>
      </form>
  </section>

      );
  }
}

 
const CreateRoomForm = compose(
    withRouter,
    withFirebase,
  )(CreateRoomBase);
export default CreateRoomPage;
 
export {CreateRoomForm};