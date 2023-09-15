import React from 'react';

import Buttons from './Buttons';

export default {
  title: 'Atoms/Buttons',
  parameters: {
    component: Buttons,
    componentSubtitle: 'The Buttons component is used to create button',
    docs: {
      description: {
        component: 'Button'
      }
    }
  }
};

// variant='contained' || 'outlined' || 'text'; size= 'small' || 'medium' || 'large'

export const ContainedSmall = ( args ) => (
  <Buttons { ...args } />
);

ContainedSmall.args = {
  variant: 'contained',
  displayText: 'SUBMIT',
  background: 'primary-redInteractive',
  fullWidth: true,
  disabled: false,
  size: 'small',
  href: '#'
};

export const ContainedMedium = ( args ) => (
  <Buttons { ...args } />
);

ContainedMedium.args = {
  variant: 'contained',
  displayText: 'SUBMIT',
  background: 'primary-redInteractive',
  fullWidth: true,
  disabled: false,
  size: 'medium',
  href: '#'
};

export const ContainedLarge = ( args ) => (
  <Buttons { ...args } />
);

ContainedLarge.args = {
  variant: 'contained',
  displayText: 'SUBMIT',
  background: 'primary-redInteractive',
  fullWidth: true,
  disabled: false,
  size: 'large',
  href: '#'
};
