import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

reportWebVitals();
