module.exports = {
  root: true,
  globals: {
    window: true,
    chrome: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true
    }],
    'comma-dangle': ['error', 'never'],
    'object-shorthand': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'spaced-comment': 0,
    'no-console': 0,
    'prefer-arrow-callback': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'padded-blocks': 0,
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 0,
    'arrow-parens': 0,
    'max-len': [1, 200],
    indent: 0,
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'no-mixed-operators': 0,
    'import/no-unresolved': 0
  }
};
