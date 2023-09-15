import './Header.scss';

import { AppBar, Box } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

export const Header = () => {
  return (
    <AppBar position='static'
      color='primary'
    >
      <Box
        sx={ {
          display: 'grid',
          gap: {
            xs: 2,
            sm: 2,
            md: 2,
            ds: 2,
            lg: 2,
            xl: 2
          },
          gridTemplateColumns: {
            xs: 'repeat(4, 1fr)',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(12, 1fr)',
            ds: 'repeat(12, 1fr)',
            lg: 'repeat(12, 1fr)',
            xl: 'repeat(12, 1fr)'
          }
        } }
        className={ classNames( 'headerContainer' ) }
      >
        <Box
          sx={ {
            gridColumn: {
              xs: '1 / span 3',
              sm: '1 / span 2',
              md: '2 / span 3',
              ds: '2 / span 3',
              lg: '2 / span 2',
              xl: '2 / span 2'
            }
          } }
          className={ classNames( 'headerLogoContainer' ) }
        >
          <Logo />
        </Box>
      </Box>


    </AppBar>
  );
};

export default Header;
