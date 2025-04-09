import React, { useState } from "react";
import "./chat.scss";
const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
        <div className="message">
          <img
            src="https://avatars.githubusercontent.com/u/153388904?v=4"
            alt=""
          />
          <span> Junior Khatib</span>
          <p>Enjoying the vibrant energy...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://avatars.githubusercontent.com/u/153388904?v=4"
                alt=""
              />
              Junior Khatib
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="centre">
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Minima, omnis.
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
