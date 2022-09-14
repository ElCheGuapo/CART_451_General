let users = [];
let channelUsername;


function setup() {
    createCanvas(400, 400);

    channelUsername = "BukitHat";

    client = new tmi.Client({
        connection: {
            secure: true,
            reconnect: true
        },
    
        channels: [channelUsername]
    });

    client.connect();

    let userInDB = false;
    client.on('message', (channel, tags, message, self) => {
	    console.log(`${tags['display-name']}: ${message}`);
        for(user of users) {
            if(tags['display-name'] == user.user_name) {
                userInDB = true;
            }
        }
        if(!userInDB) {
            console.log('creating new user');
            createUser(tags['display-name'], 1, 1);
            console.log(users[users.length - 1]);
        } else if (userInDB) {
            console.log('user in database');
            user.chat_count ++;
            userInDB = false;
            console.log(user.chat_count);
        }
    });
}

function createUser(_user, _chatcount, _level) {
    let tempUser = new User(_user, _chatcount, _level);
    users.push(tempUser);
}

function draw() {
    background(0);
    
}