module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: { 
        ecmaVersion: 6 ,
        ecmaFeatures: {
            "jsx": true
        }
    },
    extends: [
        'standard',
        "plugin:react/recommended"
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
      plugins: [
        "react",
        "import"
      ],
    rules: {
        'react/prop-types': 0,
      },
};