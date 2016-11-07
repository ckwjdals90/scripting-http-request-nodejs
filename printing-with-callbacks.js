
const https = require('https');

function getHTML (options, callback) {

  https.get(options, (response) => {

    response.setEncoding('utf8');

    let contentBody = ''

    response.on('data', (chunk) => {

      contentBody += chunk;
      console.log('Chunk received. Length:', chunk.length);
    });

    response.on('end', () => {
      console.log('Response stream complete.')
      callback(contentBody);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);