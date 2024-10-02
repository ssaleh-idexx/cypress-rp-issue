const { defineConfig } = require('cypress')

module.exports = defineConfig({
    fixturesFolder: false,
    e2e: {},
    reporter: '@reportportal/agent-js-cypress',
    reporterOptions: {
        apiKey: '<API_KEY>',
        endpoint: 'https://your.reportportal.server/api/v1',
        project: 'Your reportportal project name',
        launch: 'Your launch name',
        description: 'Your launch description',
        attributes: [
            {
                key: 'attributeKey',
                value: 'attributeValue',
            },
            {
                value: 'anotherAttributeValue',
            },
        ],
    },
})
