const config = {
    extends: 'airbnb',

    rules: {
        'indent': [2, 4],
        'react/jsx-indent': [2, 4],
        'max-len': [1, 120, 4, {'ignoreUrls': true}],
        'id-length': [0],
        'object-shorthand': [2, 'methods'],
        'arrow-body-style': [0],
        'no-new': [1],
        'eol-last': [1],
        'no-multi-spaces': [0],
        'no-warning-comments': [1, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
        'react/sort-comp': [0],
        'react/jsx-boolean-value': [0],
        'react/jsx-no-bind': [0],
        'react/prefer-es6-class': [0, 'never'],
        'react/jsx-indent-props': [2, 4],
        'jsx-quotes': [1, 'prefer-double'],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js']}],
    },

    env: {
        'browser': true,
        'es6': true,
        'jest': true,
    }
};

if (process.env.NODE_ENV === 'development') {
    config.rules = Object.assign({}, config.rules, {
        'no-console': 0,
    });
}

module.exports = config;
