import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
 
const RoomPage = (props) => (
    <div className="container" style={{width: "1163px"}}>
    <div className="row" style={{transform: "translateX(-17px) translateY(117px)"}}>
        <div className="col-5">
            <div className="row" style={{width: "479px"}}>
                <div className="col">
                    <div className="musicplayer">
                        <div className="description">
                            <div className="songinfo">
                                <h1>Song Title</h1>
                                <p>ARTIST</p><i className="fa fa-volume-down"></i>
                            </div>
                            <div className="groupinfo">
                                <h1>Group Name</h1>
                                <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit, magna aliqua.<br/><br/></p>
                                <div className="grouptags">
                                    <p id="tag1">POP</p>
                                    <p id="tag2">3/10</p>
                                </div>
                            </div>
                        </div><img className="album" src="assets/img/album1.png"/>
                    </div>
                </div>
                <div className="col">
                    <div className="queue">
                        <h1>Upcoming Playlist</h1>
                        <div className="media"><img class="queuealbum" src="assets/img/queuealbum.png"/>
                            <div className="media-body">
                                <h5>Song Title</h5>
                                <p>ARTIST</p><i className="fa fa-minus-square-o"></i>
                            </div>
                        </div>
                        <div className="gradient"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div id="chatbox"><input type="text" className="form-control pl-4 pr-4 rounded-pill" name="search" placeholder="message"/>
                <div className="othertext">
                    <p>Message</p>
                </div>
                <div className="mytext">
                    <p className="text-right">Message</p>
                </div>
            </div>
            <div className="members"><img class="pic" src="assets/img/persona-01.png"/><img class="pic" src="assets/img/persona-03.png"/><img class="pic" src="assets/img/persona-02.png"/></div>
        </div>
    </div>
</div>
);
 
export default RoomPage;