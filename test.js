var request = require('request');
async function foo(){
    let promise = new Promise((resolve, reject)=>{request.get('http://go.btc.uz:9994/holders', function(error, response, body){
        console.log(response.body)
    })})
}
for (i=0; i!= 1000; i++){
foo().then(()=>{console.log(i)})
}