import React from 'react';
import { withAuthorization } from '../Session';
import { Link } from 'react-router-dom';

const RoomItem = props => {    

    const joinRoomHandler = e => {
        //props.changed(e.target.value);

    }    
    return (
        <ul>           
          <dt>Artist: {props.Artist}</dt>
            <dt>Song Name: {props.SongTitle}</dt>
            <dt>Description: {props.discription}</dt>
            <dt><img src={props.cover} alt="cover"></img></dt>
            <button onClick={() => joinRoomHandler(props.roomCode)}>
                    <Link to ="/Room">Join Room</Link>
                </button>
        </ul>          
    );
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(RoomItem);

