import React from 'react';

import Divider from './Divider';

export default {
  title: 'Atoms/Divider',
  parameters: {
    component: Divider,
    componentSubtitle: 'The Divider component is used to delineate sections of the page. Commonly gray inside page content, it can also be a multi-colored bar, as used in various footers for both desktop and mobile. Margin and bottom padding values can also be passed as props for specific spacing.',
    docs: {
      description: {
        component: ' '
      }
    }
  }
};

export const BasicUsage = ( args ) => (
  <Divider { ...args } />
);

BasicUsage.args = {
  type: 'gray'
};
