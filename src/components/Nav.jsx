import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

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
    console.log(user)
    

    return(
      <div className="container">
        <div className="navbar bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">Services</a></li>
        <li><a href="#!">About</a></li>
      </ul>
    </div>
    <Link href="/" className="btn btn-ghost normal-case text-2xl">BRAND NAME</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-0 font-medium">
      <li><a href="#!">Home</a></li>
      <li><a href="#!">Services</a></li>
      <li><a href="#!">About</a></li>
    </ul>
  </div>
  {user.loggedIn ? (
    <SignInButton user={user} logout={logout} />
  ) : (
    <button className="btn btn-secondary"onClick={login}>
        Get Started
        </button>
  )}
  
</div>
</div>
    )
};

export default Nav;
