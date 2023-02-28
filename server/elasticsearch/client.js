const { Client } = require('@elastic/elasticsearch');
const config = require('config');

const elasticConfig = config.get('elastic');

const client = new Client({
  node: elasticConfig.node,
  auth: {
    username: elasticConfig.username,
    password: elasticConfig.password
    // apiKey: elasticConfig.apiKey
  },
  caFingerprint: '13:7E:8B:93:1E:FE:06:CA:32:B2:F9:65:23:4C:36:F0:0E:89:74:8F:65:BE:87:B6:CD:77:D2:6D:C7:12:45:A2',
   tls: {

    rejectUnauthorized: false
  },
});

client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected."))

module.exports = client;