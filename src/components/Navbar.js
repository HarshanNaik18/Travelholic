import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase/firebase'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { signOut } from 'firebase/auth';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [isUser, setIsUser] = useState(false);


    const logout = () => {
        signOut(auth).then(() => {
            alert("logged out");
            console.log(auth);
            sessionStorage.removeItem("user");
            setIsUser(false);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        })
    }
    const showButton = () => {
        if (window.innerWidth <= 1100) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        auth.onAuthStateChanged(curretUser => {
            if (curretUser) {
                setIsUser(true);
                setName(curretUser.displayName);
            }
        });
    }, []);


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);

    return (
        <>
            { }
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    TRAVELHOLIC
                </Link>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/plans' className='nav-links' onClick={closeMobileMenu} >
                                Types
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/packages' className='nav-links' onClick={closeMobileMenu} >
                                Packages
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={(isUser) ? '/map' : '/login'} className='nav-links' onClick={closeMobileMenu} >
                                Map
                            </Link>
                        </li>
                        <li className='nav-item'>
                            {(isUser) ? (
                                <div className='nav-links' onClick={closeMobileMenu}>
                                    <div class="dropdown">
                                        <button class="dropbtn">{name}</button>
                                        <div class="dropdown-content">
                                            {/* <b >Profile</b> */}
                                            <b onClick={logout}>Logout</b>
                                        </div>
                                    </div>
                                </div>

                            ) : (<Link to={'/login'} className='nav-links' onClick={closeMobileMenu}>Login</Link>)}
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;