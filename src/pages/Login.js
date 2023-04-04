import React from 'react';
import UserContext from '../utils/UserContext';
import login from '../assets/functions/login';
import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// const handleDate = () => {

//     return Time();
// };

const Login = () => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('pass@word1');

    const { setUser } = useContext(UserContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(username, password);
        if (res.token) {
            document.cookie = `jwt=${res.token}`;
            setUser(res);
            history.push('/home');
        } else {
            setUser({});
            history.push('/');
        }
    };

    const T = {
        format: (date) => {
            const hours = T.formatHours(date.getHours()),
                minutes = date.getMinutes();
            return `${hours}:${T.formatSegment(minutes)}`;
        },
        formatHours: (hours) => {
            return hours % 12 === 0 ? 12 : hours % 12;
        },
        formatSegment: (segment) => {
            return segment < 10 ? `0${segment}` : segment;
        },
    };
    const useCurrentDateEffect = () => {
        const [date, setDate] = useState(new Date());
        useEffect(() => {
            const interval = setInterval(() => {
                const update = new Date();
                if (update.getSeconds() !== date.getSeconds()) {
                    setDate(update);
                }
            }, 10000);
            return () => clearInterval(interval);
        }, [date]);
        return date;
    };
    const Time = () => {
        const date = useCurrentDateEffect();
        return T.format(date);
    };

    // const [styleState, setStyleState] = useState("");
    const handleGoToLogin = () => {
        const welcomePage = document.querySelector('.welcome-page');
        const loginPage = document.querySelector('.login');
        welcomePage.style = `
            transition: animation ease-in-out ;
            animation: moveUp 1.5s linear forwards ;`;
        loginPage.style = `transition: animation 2s ease-in-out ;
            display: flex;
            animation: comeBack 2s linear forwards ;`;
    };

    return (
        <div className="login_welcome">
            <section className="welcome-page">
                <div className="container center">
                    <div className="left-side">
                        <i className="login-logo fa-brands fa-phoenix-framework"></i>
                        <h1 className="heading">Aurora ERP</h1>
                    </div>
                </div>
                <div id="app-info" className="info">
                    <span className="time">{Time()}</span>
                    <span className="weather">
                        <i
                            className={`fa fa-${
                                new Date().getHours() > 18 ? 'moon' : 'sun'
                            } fa-2x`}
                        ></i>
                        <span className="weather-temperature-value">
                            {new Date().getHours() > 18
                                ? 'Good Night'
                                : 'Good Morning'}
                        </span>
                    </span>
                </div>
                <div className="goToLogin" onClick={handleGoToLogin}>
                    <button className="btn_">
                        <i className="fa-solid fa-plane-up"></i>
                    </button>
                </div>
            </section>
            <section className="login center">
                <div className="container center">
                    <div className="left-side">
                        <i className="login-logo fa-brands fa-phoenix-framework"></i>
                        <h1 className="heading">Aurora ERP</h1>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className="login-form">
                        <h1 className="heading">Welcome Back</h1>
                        <div className="group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                                autoComplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <i className="form-icon fa fa-user"></i>
                        </div>
                        <div className="group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="form-icon fa fa-lock"></i>
                        </div>
                        <div className="group">
                            <button
                                type="submit"
                                value=""
                                className="btn_"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
