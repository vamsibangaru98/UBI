/**
 * The Buttons component is used to create button
 *
 * @module views/components/Buttons
 */
import './Buttons.scss';

import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../../utils/Colors/Colors';


/**
 * Represents a Buttons component
 *
 * @method
 * @param {ButtonsProps} props - React properties passed from composition
 * @returns Buttons
 */
export const Buttons = function( props ){
  const {
    variant,
    displayText,
    background,
    fullWidth,
    disabled,
    size,
    href
  } = props || {};
  const backgroundColorArr = background.split( '-' );
  const backgroundColorNameObj = colors[backgroundColorArr[0]] || {};
  const backgroundColor = backgroundColorNameObj[backgroundColorArr[1]];
  return (
    <Button
      disableElevation={ true }
      disableRipple={ true }
      variant={ variant }
      fullWidth={ fullWidth }
      disabled={ disabled }
      size={ size }
      href={ href }
      sx={ {
        'background': backgroundColor,
        '&:hover': { backgroundColor: backgroundColor },
        'fontWeight': 700,
        'fontSize': '17px',
        'lineHeight': '22px',
        'font': 'Roboto'
      } }
      onClick={ ( e )=>{
        // eslint-disable-next-line no-console
        console.log( 'button click catched' );
        alert( 'button click catched' );
      } }
    >
      { displayText }
    </Button>
  );
};

/**
 * property type definitions
 * @typedef ButtonsProps
 * @type {object}
 * @property {object} propTypes
 * @property {string} variant - Sets button variant can be one of('contained','outlined','text')
 * @property {string} displayText - display text on buttons
 * @property {string} background - button background color
 * @property {boolean} fullWidth - If `true`, the button will take up the full width of its container.
 * @property {boolean} disabled - Sets button disabled
 * @property {string} size - set the size of button can be one of('small','medium','large')
 * @property {string} href - The URL to link to when the button is clicked.
 */
export const propTypes =  {
  variant: PropTypes.string,
  displayText: PropTypes.string,
  background: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  href: PropTypes.string
};

/**
 * Default values for passed properties
 * @property { object } defaultProps
 * @property { string } [variant='contained'] defaultProps.variant - Set to 'contained' for displaying the default button
 */
export const defaultProps =  {
  variant: 'contained'
};

Buttons.propTypes = propTypes;
Buttons.defaultProps = defaultProps;

export default Buttons;
