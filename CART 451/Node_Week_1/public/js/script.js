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
            if('display-name' == user) {
                userInDB = true;
            }
        }
        if(!userInDB) {
            console.log('creating new user');
        } else if (userInDB) {
            console.log('user in database');
            userInDB = false;
        }
    });
}

function createUser(_user, _chatcount, _profilepic) {
    let tempUser = new User(_user, _chatcount, _profilepic);
}

function draw() {
    background(0);
    
}