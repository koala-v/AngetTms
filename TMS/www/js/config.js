'use strict';
var appConfig = angular.module('TMS.config', []);
appConfig.constant('ENV', {
    website: 'www.sysfreight.net/app/tms/anget',
     api: 'www.sysfreight.net/apis/tms/anget',
    // api: 'http://localhost:62787/',
    // api:  'localhost:9249',
    reset: {
        'website': 'www.sysfreight.net/app/tms/anget',
        'api': 'www.sysfreight.net/apis/tms/anget',
        'port': '8081'
    },

    websql: {
        name: 'AgentDB',
        version: '1.0',
        displayName: 'TMS Database',
        estimatedSize: 10 * 11024 * 1024
    },
    sqlite: {
        name: 'AppAgent.db',
        location: 'default'
    },
    port: '8081', // http port no
    ssl: false,
    debug: true,
    mock: false,
    fromWeb: true,
    wifi: true,
    appId: '9CBA0A78-7D1D-49D3-BA71-C72E93F9E48F',
    apkName: 'Tan-Agent',
    updateFile: 'update.json',
    rootPath: 'AGENTTMS',
    configFile: 'config.txt',
    version: '1.0.1.1',
});
