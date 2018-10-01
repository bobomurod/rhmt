var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017'

const data = [{
    name: 'Sherali',
    surename: 'Batirov',
    birthdate: '1974-09-09',
    sex: 'male',
    job: 'builder'
    },
    {
    name: 'Bobuk',
    surename: 'Bokunov',
    birthdate: '1974-19-01',
    sex: 'male',
    job: 'Developer'
    }]

MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
    assert.equal(null, err)
    console.log('connected to MongoDB')
    const db = client.db('rahmatDb')
    findDocuments(db, function () {
        client.close()
    })
    insertDocuments(db, function () {
        client.close()
    })
    console.log(db)
})