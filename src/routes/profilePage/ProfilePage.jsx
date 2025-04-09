import React from "react";
import "./profile.scss";
import List from "../../components/list/List.jsx";
import Chat from "../../components/chat/Chat.jsx";
const ProfilePage = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="userDetails">
            <div className="detail">
              <p>Avatar:</p>
              <img
                src="https://avatars.githubusercontent.com/u/153388904?v=4"
                alt=""
              />
            </div>
            <div className="detail">
              <p>Username:</p>
              <span>Khatib Junior</span>
            </div>
            <div className="detail">
              <p>E-mail:</p>
              <span>juniorkhatib7@gmail.com</span>
            </div>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
