import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
import RoomItem from './RoomItem';
 
class BrowsePage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      rooms: [],
    };
  }
 
  componentDidMount() {
    this.setState({ loading: true });
 
    this.props.firebase.rooms().on('value', snapshot => {
      const roomsObject = snapshot.val();
 
      const roomsList = Object.keys(roomsObject).map(key => ({
        ...roomsObject[key],
        uid: key,
      }));
 
      this.setState({
        rooms: roomsList,
        loading: false,
      });
    });
  }
 
  render() {
    return (
      <div>
        <h1>Rooms</h1>
        <RoomItem/>
      </div>
    );
  }
}
 
export default withFirebase(BrowsePage);