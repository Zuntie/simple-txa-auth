const { Issuer, custom } = require('openid-client');
const crypto = require('crypto');

let client;


// Setup OIDC client
async function getClient() {
    if (!client) {
        const fivemIssuer = await Issuer.discover('https://idms.fivem.net');

        client = new fivemIssuer.Client({
            client_id: 'txadmin_test', // Important, do not change
            client_secret: 'txadmin_test', // Important, do not change
            response_types: ['openid'],
        });

        custom.setHttpOptionsDefaults({
            timeout: 10000,
        });
    }

    return client;
}


// Function to generate hashed state
function getAuthState(state) {
    return crypto.createHash('sha256').update(state).digest('hex');
}


// Function to get user info
async function getUserInfo(client, tokenSet) {
    return client.userinfo(tokenSet.access_token);
}


module.exports = {
    getClient,
    getAuthState,
    getUserInfo,
};
