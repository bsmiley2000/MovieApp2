import React from 'react';
import blahModule from './Blah.module.css';
import joel from './1.jpg';
import { Link } from 'react-router-dom';

function TopBanner(props: any) {
  return (
    <React.Fragment>
      <div className="mt-3 mb-3">
        <Link className="btn btn-secondary mx-1" to="/">
          Home{' '}
        </Link>
        <Link className="btn btn-secondary mx-1" to="/podcast">
          Podcast{' '}
        </Link>
        <Link className="btn btn-secondary mx-1" to="/movies">
          {' '}
          Movies
        </Link>
        <Link className="btn btn-secondary mx-1" to="/movieapi">
            {' '}
            Mission 14 Assignment!
        </Link>
      </div>
      <div className="row">
        <h1 className={blahModule.h1}>
          Welcome to Joel Hilton's Movie Site pt. 2!
        </h1>
        <p>
          This is an updated Movie Website of Joel's favorite movies built on
          React!
        </p>
        <div className="">
          <div className="justify-center">
            <img className={blahModule.img} src={joel} alt="Joel Hilton" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBanner;
