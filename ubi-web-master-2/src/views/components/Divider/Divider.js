/**
 * The Divider component is used to delineate sections of the page. Commonly gray inside page content, it can also be a multi-colored bar, as used in various footers for both desktop and mobile. Margin and bottom padding values can also be passed as props for specific spacing.
 *
 * @module views/components/Divider
 */
import './Divider.scss';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Represents a Divider component
 *
 * @method
 * @param {DividerProps} props - React properties passed from composition
 * @returns Divider
 */
export const Divider = function( props ){
  const { type } = props || {};
  return (
    <>
      <div
        role='presentation'
        aria-hidden={ true }
        className={ classNames( 'Divider', {
          'Divider__Gray' : type && type === 'gray'
        } ) }
      >
      </div>
    </>
  );
};

/**
 * property type definitions
 * @typedef DividerProps
 * @type {object}
 * @property {object} propTypes
 * @property {string} type - Sets divider type
 */
export const propTypes =  {
  type: PropTypes.string
};

/**
 * Default values for passed properties
 * @property { object } defaultProps
 * @property { string } [type='gray'] defaultProps.type - Set to 'gray' for displaying the default divider
 */
export const defaultProps =  {
  type: 'gray'
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;
