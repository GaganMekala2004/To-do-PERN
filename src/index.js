import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
 // Optional: You can add some basic styles here if you want

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Your main app component */}
  </React.StrictMode>,
  document.getElementById('root')  // This is where React will attach to the DOM (usually in the public/index.html file)
);
