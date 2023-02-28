// const express = require('express');
// const router = express.Router();
// const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

// const axios = require('axios');
// const client = require('../elasticsearch/client');
// require('log-timestamp');
// const URL = 'http://localhost:3001/minitry_digital_2022_ADA_DammyData.json';

// router.get('/ministry', async function (req, res) {
//   console.log('Loading Application...');
//   res.json('Running Application...');

//   indexData = async () => {

//     fetch(URL).then((results) => {
//       console.log('Indexing data...');
//       return results.json();
//     }).then( (res, i)  => {
//       client.index({
//         index: 'modt_greek_index',
//         id:i ,
//         body: res[0],
//         pipeline: 'modt_index_pipeline',
//       })
      
//     });
//   };
//   indexData();

// });

// module.exports = router;