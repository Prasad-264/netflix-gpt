import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.error(error.message);
    });
  }
  return (
    <div className="absolute z-50 flex items-center justify-between w-full px-6">
      <img 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="header logo"
        className="w-44 my-2"
      />
      {user && <div>
        <button onClick={handleSignOut} className="bg-red-600 px-2 py-1 rounded-md text-white font-semibold">Sign out</button>
      </div>}
    </div>
  )
}

export default Header