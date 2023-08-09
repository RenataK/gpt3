import React, { useState } from 'react';
import './signup.css';

function SignUp({ onSignUp }) {
  const [showModal, setShowModal] = useState(false);
	const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignUpClick = () => setShowModal(true);
  const handleModalClose = () => {
		setShowModal(false);
		setFirstName('');
		setEmail('');
		setPassword('');
	}
	
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		switch (name) {
			case 'firstName':
				setFirstName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				break;
		}
	};
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (firstName && email && password) {
			const user = { firstName, email, password };
      onSignUp(user);
      setIsSubmitted(true);
      handleModalClose();
      // Redirect to homepage after 2 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    }
  };

  return (
    <>
      <button className="signup__button" onClick={handleSignUpClick} id='signup'>
        Sign Up
      </button>
      {showModal && (
        <div className="signup__modal" onClick={handleModalClose}>
          <div className="signup__modal-content" onClick={(event) => event.stopPropagation()}>
            <span className="signup__modal-close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>Sign Up</h2>
            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit}>
								<div className="signup__form-group">
                  <label htmlFor="firstName" className="signup__label">
                    Name:
                  </label>
                  <input
                    type="firstName"
                    id="firstName"
                    className="signup__input"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
										required
                  />
                </div>
                <div className="signup__form-group">
                  <label htmlFor="email" className="signup__label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="signup__input"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
										required
                  />
                </div>
                <div className="signup__form-group">
                  <label htmlFor="password" className="signup__label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="signup__input"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
										required
                  />
                </div>
                <button type="submit" className="signup__button">
                  Sign Up
                </button>
              </form>
            ) : (
              <p className="signup__success-message">Thank you for signing up!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
