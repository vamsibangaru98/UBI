import React from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Atoms/Dropdown',
  parameters: {
    component: Dropdown,
    componentSubtitle: 'The Dropdown component is used to show the items',
    docs: {
      description: {
        component: ' '
      }
    }
  }
};

export const BasicUsage = ( args ) => (
  <Dropdown { ...args } />
);

BasicUsage.args = {
  variant: 'filled',
  label:'Dropdown',
  bgColor:'#000000',
  width:499
};
