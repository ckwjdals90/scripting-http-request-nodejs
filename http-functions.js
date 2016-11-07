const https = require('https');

module.exports = function getHTML (options, callback) {

  https.get (options, (response) => {

    response.setEncoding('utf8');

    let contentBody = '';

    response.on('data', (chunk) => {
      contentBody += chunk;
    });

    response.on('end', () => {
      console.log('Response stream complete.');
      console.log('executing callback now.');
      callback(contentBody)
    })
  })

};
