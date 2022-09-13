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

    client.on('message', (channel, tags, message, self) => {
	    console.log(`${tags['display-name']}: ${message}`);
        for(user of users) {
            if('display-name' == user) {
                console.log('user in database');
            }
        }
    });
}


function createUser(_user, _chatcount, _profilepic) {
    let tempUser = new User(_user, _chatcount, _profilepic);
}


function draw() {
    background(0);
    
}