import React from 'react';
import { Link } from 'react-router-dom';

export default function Podcast() {
  return (
    <>
      <h1>This is my podcast page. </h1>
      <p className="mt-5 mb-3">Follow the link below for fun surprises!</p>
      <a href="https://baconsale.com">Podcast</a>
      <div className="mt-5">
        <Link to="/" className="btn btn-secondary">
          Return Home
        </Link>
      </div>
    </>
  );
}
