var clientId = '00466414-78cb-46f9-a8f7-3a366b52293e';
var clientSecret = 'bqmqRFH6239%-jwyCSQL8!$';
var redirectUri = 'http://localhost:2018/authorize';
var scopes = ['openid','profile','offline_access'];

var credentials = {
    client: {
        id: clientId,
        secret: clientSecret,
    },
    auth: {
        tokenHost: 'https://login.microsoftonline.com',
        authorizePath: 'common/oauth2/authorize',
        tokenPath: 'common/oauth2/token'
    }
};
var oauth2 = require('simple-oauth2').create(credentials)
module.exports = {
    getAuthUri: function () {
        var returnVal = oauth2.authorizationCode.authorizeURL({
            redirect_uri: redirectUri,
            scope: scopes
        });
        return returnVal;
    },
    getTokenFromCode: (auth_code, callback, request, response)=> {
        oauth2.authorizationCode.getToken({
            code: auth_code,
            redirect_uri: redirectUri,
            scope: scopes
        },(error, result)=> {
            if (error) {
                console.log('Access token error: ', error.message);
                callback(request, response, error, null);
            }
            else {
                var token = oauth2.accessToken.create(result);
                callback(request, response, null, token);
            }
        });
    },

    getEmailFromIdToken: function (id_token) {
        // JWT is in three parts, separated by a '.'
        var token_parts = id_token.split('.');

        // Token content is in the second part, in urlsafe base64
        var encoded_token = new Buffer(token_parts[1].replace('-', '+').replace('_', '/'), 'base64');

        var decoded_token = encoded_token.toString();

        var jwt = JSON.parse(decoded_token);
        // Email is in the preferred_username field
        return jwt.unique_name
    },

    getTokenFromRefreshToken: function (refresh_token, callback, request, response) {
        var token = oauth2.accessToken.create({ refresh_token: refresh_token, expires_in: 0 });
        token.refresh(function (error, result) {
            if (error) {
                console.log('Refresh token error: ', error.message);
                callback(request, response, error, null);
            }
            else {
                console.log('New token: ', result.token);
                callback(request, response, null, result);
            }
        });
    }
}
