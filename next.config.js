const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ["via.placeholder.com"],
    },
    env: {
        apiUrl: 'http://localhost:5000/api',
        JWT_SECRET: 'SOMESUPERSECRECTCODEHERE'
    }
});
