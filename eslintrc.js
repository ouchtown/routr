module.exports = {
    "env": {
        "node": true
    },
    "parser": "babel-eslint",
    "extend": "eslint:recommended",
    "rules": {
        "indent": [2, 4, {SwitchCase: 1}],
        "quotes": [2, 'single'],
        "dot-notation": [2, {allowKeywords: false}]
    }
}
