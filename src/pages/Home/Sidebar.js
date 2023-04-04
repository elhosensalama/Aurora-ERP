// import { useContext } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logout from '../../assets/functions/logout';
import UserContext from '../../utils/UserContext';
import navItems from './navItems';

const NavItem = ({
    setComponentState,
    ComponentState,
    ComponentStateValue,
    icon,
    to = '#',
}) => {
    return (
        <li className="nav-item">
            <Link
                to={to}
                className={`nav-link ${
                    ComponentState === ComponentStateValue
                        ? 'active'
                        : 'text-white'
                }`}
                aria-current="page"
                onClick={() => {
                    setComponentState(ComponentStateValue);
                }}
            >
                <i
                    className={`fa fa-${icon} bi pe-none me-2`}
                    width="16"
                    height="16"
                ></i>
                {ComponentStateValue}
            </Link>
        </li>
    );
};
// Dashboard
// Basic
// Items
// Customers
// Invoices
// Receipts
// Stores
// Treasury
// Providers
// Employees
// Banks
// Upload
// Management

const Sidebar = ({ setComponentState, ComponentState }) => {
    // const { user } = useContext(UserContext);
    const history = useHistory();

    const { user, setUser } = useContext(UserContext);

    const handleLoggingOut = (e) => {
        const loggedOut = logout();
        e.preventDefault();
        if (loggedOut) {
            setUser({});
            history.push('/');
        }
    };

    return (
        <div className="sidebar">
            <main className="sidebar-main d-flex flex-nowrap">
                {/* text-bg-dark */}
                <div
                    className="d-flex flex-column flex-shrink-0 p-3"
                    style={{ width: '280px' }}
                >
                    <Link
                        to="/home"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                        <i className="aurora-logo fab fa-phoenix-framework ms-3 me-2"></i>
                        <span className="fs-4">Aurora ERP</span>
                    </Link>
                    <hr />
                    <ul
                        className="nav nav-pills flex-column mb-auto"
                        style={{ gap: '1rem' }}
                    >
                        {navItems.map((navItem, i) => (
                            <NavItem
                                setComponentState={setComponentState}
                                ComponentState={ComponentState}
                                ComponentStateValue={navItem.value}
                                icon={navItem.icon}
                                to={navItem.to}
                                key={i}
                            />
                        ))}
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <Link
                            to="#"
                            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {/* "/imgs/users/default.jpg" */}
                            <img
                                src={`/imgs/users/${user.photo}`}
                                alt=""
                                width="32"
                                height="32"
                                className="rounded-circle me-2"
                            />
                            <strong>{user.name}</strong>
                        </Link>
                        <ul
                            className="dropdown-menu dropdown-menu-dark text-small shadow"
                            style={{ fontSize: '100%' }}
                        >
                            {/* <li>
                                <Link className="dropdown-item" to="#">
                                    New project...
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">
                                    Profile
                                </Link>
                            </li> */}
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item"
                                    to="#"
                                    onClick={handleLoggingOut}
                                >
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="b-example-divider b-example-vr"></div>
            </main>
        </div>
    );
};

export default Sidebar;
