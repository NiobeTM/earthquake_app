const { Client } = require('@elastic/elasticsearch');
const express = require('express');
const client = require('./elasticsearch/client');
const cors = require('cors');

const app = express();

// const data = require('./data_management/retrieve_and_ingest_data');
const data = require('./data_management/retrieve_and_ingest_data_diavgeia');

app.use('/ingest_data', data);

app.use(cors());

app.get('/results', (req, res) => {

  const passedDecisionTypeId = req.query.decisionTypeId;
  // const passedDocumentType = req.query.documentType;
  const passedAda = req.query.ada;
  // const passedDocumentType = req.query.documentType;
  const passedProtocolNumber = req.query.protocolNumber;
  // // const passedSubject = req.query.subject;
  const passedDateRange = req.query.dateRange;
  // const passedSortOption = req.query.sortOption;

  async function sendESRequest() {
    const body = await client.search({
      index: 'diavgeia_data_index',
      body: {
        // sort: [
        //   {
        //     thematicCategoryIds: {
        //       order: passedSortOption,
        //     },
        //   },
        // ],
        size: 10000,
        query: {
          bool: {
            must: [
              {
                match_phrase: { decisionTypeId: passedDecisionTypeId },
              },
              {
                match_phrase: { protocolNumber: passedProtocolNumber },
              },
              {
                match_phrase: { ada: passedAda }
              },
              // {
              //   match_phrase: { documentType: passedDocumentType }
              // },
              {
                range: {
                  '@timestamp': {
                    gte: `now-${passedDateRange}d/d`,
                    lt: 'now/d',
                  },
                },
              },
            ],
          },
        },
      },
    });
    res.json(body.hits.hits);
  }
  sendESRequest();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.group(`Server started on ${PORT}`));