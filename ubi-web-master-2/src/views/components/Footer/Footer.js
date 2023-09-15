import './Footer.scss';

import { Box, Link, Toolbar } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

export const Footer = () => {
  return (
    <Toolbar disableGutters
      className={ classNames( 'footerContainer' ) }
    >
      <Box component='div'>
        <Link href='#'
          underline='hover'
        >
          { 'Privacy Policy' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'Cyber Security Tips' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'Disclaimer' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'Rajbhasha' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'RBI Monetary Museum' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'e-auction Common Landing Platform' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'RTI' }
        </Link>
        <Link href='#'
          underline='hover'
        >
          { 'Sitemap' }
        </Link>
      </Box>
      <Box component='div'
        className={ classNames( 'footerCopyrights' ) }
      >
        Copyright © 2023 Union Bank of India. All rights reserved.
      </Box>
    </Toolbar>
  );
};
