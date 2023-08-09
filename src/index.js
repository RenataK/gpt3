import React from 'react'; 
import ReactDOM from 'react-dom/client'; //allows to hook up react app to index.html
// import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));        
root.render(<App />);


// ReactDOM.render(<App />, document.getElementById('root'));
