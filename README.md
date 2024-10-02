### Steps
- Run `npm install`
- Run `npm run cypress:run`

### Node/NPM versions tested (NVM)
- node v22.9.0 (npm v10.8.3)
- node v20.17.0 (npm v10.8.2)
- node v18.20.4 (npm v10.7.0)

### Machine
- MacBook Pro
- Chip: Apple M3 Pro
- macOS: Sonoma 14.6.1

### Error

```text
DevTools listening on ws://127.0.0.1:55807/devtools/browser/fcfd8970-f132-4c26-b751-068e68d64d22
2024-10-02 10:51:53.408 Cypress[20159:129396] WARNING: Secure coding is not enabled for restorable state! Enable secure coding by implementing NSApplicationDelegate.applicationSupportsSecureRestorableState: and returning YES.
Error loading the reporter: @reportportal/agent-js-cypress

We searched for the reporter in these paths:

 - /Users/removed/IdeaProjects/cypress-rp-plugin-issue/@reportportal/agent-js-cypress
 - /Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/@reportportal/agent-js-cypress

Learn more at https://on.cypress.io/reporters

Error: dlopen(/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/prebuilds/darwin-x64+arm64/electron.napi.node, 0x0001): tried: '/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/prebuilds/darwin-x64+arm64/electron.napi.node' (code signature in <0597889B-E5ED-385D-B003-3B76F9B3F07C> '/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/prebuilds/darwin-x64+arm64/electron.napi.node' not valid for use in process: mapping process and mapped file (non-platform) have different Team IDs), '/System/Volumes/Preboot/Cryptexes/OS/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/prebuilds/darwin-x64+arm64/electron.napi.node' (no such file), '/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/prebuilds/darwin-x64+arm64/electron.napi.node' (code signature in <0597889B-E5ED-385D-B003-3B76F9B3F07C> '/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/prebuilds/darwin-x64+arm64/electron.napi.node' not valid for use in process: mapping process and mapped file (non-platform) have different Team IDs)
    at process.func [as dlopen] (node:electron/js2c/node_init:2:2107)
    at Object.<anonymous> (node:internal/modules/cjs/loader:1356:18)
    at Object.func [as .node] (node:electron/js2c/node_init:2:2107)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at load (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/node-gyp-build/node-gyp-build.js:22:10)
    at Object.<anonymous> (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/microtime/index.js:1:43)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
    at Object..js (node:internal/modules/cjs/loader:1326:10)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at Object.<anonymous> (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/@reportportal/client-javascript/lib/helpers.js:4:19)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
    at Object..js (node:internal/modules/cjs/loader:1326:10)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at Object.<anonymous> (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/@reportportal/agent-js-cypress/lib/utils/objectCreators.js:18:23)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
    at Object..js (node:internal/modules/cjs/loader:1326:10)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at Object.<anonymous> (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/@reportportal/agent-js-cypress/lib/utils/index.js:19:24)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
    at Object..js (node:internal/modules/cjs/loader:1326:10)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at Object.<anonymous> (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/@reportportal/agent-js-cypress/lib/cypressReporter.js:43:5)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
    at Object..js (node:internal/modules/cjs/loader:1326:10)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at Object.<anonymous> (/Users/removed/IdeaProjects/cypress-rp-plugin-issue/node_modules/@reportportal/agent-js-cypress/index.js:1:18)
    at Module._compile (node:internal/modules/cjs/loader:1271:14)
    at Object..js (node:internal/modules/cjs/loader:1326:10)
    at Module.load (node:internal/modules/cjs/loader:1126:32)
    at node:internal/modules/cjs/loader:967:12
    at PackherdModuleLoader.origLoad (node:electron/js2c/node_init:2:13357)
    at PackherdModuleLoader.tryLoad (evalmachine.<anonymous>:1:755466)
    at Function.<anonymous> (evalmachine.<anonymous>:1:765680)
    at i._load (<embedded>:2939:67438)
    at Module.require (node:internal/modules/cjs/loader:1150:19)
    at require (node:internal/modules/cjs/helpers:121:18)
    at A.loadReporter (<embedded>:2944:21800)
    at C.initializeReporter (<embedded>:2997:27000)
    at C.startWebsockets (<embedded>:2997:27304)
    at C.open (<embedded>:2997:25601)
    at async v.create (<embedded>:2997:40000)
    at async R (<embedded>:2997:79065)
    at async W (<embedded>:2997:92854)
```
