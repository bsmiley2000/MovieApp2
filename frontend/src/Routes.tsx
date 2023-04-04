import React from 'react';
import { Route, Routes } from 'react-router-dom';

import TopBanner from './Home';
import Podcast from './Podcast';
import MovieList from './Movies';
import MovieData from "./Movie/MovieList";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<TopBanner />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movieapi" element={<MovieData />} />
    </Routes>
  </main>
);

export default Main;
