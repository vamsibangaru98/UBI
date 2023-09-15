/**
 * The InputBox component is used to take input.
 *
 * @module views/components/InputBox
 */
import './InputBox.scss';

import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Represents a InputBox component
 *
 * @method
 * @param {InputBoxProps} props - React properties passed from composition
 * @returns InputBox
 */
export const InputBox = function( props ){
  const { label, type, disabled, variant, displayValue, background } = props || {};
  if( !type || !variant ){
    return null;
  }
  return (
    <>
      { /* <div
        role='presentation'
        aria-hidden={ true }
        className={ classNames( 'InputBox', {
          'Divider__Gray' : type && type === 'gray'
        } ) }
      >
      </div> */ }

      <TextField
        disabled={ disabled }
        id='outlined-required'
        label={ label }
        variant={ variant }
        type={ type }
        sx={ {
          background: { background }
        } }
        defaultValue={ displayValue }
      />

    </>
  );
};

/**
 * property type definitions
 * @typedef InputBoxProps
 * @type {object}
 * @property {object} propTypes
 * @property {string} type - Sets type of inputBox
 * @property {boolean} disabled - Sets to enable or disable the inputBox
 * @property {string} variant - Sets variant inputBox
 * @property {string} label - Sets label to inputBox
 * @property {string} displayValue - Sets display value to inputBox
 * @property {string} background - Sets background of inputBox
 */
export const propTypes =  {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  label: PropTypes.string,
  displayValue: PropTypes.string,
  background: PropTypes.string
};

/**
 * Default values for passed properties
 * @property { object } defaultProps
 * @property { string } [type='search'] defaultProps.type - Set to 'search' for displaying the default inputBox
 * @property { boolean } [disabled=false] defaultProps.disabled - Set to false for displaying the inputBox as required
 * @property { string } [variant='filled'] defaultProps.variant - Set to display filled inputBox
 * @property { string } [label='Input Box'] defaultProps.label - Set to label of inputBox
 * @property { string } [displayValue='Hello'] defaultProps.displayValue - Set to display default value of inputBox
 */
export const defaultProps =  {
  type: 'search',
  disabled: false,
  variant: 'filled',
  label:'Input Box',
  displayValue: 'Hello',
  background:'red'
};

InputBox.propTypes = propTypes;
InputBox.defaultProps = defaultProps;

export default InputBox;
