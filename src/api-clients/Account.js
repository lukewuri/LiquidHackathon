import React from 'react';


class Account {
    constructor(data=null) {
        this.data = data;
    }

    //Calls lambda that fetches DynamoDB for an account matching the parameters
    static getAccount(username, setAccount) {
        const url = "https://c24g2p1ca6.execute-api.us-east-2.amazonaws.com/default/getUserByUsername?mercuryUsername=" + username;
        function reqListener () {
            console.log(this.responseText);
            setAccount(JSON.parse(this.responseText)?.Items[0]);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", url);
        oReq.send();
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

    static updateAccount(accountObject) {
        const registerAccountURL = "https://c24g2p1ca6.execute-api.us-east-2.amazonaws.com/default/putUserInfo";

        console.log(accountObject)
        var oReq = new XMLHttpRequest();

        oReq.onreadystatechange = function() {
            if (oReq.readyState == XMLHttpRequest.DONE) {
                alert(oReq.responseText);
            }
        }

        oReq.open("POST", registerAccountURL, true);
        oReq.send(JSON.stringify(accountObject));
    }
}

export default Account;
