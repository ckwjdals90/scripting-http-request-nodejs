
const https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, (response) => {

  response.setEncoding('utf8');

  let contentBody = ''

  response.on('data', (chunk) => {
    contentBody += chunk;
    console.log('Chunk received. Length:', chunk.length);
  });

  response.on('end', () => {
    console.log(contentBody);
  });

});

}

getAndPrintHTMLChunks();
