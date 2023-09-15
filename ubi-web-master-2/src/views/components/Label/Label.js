/**
 * The Label component is used to create button
 *
 * @module views/components/Label
 */
import './Label.scss';

import { FormLabel } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Represents a Label component
 *
 * @method
 * @param {LabelProps} props - React properties passed from composition
 * @returns Label
 */
export const Label = function( props ){
  const { color, fontFamily, fontSize, fontWeight, lineHeight,
    letterSpacing, textAlign, displayText } = props || {};
  return (
    <FormLabel
      sx={ {
        color: { color },
        fontFamily:{ fontFamily },
        fontSize: { fontSize },
        fontWeight: { fontWeight },
        lineHeight: { lineHeight },
        letterSpacing: { letterSpacing },
        textAlign: { textAlign }
      } }
    >
      { displayText }
    </FormLabel>
  );
};

/**
 * property type definitions
 * @typedef LabelProps
 * @type {object}
 * @property {object} propTypes
 * @property {string} color - Sets label color
 * @property {string} fontFamily - sets Label font
 * @property {number} fontSize - sets fonr size
 * @property {string} fontWidth - sets font width
 * @property {string} lineHeight - sets line heights
 * @property {string} letterSpacing - sets letterSpacing
 * @property {string} textAlign - sets textAlign
 * @property {string} displayText - sets displayText
 */
export const propTypes =  {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWidth: PropTypes.number,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textAlign:  PropTypes.string,
  displayText:  PropTypes.string
};

/**
 * Default values for passed properties
 * @property { object } defaultProps
 * @property { string } [displayText='text'] defaultProps.displayText - Set default text
 */
export const defaultProps =  {
  displayText: 'text'
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
