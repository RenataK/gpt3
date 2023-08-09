import React, { useState } from 'react';
import './signin.css';

function SignIn({ onSignIn }) {

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSignIn({ email, password });
    handleModalClose();
  };

  return (
    <>
      <button className="signin__button" onClick={handleSignInClick} id='signin'>
        Sign In
      </button>
      {showModal && (
        <div className="signin__modal" onClick={handleModalClose}>
          <div className="signin__modal-content" onClick={(event) => event.stopPropagation()}>
            <span className="signin__modal-close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Sign In</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="signin__form-group">
                <label htmlFor="email" className="signin__label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="signin__input"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
									required
                />
              </div>
              <div className="signin__form-group">
                <label htmlFor="password" className="signin__label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="signin__input"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
									required
                />
              </div>
              <button type="submit" className="signin__button">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;

