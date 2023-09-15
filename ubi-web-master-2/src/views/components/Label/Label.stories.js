import React from 'react';

import Label from './Label';

export default {
  title: 'Atoms/Label',
  parameters: {
    component: Label,
    componentSubtitle: 'The Label component is used to create button',
    docs: {
      description: {
        component: ' '
      }
    }
  }
};

export const GrayColor = ( args ) => (
  <Label { ...args } />
);

export const BlueColor = ( args ) => (
  <Label { ...args } />
);

GrayColor.args = {
  displayText: 'label',
  color:'#4A4A54',
  fontSize: '17px',
  fontWeight: 400,
  lineHeight: '22px',
  letterSpacing: '22',
  textAlign: 'left',
  fontFamily : 'roboto'
};

BlueColor.args = {
  displayText: 'label',
  color: '#060452',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22px',
  letterSpacing: '22',
  textAlign: 'right',
  fontFamily : 'roboto'
};