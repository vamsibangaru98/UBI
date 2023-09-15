/**
 * Utils/Color transform the colors SASS-variables to JS object in order to reuse them.
 *
 * @module utils/Tokens/Colors
 */
import _colors from '../_mixins/_colors.module.scss';
import { objectifySassVars } from '../Tokens/Tokens';

const colors = objectifySassVars( _colors );

export default colors;
