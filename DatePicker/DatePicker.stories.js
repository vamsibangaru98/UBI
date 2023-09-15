import React from 'react';

import DatePicker from './DatePicker';

export default {
  title: 'Atoms/DatePicker',
  parameters: {
    component: DatePicker,
    componentSubtitle: 'The DatePicker component is used to choose the date',
    docs: {
      description: {
        component: ' '
      }
    }
  }
};

export const BasicUsage = ( args ) => (
  <DatePicker { ...args } />
);

BasicUsage.args = {
  bgColor:'#000000',
  width:499
};
