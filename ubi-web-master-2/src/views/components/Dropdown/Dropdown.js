/**
 * The Dropdown component is used to take input.
 *
 * @module views/components/Dropdown
 */
import './Dropdown.scss';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Divider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Represents a Dropdown component
 *
 * @method
 * @param {DropdownProps} props - React properties passed from composition
 * @returns Dropdown
 */
export const Dropdown = function( props ){
  const { variant, label, width, bgColor, dropdownItems } = props || {};
  const [value, setValue] = React.useState( '' );

  const handleChange = ( event ) => {
    setValue( event.target.value );
  };

  return (
    <>
      <FormControl variant={ variant }
        sx={ { gap:10, height:'76px', width: width, background: 'white', border:1, borderRadius:2, color:'#060452' } }
      >
        <InputLabel sx={ { color:'#060452', fontFamily:'roboto' } }
          id='demo-simple-select-filled-label'
        >{ label }</InputLabel>
        <Select
          labelId='demo-simple-select-filled-label'
          id='demo-simple-select-filled'
          value={ value }
          disableUnderline={ true }
          onChange={ handleChange }
          IconComponent={ ArrowDropDownIcon }
          bgColor='red'
          sx={ { '&:hover': {
            background: 'white'
          }, gap:10, height:'76px', width: width, background:'white', border:1, borderRadius:2, color:'#3735C2' } }
        >
          { dropdownItems.map( ( option ) => (
            <>
              <MenuItem
                value={ option.value }
                sx={ { color:'#0E0C7A', fontFamily:'roboto', fontSize:'17', fontWeight:'700', background:'white' } }
              >{ option.label }</MenuItem>
              <Divider variant='middle' />
            </>
          ) ) }
        </Select>
      </FormControl>
    </>
  );
};


/**
 * property type definitions
 * @typedef DropdownProps
 * @type {object}
 * @property {object} propTypes
 * @property {string} variant - Sets Dropdown variant
 * @property {string} label - Sets Dropdown label
 * @property {number} width - Sets Dropdown width
 * @property {string} bgColor - Sets Dropdown background
 * @property {array} dropdownItems - Sets Dropdown items
 */
export const propTypes =  {
  variant: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
  bgColor: PropTypes.string,
  dropdownItems: PropTypes.array
};

/**
 * Default values for passed properties
 * @property { object } defaultProps
 * @property { string } [variant='filled'] defaultProps.variant - Set default variant to Dropdown
 * @property { string } [label='Dropdown'] defaultProps.label - Set label to Dropdown
 * @property { number } [width=310] defaultProps.width - Set default width
 * @property { string } [bgColor='white'] defaultProps.bgColor - Set background
 * @property { array } [dropdownItems=[{label:'Ten', value:10},{label:'Twenty', value:20},{label:'Thirty', value:30}]] defaultProps.bgColor - Set background
 */
export const defaultProps =  {
  variant: 'filled',
  dropdownItems:[{ label:'Ten', value:10 }, { label:'Twenty', value:20 }, { label:'Thirty', value:30 }]
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
