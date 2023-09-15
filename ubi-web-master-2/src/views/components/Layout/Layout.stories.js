import React from 'react';

import Layout from './Layout';

export default {
  title: 'Atoms/Layout',
  parameters: {
    component: Layout,
    componentSubtitle: 'The Layout component is used to add header & footer by default with screens',
    docs: {
      description: {
        component: ' '
      }
    }
  }
};

export const BasicUsage = ( args ) => (
  <Layout { ...args } />
);

BasicUsage.args = {
  children: 'gray'
};
