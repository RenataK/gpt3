import React from 'react'
import './cta.css';

import SignUp from '../signup/SignUp';

const CTA = () => {
	const handleSignUp = (formData) => {
    // window.location.href = "https://www.google.com";
		// alert('thankyou for signing up')
		window.location.href = '/';
    console.log(formData);
  };
	return (
		<div className='gpt3__cta'>
			<div className='gpt3__cta-content'>
				<p>Request Early Access to Get Started</p>
				<h3>Register today & start exploring the endless possiblities.</h3>
			</div>
			<div className='gpt3__cta-btn' id='gs'>
					{/* <button type='button'> */}
						<SignUp onSignUp={handleSignUp} />
						{/* Get Started */}
					{/* </button> */}
				</div>
		</div>
	)
}

export default CTA
