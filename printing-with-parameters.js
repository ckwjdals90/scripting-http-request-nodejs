
const https = require('https');

function getAndPrintHTML (options) {

  https.get(options, (response) => {

    response.setEncoding('utf8');

    let contentBody = ''

    response.on('data', (chunk) => {

      contentBody += chunk;
      console.log('Chunk received. Length:', chunk.length);
    });

    response.on('end', () => {
      console.log('Printing the content:', contentBody);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
