import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home.js';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import UserContext from './utils/UserContext';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({});
    return (
        <Router>
            <div className="App">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <ToastContainer theme="dark" style={{ fontSize: '140%' }} />
                <UserContext.Provider value={{ user, setUser }}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </UserContext.Provider>
            </div>
        </Router>
    );
}

export default App;
