exports.default = {
    log: {
        level: 'info',
        sendAuditData: true,
    },
    server: {
        region: 'ap-northeast-1',
    },
    dependencies: {
        myAwsomeDB: {
            baseUrl: 'http://prod-db',
        },
        upstreamSvc1: {
            baseUrl: 'http://prod-svc1:3000',
        },
    },
    toggles: {
        function1: false,
        function2: false,
    },
};
