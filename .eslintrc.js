module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: { 
        ecmaVersion: 6 ,
        ecmaFeatures: {
            'jsx': true
        }
    },
    extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
    rules: {
        'react/prop-types': 0,
      },
};