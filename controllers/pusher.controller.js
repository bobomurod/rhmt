var Pusher = require('pusher');
module.exports = function(message, contest){
    var pusher = new Pusher({
        appId: '620629',
        key: 'a1cc3c76b7e476ab0951',
        secret: '84c3ffdf32144b6cda8d',
        cluster: 'eu',
        encrypted: true
    })
    pusher.trigger('my-channel', 'my-event', {
        message : contest
    });
}