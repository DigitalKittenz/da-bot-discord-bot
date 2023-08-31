// hello.js
module.exports = {
    name: 'hello',
    description: 'Says hello and turns on automatic replies',
    execute(interaction, client) { // client!
        // randomize the response
        const options = [
            'hiii <3',
            'do u wanna chat w me? 🥹',
            'hii. i‛m not a bot, btw. swear 🤞. ok ok, i lied, i am.',
            'hey whats up? r u gonna do something or just say hi to me lol',
            'i‛m bored 😔',
            '😊👋',
            'hello! :D',
            'Your favorite cheer tank, Dotty, reporting for duty',
            'hope ur doing well today friend 😁',
            'Ready to embark on captivation mode with me, Dotty? :D',
            'hi everyone!',
            'Hi there! My pretty patches!? Guess whos joining the buzzing creatures in the internet zoo? Your favorite cheer tank, me!'
        ];
        try {
            interaction.reply(options[Math.floor(Math.random() * options.length)]);
            // check if interaction.channel and interaction.channel.id are defined
            if (interaction.channel && interaction.channel.id) {
                client.globalState.autoReply[interaction.channel.id] = true;
            } else {
                console.error('interaction.channel or interaction.channel.id is undefined!');
            }
        } catch (error) {
            console.error('Failed to reply to interaction:', error);
        }
    }
};

