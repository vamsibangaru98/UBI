/**
 * The Layout component is used to add header & footer by default with screens
 *
 * @module views/components/Layout
 */
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

/**
 * Represents a Layout component
 *
 * @method
 * @param {LayoutProps} props - React properties passed from composition
 * @returns Layout
 */
export const Layout = ( props ) => {
  const { children } = props || {};
  return (
    <Container maxWidth={ false }
      disableGutters={ true }
    >
      <Header />
      { children }
      <Footer />
    </Container>
  );
};

/**
 * property type definitions
 * @typedef LayoutProps
 * @type {object}
 * @property {object} propTypes
 * @property {object} children - Sets children component between header and footer components
 */
export const propTypes =  {
  children: PropTypes.object
};


Layout.propTypes = propTypes;

export default Layout;
