const Web3 = require('web3');
const utils = require('ethereumjs-util');
const Transaction = require('ethereumjs-tx');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/B0QFpfZKeuLFhhW3zZeu"));
var privatekey = new Buffer('8f62ebe9a06ff5843e517739433fd301e4d5cccc1d3a0d216820bfb2ea8cae05','hex');

// web3.eth.getBalance("0x260c29d0c228603b35b608cfa68f1476a1c763ca").then(console.log);
// web3.eth.net.getId().then(console.log)

// var myContract = new web3.eth.Contract([
// 	{
// 		"constant": true,
// 		"inputs": [
// 			{
// 				"name": "day",
// 				"type": "string"
// 			}
// 		],
// 		"name": "read",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "day",
// 				"type":ls "string"
// 			},
// 			{
// 				"name": "txs",
// 				"type": "string"
// 			}
// 		],
// 		"name": "store",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ],"0x099f62254d37aeb409ea4e5515b5b99de37f6115");

// myContract.methods.read("day1").call(function(error,result){
//     if (error || result === "") {
//         console.error("Something happend while calling contract method");
//     } else {
//         console.log("Stored data is " + result);
//     }
// })

var nonce;
//myF()
async function myF(){
    nonce = utils.bufferToHex(await web3.eth.getTransactionCount("0x260c29d0c228603b35b608cfa68f1476a1c763ca"));
    console.log(nonce)
}

web3.eth.getTransactionCount("0x260c29d0c228603b35b608cfa68f1476a1c763ca").then(console.log);

const txdata = {
    from: '0x260c29d0c228603b35b608cfa68f1476a1c763ca',
    to: '0xD21Cc283989437ec39309802cb24C09A9249F412',
    value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(210000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('0.00000002', 'ether'))
    // gasLimit: web3.utils.toHex(web3.utils.toWei('0.000074511', 'ether')),
    // gasPrice: web3.utils.toHex(web3.utils.toWei('0.00000001', 'ether'))
}

async function makeTransaction(to, value, data, gasLimit, gasPrice) {
    const nonce = utils.bufferToHex(await web3.eth.getTransactionCount(txdata.from));
    const tx = new Transaction({
        to,
        value,
        data,
        gasPrice,
        gasLimit,
        nonce
    });
    tx.sign(privatekey);
    console.log(tx);
    const raw = `0x${tx.serialize().toString('hex')}`
    console.log(raw)
    return new Promise((resolve,reject)=>{
        web3.eth.sendSignedTransaction(raw)
            .on('transactionHash', hash => {
                resolve(hash)
            }).catch(reject)
    })
}

makeTransaction(txdata.to, txdata.value,'0x00', txdata.gasLimit, txdata.gasPrice).then(res=> {
    console.log("Signed tx broadcasted, get tx hash below\n" + res)})


