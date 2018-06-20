import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './Welcome';

if (location.pathname == '/welcome') {
    ReactDOM.render(
        <Welcome />,
        document.querySelector('main')
    );
} else {
    ReactDOM.render(<App />,
        document.querySelector('main'));
}
