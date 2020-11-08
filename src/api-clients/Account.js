import React from 'react';


class Account {
    constructor(data=null) {
        this.data = data;
    }

    //Calls lambda that fetches DynamoDB for an account matching the parameters
    static getAccount(accountId) {
        // const url = "https://localhost:8080/" + accountId;
        //
        // console.log("Retrieving highlight keys for account id: " + accountId);
        //
        // https.get(url, response => {
        //     console.log('getKeyList status code:' + response.statusCode);
        //     const highlightUrls = []
        //     response.on('data', d => {
        //         d.forEach(element => {
        //             highlightUrls.push(buildHighlightUrl(element));
        //         });
        //
        //         return highlightUrls;
        //     })
        // }).on('error', error => {
        //     console.error(e);
        // })
    }

    getHighlightLinksArray() {
        const id = "0"
        return "https://km4nfzu6ej.execute-api.us-east-2.amazonaws.com/Prod/highlights/" + id;
    }
    getHighlightMP4Link(key) {
        return "https://mercuryvideos.s3.us-east-2.amazonaws.com/" + key;
    }
    uploadMP4File(key) {
        return "https://mercuryvideos.s3.us-east-2.amazonaws.com/" + key;
    }

}

export default Account;
