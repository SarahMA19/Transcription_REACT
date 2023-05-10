import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const SignInButton = ({ user, logout }) => {
    return (
        <div className="navbar-end">
            <p alt={user.displayName}></p>
        <button className="btn btn-secondary" onClick={logout}>Sign out</button>
      </div>
    );
  };


export default function CTA() {
    const {user, login, logout} = useContext(AuthContext);
    return(
        <section className='py-12 md:py-24'>
            <div className='container'>
                <div className='flex felx-col md:flex-row justify-center items-center gap-6 text-center md:text-left'>
                    <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary ml-20'>Let's make something <br className='hidden sm:inline' />
                        great together.
                    </span>
                    {user.loggedIn ? (
                        <SignInButton user={user} logout={logout} />
                    ) : (
                        <button className="btn btn-secondary mr-20" onClick={login}>
                            Get Started
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}