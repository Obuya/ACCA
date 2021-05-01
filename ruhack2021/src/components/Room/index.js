import React from 'react';
import { withAuthorization } from '../Session';
import { Link } from 'react-router-dom';

const Room = props => {    

    const joinRoomHandler = e => {
        props.changed(e.target.value);

    }    
    return (
        <div>           
            <div className="media-body">
                <dl className="dl-horizontal">
                    <dt>Artist:</dt><dd>{props.Artist}</dd>
                    <dt>Song Name:</dt><dd>{props.SongTitle}</dd>
                    <dt>Description:</dt><dd>{props.discription}</dd>
                    <dt>Profile Image</dt><dd class="clearfix"><a href={props.profilePic}></a></dd>
                </dl>
                <button onClick={() => joinRoomHandler(props.roomCode)}>
                    <Link to ="/Room">Join Room</Link>
                </button>
            </div>            
        </div>
    );
}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Room);

