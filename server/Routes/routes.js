var Hapi = require('hapi'),
    Joi = require('joi'),
    Uuid = require('uuid'),
    Bcrypt = require('bcrypt-nodejs'),
    Api = require('../api/api.js')
    UserSchema = require('../api/models/schema/userschema'),
    LoginSchema = require('../api/models/schema/loginschema'),
    LogoutSchema = require('../api/models/schema/logoutschema'),
    FriendRequestSchema = require('../api/models/schema/friendrequestschema'),
    GetSchema = require('../api/models/schema/getschema'),
    WishListSchema = require('../api/models/schema/wishlistschema');

var routes = [
    {
        method: 'GET',
        path: '/hello',
        handler: function(request, reply) {
            reply({"hello":"Welcome to the Gifter API!"}).code(200);
        } 
    },
    {
        method: 'POST',
        path: '/signup',
        config: {
            validate: {
                payload: UserSchema
            }
        },
        handler: function(request, reply) {
            Api.Signup(request.payload, reply);
        }
    },
    {
        method: 'POST',
        path: '/sessions',
        config: {
            validate: {
                payload: LoginSchema
            }
        },
        handler: function(request, reply) {
            Api.Login(request.payload, reply);
        }
    },
    {
        method: 'DELETE',
        path: '/sessions',
        config: {
            validate: {
                payload: LogoutSchema
            }
        },
        handler: function (request, reply) {
            Api.Logout(request.payload, reply);
        }
    },
    {
        method: 'GET',
        path: '/users',
        handler: function (request, reply) {
            Api.SearchForUsers(request.headers, reply);
        }
    },
    {
        method: 'POST',
        path: '/user/friends/requests',
        config: {
            validate: {
                payload: FriendRequestSchema
            }
        },
        handler: function (request, reply) {
            Api.FriendRequest(request.payload, reply);
        }
    },
    {
        method: 'DELETE',
        path: '/user/friends/requests',
        config: {
            validate: {
                payload: FriendRequestSchema
            }
        },
        handler: function (request, reply) {
            Api.CancelFriendRequest(request.payload, reply);
        }
    },
    {
        method: 'PATCH',
        path: '/user/friends/requests',
        config: {
            validate: {
                payload: FriendRequestSchema
            }
        },
        handler: function (request, reply) {
            Api.AcceptFriendRequest(request.payload, reply);
        }
    },
    {
        method: 'GET',
        path: '/user/friends',
        handler: function (request, reply) {
            Api.GetFriendsList(request.headers.token, reply);
        }
    },
    {
        method: 'DELETE',
        path: '/user/friends',
        // Add validation
        handler: function (request, reply) {
            Api.DeFriend(request.payload, reply);
        }
    },
    { 
        method: 'POST',
        path: '/user/wishlists',
        config: {
            validate: {
                payload: WishListSchema
            }
        },
        handler: function (request, reply) {
            Api.CreateWishList(request.payload, reply);
        }
    },
    // {
    //     method: 'DELETE',
    //     path: '/user/wishlists',
    //     // Add validation
    //     handler: function (request, reply) {
    //         Api.DeleteWishList(request.payload, reply);
    //     }
    // },
    {
        method: 'GET',
        path: '/friend/wishlists',
        handler: function (request, reply) {
            Api.GetWishListsOfFriend(request.headers.token, 
                                     request.headers.friend_username, 
                                     reply);
        }
    }
];

module.exports = routes;