const https = require('https');


export default function buildHighlightUrlsFromId(accountId) {

    // Call lambda for list of keys
    const url = "https://localhost:8080/" + accountId;

    console.log("Retrieving highlight keys for account id: " + accountId);

    https.get(url, response => {
        console.log('getKeyList status code:' + response.statusCode);
        const highlightUrls = []
        response.on('data', d => {
            d.forEach(element => {
                   highlightUrls.push(buildHighlightUrl(element));
            });

            return highlightUrls;
        })
    }).on('error', error => {
        console.error(e);
    })

}

function buildHighlightUrl(key) {
    return "https://mercuryvideos.s3.us-east-2.amazonaws.com/" + key;
};