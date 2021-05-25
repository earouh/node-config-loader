const { env } = process;

// define all environment variables here
exports.envs = {
    log: {
        level: env.LOG_LEVEL,
        sendAuditData: env.ENABLE_AUDIT,
    },
    server: {
        port: env.PORT,
        region: env.REGION,
    },
};
