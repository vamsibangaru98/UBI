/**
 * The DatePicker component is used to choose the date
 *
 * @module views/components/DatePicker
 */
import './DatePicker.scss';

import PropTypes from 'prop-types';
import React from 'react';


/**
 * Represents a DatePicker component
 *
 * @method
 * @param {DatePickerProps} props - React properties passed from composition
 * @returns DatePicker
 */
export const DatePicker = function( props ){
  const {
    defaultValue
  } = props || {};
  return (
    <DatePicker
      label='Date of Birth'
      defaultValue={ defaultValue }
    />
  );
};

/**
 * property type definitions
 * @typedef DatePickerProps
 * @property {string} defaultValue - set the defaultValue of datepicker
 */
export const propTypes =  {
  defaultValue: PropTypes.string
};

/**
 * Default values for passed properties
 * @property { string } [defaultValue={dayjs('2022-04-17')} ]
 */

DatePicker.propTypes = propTypes;

export default DatePicker;
