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
 
    this.props.firebase.users().on('value', snapshot => {
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
  componentWillUnmount() {
    this.props.firebase.rooms().off();
  }
  render() {
    const { rooms, loading } = this.state;
    return (
      <div>
        <h1>Rooms</h1>
        <RoomItem rooms={rooms}/>
      </div>
     
    );
  }
}
 
export default withFirebase(BrowsePage);