import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase';
import RoomItem from './RoomItem'
import * as ROUTES from '../../constants/routes';
class AdminPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      rooms: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    let roomsObject = [];
    const observer = this.props.firebase.rooms().onSnapshot(docSnapshot => {
      roomsObject = [];
      docSnapshot.docs.forEach(doc => {
        const data = doc.data();
        roomsObject.push(data);
    })
      const roomsList = Object.keys(roomsObject).map(key => ({
         ...roomsObject[key],
         uid: key,
       }));
      console.log(roomsList)
      this.setState({
        rooms: roomsList,
        loading: false,
      });




    }, err => {
    console.log(`Encountered error: ${err}`);
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().onSnapshot();
  }
 
  render() {
    const { rooms, loading } = this.state;
    return (
      <>
        {/* {loading && <div>Loading ...</div>} */}

        <div class="container" id="search">
        <div class="form-group col-sm"><input type="text" class="form-control pl-4 pr-4 rounded-pill" name="search" placeholder="SEARCH"/>
            <div class="genres">
              <button class="btn btn-primary text-capitalize genre-btn" type="button">rap</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">pop</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">rock</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">blues</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">jazz</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">indie</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">dance</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">country</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">hip-hop</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">latin</button>
              <button class="btn btn-primary text-capitalize genre-btn" type="button">chill</button>
              </div>
        </div>
  </div>
  <div class="container">
  <RoomItem rooms={rooms} /> 
  </div>
    
      </>
    );
  }
}
const tagList = ({ tag }) => (
  <>
       <button class="btn btn-primary text-capitalize genre-btn" type="button">{tag}</button>
  </>
);
 
export default withFirebase(AdminPage);
