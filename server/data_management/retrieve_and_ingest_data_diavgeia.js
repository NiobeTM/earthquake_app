const express = require('express');
const router = express.Router();
const axios = require('axios');
const client = require('../elasticsearch/client');
require('log-timestamp');

const URL = `https://diavgeia.gov.gr/opendata/search.json`;

router.get('/documents', async function (req, res) {
  console.log('Loading Application...');
  res.json('Running Application...');

  indexData = async () => {
    try {
      console.log('Retrieving data from the Diavgeia OpenData API');

      const DOCUMENTS = await axios.get(`${URL}`, {
        headers: {
          'Content-Type': ['application/json', 'charset=utf-8'],
        },
      });

      console.log('Data retrieved!');

      results = DOCUMENTS.data.decisions;

      console.log('Indexing data...');

      results.map(
        async (results) => (
          (documentObject = {
            protocolNumber: results.protocolNumber,
            subject: results.subject,
            issueDate: results.issueDate,
            organizationId: results.organizationId,
            signerIds: results.signerIds,
            unitIds: results.unitIds,
            decisionTypeId: results.decisionTypeId,
            documentType: results.extraFieldValues.documentType,
            thematicCategoryIds: results.thematicCategoryIds,
            extraFieldValues: results.extraFieldValues,
            privateData: results.privateData,
            ada: results.ada,
            publishTimestamp: results.publishTimestamp,
            submissionTimestamp: results.submissionTimestamp,
            versionId: results.versionId,
            status: results.status,
            url: results.url,
            documentUrl: results.documentUrl,
            documentChecksum: results.documentChecksum,
            attachments: results.attachments,
            warnings: results.warnings,
            correctedVersionId: results.correctedVersionId,            
          }),
          await client.index({
            index: 'diavgeia_data_index',
            id: results.id,
            body: documentObject,
            pipeline: 'diavgeia_data_pipeline',
          })
        )
      );

      if (DOCUMENTS.data.length) {
        indexData();
      } else {
        console.log('Data has been indexed successfully!');
      }
    } catch (err) {
      console.log(err);
    }

    console.log('Preparing for the next round of indexing...');
  };
  indexData();
});

module.exports = router;