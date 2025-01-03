module.exports = {
    env: {
        es2022: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
    },
    extends: ["eslint:recommended"],
    rules: {
        "no-restricted-globals": ["error", "name", "length"],
        "prefer-arrow-callback": "error",
        "linebreak-style": 0,
        quotes: ["error", "double", {allowTemplateLiterals: true}]
    },
    overrides: [
        {
            files: ["**/*.spec.*"],
            env: {
                mocha: true
            },
            rules: {}
        }
    ],
    globals: {}
};
