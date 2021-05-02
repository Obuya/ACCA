import React from 'react';
import { withAuthorization } from '../Session';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const RoomItem = props => {      
    return (
      <>
        {props.rooms.map(room => (
        <Link to={{
            pathname: ROUTES.ROOM,
            roomData : room,
            // state: {
            //   roomId: 1,
            //   room
            // }
          }}>
        <div class="card flexboxItem">
                      <div class="card-img-overlay" style={{background: `url(${room.backgroundImg}) 0% 0% / cover`}}>
                          <div class="description">
                              <h4 id="cardtitle">{room.roomName}</h4>
                              <p id="cardpara">{room.roomDes}</p>
                              <p id="tag1" >{room.tag}</p>
                              <p id="tag2">{room.numOfppl}/{room.roomSize}</p>
                          </div>
                      </div>
                  </div>
    </Link> 
     ))}    
     </>    
    );
}

const condition = authUser => !!authUser;
export default withAuthorization(condition)(RoomItem);

