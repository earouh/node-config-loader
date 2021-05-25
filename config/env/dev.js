exports.default = {
    server: {
        region: 'ap-northeast-1',
    },
    dependencies: {
        myAwsomeDB: {
            baseUrl: 'http://dev-db',
        },
        upstreamSvc1: {
            baseUrl: 'http://dev-svc1:3000',
        },
    },
    toggles: {
        function1: false,
    },
};
