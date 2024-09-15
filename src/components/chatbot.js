import React, { useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
  const [Bot, setBot] = useState(false); // State to control the visibility of the chatbot

  // Function to toggle the chatbot visibility
  const toggleBot = () => {
    setBot(!Bot);
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <button 
              onClick={toggleBot} 
              className="btn btn-primary mb-3"
            >
              {Bot ? 'Hide Chatbot' : 'Show Chatbot'}
            </button>
            
            {/* Conditionally render the chatbot when Bot state is true */}
            {Bot && (
              <div className="card" id="chat2">
                <div className="card-header d-flex justify-content-between align-items-center p-3">
                  <h5 className="mb-0">Chat</h5>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                  >
                    Let's Chat App
                  </button>
                </div>
                <div className="card-body" style={{ position: 'relative', height: '400px' }}>
                  {/* Chat messages */}
                  <div className="d-flex flex-row justify-content-start">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                      alt="avatar 1"
                      style={{ width: '45px', height: '100%' }}
                    />
                    <div>
                      <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">Hi</p>
                      <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">How are you ...???</p>
                      <p className="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">What are you doing tomorrow? Can we come up a bar?</p>
                      <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="divider d-flex align-items-center mb-4">
                    <p className="text-center mx-3 mb-0" style={{ color: '#a2aab7' }}>Today</p>
                  </div>

                  {/* More chat messages */}
                  <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                    <div>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hiii, I'm good.</p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">How are you doing?</p>
                      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Long time no see! Tomorrow office. will be free on sunday.</p>
                      <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                    </div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                      alt="avatar 2"
                      style={{ width: '45px', height: '100%' }}
                    />
                  </div>

                  {/* Additional chat content ... */}
                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar 3"
                    style={{ width: '40px', height: '100%' }}
                  />
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Type message"
                  />
                  <a className="ms-1 text-muted" href="#!">
                    <i className="fas fa-paperclip"></i>
                  </a>
                  <a className="ms-3 text-muted" href="#!">
                    <i className="fas fa-smile"></i>
                  </a>
                  <a className="ms-3" href="#!">
                    <i className="fas fa-paper-plane"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
