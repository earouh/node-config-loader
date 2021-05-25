exports.default = {
    server: {
        port: 8000,
        region: 'automation',
    },
    dependencies: {
        myAwsomeDB: {
            baseUrl: 'http://automation-db',
        },
        upstreamSvc1: {
            baseUrl: 'http://automation-svc1:3000',
        },
    },
    toggles: {
        function1: true,
        function2: true,
    },
};
