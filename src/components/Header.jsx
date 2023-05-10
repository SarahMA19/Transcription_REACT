import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaUser } from 'react-icons/fa';


const SignInButton = ({ user, logout }) => {
    return (
        <div className="navbar-end">
            <p alt={user.displayName}></p>
        <a href="/" className="btn btn-secondary" onClick={logout}>Sign out</a>
      </div>
    );
  };



const Header = () => {
    const {user, login, logout} = useContext(AuthContext);
   
    return (
        <header className='bg-base-100 py-2 sticky top-0 z-50'>
            <div className="container">
                <div className="navbar bg-base-100 shadow-md">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-circle btn-primary lg:hidden mr-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
                                <li><a href="#!">Recordings</a></li>
                                <li><a href="#!">Orders</a></li>
                                <li><a href="#!">Support</a></li>
                            </ul>
                        </div>
                        <a href="/" className="btn btn-ghost normal-case text-2xl">ScriptSmith</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 font-medium">
                            <li><a href="#!">Recordings</a></li>
                            <li><a href="#!">Orders</a></li>
                            <li><a href="#!">Support</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <a href="#!"><span className="pl-20"><FaUser size={32} /></span></a>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a href="/" className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                {user.loggedIn ? (
                                    <SignInButton href="/" user={user} logout={logout} />
                                ) : (
                                    <button className="btn btn-secondary mt-1 w-51 max-h-96 overflow-y-auto p-2 shadow rounded-box" onClick={login}>
                                        Get Started
                                    </button>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


