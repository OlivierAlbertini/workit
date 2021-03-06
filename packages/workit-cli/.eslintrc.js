module.exports = {
    "root": true,
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "extends": [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "rules": {
        // prettier conflicts
        "no-underscore-dangle": "off",
        "max-len": "off",
        "max-classes-per-file": "off",
        "class-methods-use-this": "off",
        "no-await-in-loop": "off",
        "import/prefer-default-export": "off",
        "comma-dangle": "off",
        "object-curly-newline": "off",
        "arrow-parens": "off",
        "implicit-arrow-linebreak": "off",
        "function-paren-newline": "off",
        "prettier/prettier": "error",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": true
                }
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/comma-dangle": "off",
        "import/no-dynamic-require": "off",
        "global-require": "off"
    }
}