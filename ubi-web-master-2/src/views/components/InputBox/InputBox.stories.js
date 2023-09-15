import React from 'react';

import InputBox from './InputBox';

export default {
  title: 'Atoms/InputBox',
  parameters: {
    component: InputBox,
    componentSubtitle: 'The InputBox component is used to delineate sections of the page. Commonly gray inside page content, it can also be a multi-colored bar, as used in various footers for both desktop and mobile. Margin and bottom padding values can also be passed as props for specific spacing.',
    docs: {
      description: {
        component: ' '
      }
    }
  }
};

export const BasicUsage = ( args ) => (
  <InputBox { ...args } />
);

BasicUsage.args = {
  type: 'search',
  disabled: false,
  variant: 'filled',
  label:'Input Box',
  displayValue: 'Hello',
  background:'#ffffff'
};
