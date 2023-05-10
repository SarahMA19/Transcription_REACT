import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


const SignInButton = ({ user, logout }) => {
  return (
      <div className="navbar-end">
          <p alt={user.displayName}></p>
      <button className="btn btn-secondary" onClick={logout}>Sign out</button>
    </div>
  );
};


const Nav = () => {
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
                <li><a href="/">Home</a></li>
                <li><a href="/audio">Services</a></li>
                <li><a href="/">About</a></li>
              </ul>
            </div>
            <a href="/" className="btn btn-ghost normal-case text-2xl">ScriptSmith</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-medium">
              <li><a href="#!">Home</a></li>
              <li><a href="/audio">Services</a></li>
              <li><a href="#!">About</a></li>
            </ul>
          </div>
          <div className="navbar-end">

            {user.loggedIn ? (
              <SignInButton user={user} logout={logout} />
            ) : (
              <button className="btn btn-secondary mt-1 w-51 max-h-96 overflow-y-auto p-2 shadow rounded-box" onClick={login}>
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
    )
};

export default Nav;
