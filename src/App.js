import React, {useRef} from 'react'

//import comps
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

//import css
import './App.css';

const App = () => {

	const emailInputRef = useRef(null);

  const focusEmailInput = (e) => {
		e.preventDefault();
    // emailInputRef.current.focus();
		if (emailInputRef.current) {
			emailInputRef.current.focus();
		} else {
			window.scrollTo(0, 0);
		}
  };

	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header emailInputRef={emailInputRef} />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer focusEmailInput={focusEmailInput} />
		</div>
	)
}

export default App;