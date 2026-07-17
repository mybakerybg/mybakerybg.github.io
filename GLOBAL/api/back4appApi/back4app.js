// Server - https://www.back4app.com/
// App - Hleb Knyajevo
export const back4appBrowserStorageItemName = 'sessionBack4app';

export const info = {
    host: 'https://parseapi.back4app.com',
    headers: {
        'X-Parse-Application-Id': 'YjO6dtHrip5mQipUGskoXrH0U4zsnnnWu97d185Z',
        'X-Parse-REST-API-Key': '9aPgbHn4LL4evvuYCnMBHQvSNsy5RCJSwy0FSnDc',
        'Content-Type': 'application/json'
    },
    className: 'PublicDataClass',
    objectId: 'PH5fAz3B0C',
};

const usersInfo = {
    signUp: {
        headers: {
            "X-Parse-Revocable-Session": "1"
        },
        body: 'username+password+email' // response: ['objectId', 'sessionToken', 'r:']
    },

    logIn: {
        headers: {
            "X-Parse-Revocable-Session": "1"
        },
        body: 'username+password' // response: ['objectId', 'sessionToken', 'r:']
    },


    verifyEmail: {
        headers: {},
        body: 'email'
    },

    passwordReset: {
        headers: {},
        body: 'email' // response: ['objectId', 'sessionToken', 'r:']
    },

    retrieveCurrentUser: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: {} // response: All the user-provided fields, except password
    },

    readingUsers: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: '' // response: All the user-provided fields, except password
    },


    update: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: 'newDataObject' // response: ['updatedAt']
    },

    delete: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: '' // response: ['emptyObject']
    },

    logout: {
        headers: {
            "X-Parse-Session-Token": ''
        },
        body: '' // response: ['emptyObject']
    }

}

export const endpoints = {
    crud: `${info.host}/classes/${info.className}/${info.objectId}`, // GET, PUT
    users: {
        signUp: `${info.host}/users`, // POST
        logIn: `${info.host}/login`, // POST

        verifyEmail: `${info.host}/verificationEmailRequest`, // POST
        passwordReset: `${info.host}/requestPasswordReset`, // POST
        retrieveCurrentUser: `${info.host}/users/me`, // GET
        readingUsers: `${info.host}/users/myCurrentUserId`, // GET

        update: `${info.host}/users/MyUserObjectId`, // PUT
        delete: `${info.host}/users/MyUserObjectId`, // DELETE
        logout: `${info.host}/logout`, // POST
    },
    session: `${info.host}/classes/_Session` // GET
};
