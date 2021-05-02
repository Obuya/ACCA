import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { uuid } from 'uuidv4';
 
const CreateRoomPage = () => (

    <>
        <CreateRoomPageForm/>
    </>
  
);
const INITIAL_STATE = {
    backgroundImg: '',
    numOfppl: '0',
    roomID: uuid(),
    roomName: '',
    roomSize: '',
    tag: '',
  };
class CreateRoompageBase extends Component {
    constructor(props) {
      super(props);
      
      this.state = { ...INITIAL_STATE };
    }

      render(){
            const {
                backgroundImg,
                numOfppl,
                roomID,
                roomName,
                roomSize,
                tag,
              } = this.state;

              return(
                    <div class="container" id="grid">
                    <div class="row">
                        {/* {console.log(props.location)} */}
                        <div class="col-12 col-sm-12 col-md-4 col-lg-5 col-xl-5" id="left">
                            <div class="upperLeft"></div>
                            <div class="media" id="crurrentSong"><img id="bigImg" class="mr-3" src={this.props.location.roomData.backgroundImg}/>
                                <div class="media-body" id="groupMedia">
                                    <h5>{this.props.location.roomData.roomName}</h5>
                                    <p id="desk">Lorem ipsum dolor sit amet, consectetur adipiscing elit.&nbsp;</p>
                                    <p id="genreTag" class="tags">{this.props.location.roomData.tag}</p>
                                    <p id="numberTag" class="tags">{this.props.location.roomData.numOfppl}/{this.props.location.roomData.roomSize}</p>
                                </div>
                            </div>
                            <div class="disappear">
                                <h1>Song Title</h1>
                                <p>ARTIST</p>
                            </div>
                            <div class="que">
                                <h1>UPCOMING SONGS</h1>
                                <div class="media" id="queMedia"><img id="queAlbum" class="mr-3" src="assets/img/Tame_Impala_-_The_Slow_Rush.png"/>
                                    <div class="media-body" id="mediaBody">
                                        <h5>Media Heading</h5>
                                        <p>ARTIST</p><i class="fa fa-remove"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6" id="right"><input type="text" id="textBox" class="form-control pl-4 pr-4 rounded-pill" name="Message" placeholder="Message"/></div>
                        <div class="col-lg-1 col-xl-1 justify-content-center" id="sideBar">
                            <div></div><img id="members" src="assets/img/persona-01.png"/><img id="members" src="assets/img/persona-03.png"/><img id="members" src="assets/img/persona-02.png"/>
                        </div>
                    </div>
                    </div>
              );
        
        }
    }
 const CreateRoomPageForm = compose(
        withRouter,
        withFirebase,
      )(CreateRoompageBase);
    export default CreateRoomPage;

export {CreateRoomPageForm};