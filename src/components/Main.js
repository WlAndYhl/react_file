import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../router/index';
import '../styles/App.css';
import '../stores/rem.js';
import { Provider } from 'react-redux';
import configureStore from '../stores/store';
let store = configureStore();
class App extends React.Component {
    render = () => {
        return (
            <Provider store={store}>
                <Router>
                    <section>
                        {routes.map((route) => <Route {...route} />)}
                    </section>
                </Router>
            </Provider>
        )    
    }
}
export default App;
