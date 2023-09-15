import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../../components/Layout/Layout';
import Home from '../../pages/Home/Home';

export const Router = () => {
  const homeComponent = <Home />;
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact
            path='/'
            element={ homeComponent }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
