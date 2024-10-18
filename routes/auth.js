const express = require('express');
const router = express.Router();
const { randomUUID } = require('crypto');
const { getClient, getAuthState, getUserInfo } = require('../utils/oidc-client');


// Login route
router.get('/login', async (req, res) => {
    const client = await getClient();
    const randomId = randomUUID();
    const state = getAuthState(randomId);

    // Store the state in the session
    req.session.state = state;
    console.log('State:', state);

    // Generates the authorization URL
    const url = client.authorizationUrl({
        redirect_uri: 'http://localhost:3000/callback',
        state: state,
        response_type: 'code',
        scope: 'openid identify',
    });

    // Redirect to auth URL
    res.redirect(url);
});


// Callback route
router.get('/callback', async (req, res) => {
    const client = await getClient(); //
    const params = client.callbackParams(req);

    // Retrieve the state from the session
    const sessionState = req.session.state;

    if (!sessionState) {
        return res.status(400).send('Session state not found. Please try again.');
    }

    // Debugging
    console.log('Params:', params);
    console.log('Session State:', sessionState);

    // Handle the callback
    try {
        const tokenSet = await client.callback('http://localhost:3000/callback', params, { state: sessionState });
        console.log('TokenSet:', tokenSet);

        const userInfo = await getUserInfo(client, tokenSet);
        
        console.log('User Info:', userInfo);

        delete userInfo.sub;
        res.json(userInfo);
    } catch (err) {
        console.error('Callback error:', err);
        res.status(500).send('Authentication failed');
    }

});


module.exports = router;