'use client';
import { signOut } from 'next-auth/react';
import SearchBar from './search-bar';

const Communication = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => signOut()}
        className="absolute right-0 top-0 text-white"
      >
        Sign out
      </button>
      <p>Communication</p>
      <SearchBar />
    </div>
  );
};

export default Communication;
