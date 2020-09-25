
This project is to demonstrate the issue with `Stencil` (`"@stencil/core": "^2.0.0"`)  `Amplify` (`"@aws-amplify/auth": "^3.4.5"`) on `Windows 10`.

Set correct values for `Amplify` auth in `src/amplify-config.ts`

Start the app on Mac/Linux. It works just fine. (With WSL on Windows 10 too)
If you start on Windows it complains about the `browser` config in the `package.json` of `@aws-sdk/client-cognito-identity`. 

```json
    "browser": {
        "./runtimeConfig": "./runtimeConfig.browser"
    }
```

Following is the error text assuming the project is under `C:/stencil-amplify-windows-10-issue/`

Rollup: EnoentCould not load C:/stencil-amplify-windows-10-issue/node_modules/@aws-sdk/client-cognito-identity/dist/es/runtimeConfig.browser (imported by ./node_modules/@aws-sdk/client-cognito-identity/dist/es/CognitoIdentityClient.js): ENOENT: no such file or directory, open 'C:/stencil-amplify-windows-10-issue/node_modules/@aws-sdk/client-cognito-identity/dist/es/runtimeConfig.browser'



### Install the dependency and run the project:

```bash
npm i && npm start
```
If I update the config in the `@aws-sdk/client-cognito-identity/package.json` to the following it works on Windows 10 with Command Prompt.

```json
    "browser": {
        "./runtimeConfig": "./runtimeConfig.browser.js"
    }
```
