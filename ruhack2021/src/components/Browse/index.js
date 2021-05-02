import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
 
class AdminPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    const usersObject = [];
    const observer = this.props.firebase.users().onSnapshot(docSnapshot => {
      docSnapshot.docs.forEach(doc => {
        const data = doc.data();
        usersObject.push(data);
    })
      const usersList = Object.keys(usersObject).map(key => ({
         ...usersObject[key],
         uid: key,
       }));
      console.log(usersList)
      this.setState({
        users: usersList,
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
    const { users, loading } = this.state;
    return (
      <div>
        {/* {loading && <div>Loading ...</div>} */}

        <div class="container" style={{transform: "translateX(0px) translateY(102px)",height: "93px",marginTop: "15px"}}>
        <div class="form-group col-sm"><input type="text" class="form-control pl-4 pr-4 rounded-pill" name="search" placeholder="SEARCH" style={{fontFamily: "'Open Sans', sans-serif",width: "300px"}}/>
            <div class="genres" style={{marginTop: "41px", height: "39px"}}>
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
    <div class="container" style={{marginTop: "155px",height: "995px"}}>
    <Link to={{
  pathname: ROUTES.ROOM + "/1",
  state: {
    roomId: 1,
    backgroundImg : "url(assets/img/pic4.jpg)"
  }
}}>
    <div class="card">
            <div class="card-img-overlay" style={{background: "url(assets/img/pic4.jpg)",backgroundSize: "cover"}}>
                <div class="description">
                    <h4 id="cardtitle">TITLE</h4>
                    <p id="cardpara">Paragraph</p>
                    <p id="tag1" >JAZZ</p>
                    <p id="tag2">8/10</p>
                </div>
            </div>
        </div>
    </Link>
    <Link to={{
  pathname: ROUTES.ROOM + "/2",
  state: {
    roomId: 2,
    backgroundImg : "url(assets/img/pic2.jpg)"
  }
}}>
    <div class="card">
            <div class="card-img-overlay" style={{background: "url(assets/img/pic2.jpg)",backgroundSize: "cover"}}>
                <div class="description">
                    <h4 id="cardtitle">TITLE</h4>
                    <p id="cardpara">Paragraph</p>
                    <p id="tag1" >JAZZ</p>
                    <p id="tag2">8/10</p>
                </div>
            </div>
        </div>
    </Link>
    <Link to={{
  pathname: ROUTES.ROOM + "/3",
  state: {
    roomId: 3,
    backgroundImg : "url(assets/img/pic3.jpg)"
  }
}}>
    <div class="card">
            <div class="card-img-overlay" style={{background: "url(assets/img/pic3.jpg)",backgroundSize: "cover"}}>
                <div class="description">
                    <h4 id="cardtitle">TITLE</h4>
                    <p id="cardpara">Paragraph</p>
                    <p id="tag1" >JAZZ</p>
                    <p id="tag2">8/10</p>
                </div>
            </div>
        </div>
    </Link>
    </div>

        <UserList users={users} />
      </div>
    );
  }
}
const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);
 
export default withFirebase(AdminPage);