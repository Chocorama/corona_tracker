import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

//its important to use modules for css in react and if we dont then the styles will apply towards all code and that can be unpredictable so we want the css file to belong to the js file and we use modules for that