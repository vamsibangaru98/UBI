module.exports = {
  "ignoreFiles": [
    "**/*.js",
    "**/*.jsx"
  ],
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'keyframes',
          'mixin',
          'if',
          'else',
          'function',
          'return',
          'each',
          'use',
          'for',
          'at-root'
        ]
      }
    ],
    'at-rule-no-vendor-prefix': null,
    'block-opening-brace-newline-after': null,
    'color-function-notation': null,
    'custom-property-pattern': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'font-family-name-quotes': null,
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': 'always',
    'function-url-quotes': null,
    'hue-degree-notation': null,
    indentation: 2,
    'keyframes-name-pattern': null,
    'max-line-length': null,
    'media-feature-name-no-vendor-prefix': null,
    'named-grid-areas-no-invalid': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': null,
    'number-max-precision': 6,
    'order/properties-alphabetical-order': true,
    'property-no-unknown': [true, { ignoreSelectors: [':export'] }],
    'property-no-vendor-prefix': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-mixin-argumentless-call-parentheses': null,
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-colon-space-after': null,
    'scss/dollar-variable-colon-space-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/no-global-function-names': null,
    'scss/operator-no-unspaced': null,
    'selector-attribute-quotes': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-no-vendor-prefix': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external']
      }
    ],
    'shorthand-property-no-redundant-values': null,
    'string-quotes': null,
    'unit-allowed-list': ['fr', 'rem', 'px', '%', 's', 'ms', 'em', 'deg', 'dpcm', 'vh', 'vw'],
    'value-keyword-case': null
  }
};
