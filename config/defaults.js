const path = require('path');

module.exports = {
    root: path.normalize(`${__dirname}/../..`),
    version: 'NO_GIT_SHA',
    log: {
        level: 'debug',
        sendAuditData: false,
    },
    server: {
        port: 3000,
        region: 'local',
    },
    dependencies: {
        myAwsomeDB: {
            baseUrl: 'http://localhost:3001',
        },
        upstreamSvc1: {
            baseUrl: 'http://localhost:3002',
        },
    },
    toggles: {
        function1: true,
        function2: true,
    },
};
