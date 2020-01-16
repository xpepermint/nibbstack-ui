module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-sass-guidelines'
  ],
  rules: {
    'no-empty-source': null,
    'block-no-empty': false,
    'selector-class-pattern': '[a-z_]+',
    'selector-max-id': 2,
    'max-nesting-depth': 3
  }
}
