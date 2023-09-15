import './Home.scss';

import { Box, Paper } from '@mui/material';
import classNames from 'classnames';
import React from 'react';

import { ReactComponent as HomeImage } from '../../../assets/images/home.svg';

const Home = () => {
  return (
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
      className={ classNames( 'homeContainer' ) }
    >
      <Box
        sx={ {
          gridColumn: {
            xs: '1 / span 4',
            sm: '1 / span 4',
            md: '1 / span 6',
            ds: '1 / span 6',
            lg: '1 / span 6',
            xl: '1 / span 6'
          }
        } }

        className={ classNames( 'homeContainerImage' ) }
      >
        <HomeImage />
      </Box>
      <Box
        sx={ {
          gridColumn: {
            xs: '1 / span 4',
            sm: '1 / span 4',
            md: '1 / span 6',
            ds: '7 / span 5',
            lg: '7 / span 5',
            xl: '7 / span 5'
          }
        } }

        className={ classNames( 'homeContainerLoginBox' ) }
      >
        <Paper elevation={ 12 } />
      </Box>
    </Box>
  );
};

export default Home;
