var moment = require('moment');

var Utilities = {
    UserOldEnough: function (birthDate) {
        var now = new moment(),
            birth = new moment(birthDate);
            
        return now.diff(birth, 'years') >= 18;
    },
    CreateUsersArray: function (usersDoubleArray) {
    	var users = [],
    		CreateUserObjectForUserArray = function (userAsArray) {
		    	return {
		    		firstName: userAsArray[0],
		    		lastName: userAsArray[1],
		    		username: userAsArray[2]
		    	};
		    };

    	for (var i = 0; i < usersDoubleArray.length; i++) {
    		users.push(CreateUserObjectForUserArray(usersDoubleArray[i]));
    	}

    	return users;
    },
    CreateFriendsArray: function (friendsArray) {
        var friends = [],
            CreateFriendObjectForFriendArray = function (friend) {
                return {
                    username: friend.username,
                    first_name: friend.first_name,
                    last_name: friend.last_name
                };
            };

        for (var i = 0; i < friendsArray.length; i++) {
            friends.push(CreateFriendObjectForFriendArray(friendsArray[i]));
        }
        return friends;
    },
    CreateListOfWishLists: function (wishLists) {
        var lists = [];

        for (var i = 0; i < wishLists.length; i++) {
            lists.push(wishLists[i].name);
        }
        return lists;        
    }    
};

module.exports = Utilities;