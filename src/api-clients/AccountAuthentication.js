import React from 'react';
import {sha256} from 'js-sha256';

const testAccount = {
    "videos": [
        {
            "videoLikes": 4269,
            "videoId": "12345678",
            "videoName": "pog plays",
            "videoViews": 9001,
            "tags": [
                "Good Trade",
                "Good Micro"
            ]
        }
    ],
    "accountId": "232",
    "lastName": "Ren",
    "teamOrganization": "",
    "summonerName": "Omscientia",
    "attributes": [
        {
            "type": "Leader",
            "endorsers": [
                {
                    "name": "Luke",
                    "accountId": "321"
                },
                {
                    "name": "Weiming",
                    "accountId": "111"
                }
            ]
        }
    ],
    "leagueSummonerID": "RIOTAPISTUFF",
    "playerType": "Amateur",
    "firstName": "Michael",
    "educationInstitution": "University of Maryland - College Park",
    "accolades": [
        {
            "accoladeTitle": "Best Mid Laner NA",
            "dateEarned": 20051201
        },
        {
            "accoladeTitle": "mid diff",
            "dateEarned": 200170430
        }
    ],
    "accountType": "player",
    "openToOffers": true,
    "rankedStats": {
        "rank": 4,
        "topTenChamps": [
            {
                "gamesplayed": 1,
                "winrate": 1,
                "championId": "ahri",
                "championName": "ahri"
            },
            {
                "gamesplayed": 100,
                "winrate": 0,
                "championId": "zyra",
                "championName": "zyra"
            }
        ],
        "tier": "iron",
        "lp": 0
    },
    "socials": {
        "youtube": "https://www.youtube.com/channel/UCrDATU_Mn7vQKTJ0h7bnt5Q/",
        "twitter": "",
        "twitch": "https://www.twitch.tv/omscientia",
        "opgg": "https://na.op.gg/summoner/userName=Omscientia",
        "contactEmail": "michaelren1928@gmail.com",
        "instagram": "@himynameismacko",
        "linkedin": "https://www.linkedin.com/in/michaelren714/"
    },
    "serverRegion": "NA",
    "encryptedPassword": "SHA256 HASH",
    "encodedLp": 0,
    "position": "mid",
    "birthday": 19970421
}

class AccountAuthentication {
    static loginAccount(email, password) {
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
        this.hashPassword(password);
    }
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [summonerName, setSummonerName] = React.useState("");
    const [region, setRegion] = React.useState("NA");

    static registerAccount(firstName, lastName, birthday, email, password, summonerName, region) {
        console.log("::", accountId);

        function reqListener () {
            console.log("::::", this.responseText);
        }

        const registerAccountURL = "https://c24g2p1ca6.execute-api.us-east-2.amazonaws.com/default/putUserInfo";
        var oReq = new XMLHttpRequest();
        oReq.onload = reqListener;
        oReq.open("POST", "https://c24g2p1ca6.execute-api.us-east-2.amazonaws.com/default/putUserInfo", true);
        oReq.send(JSON.stringify(testAccount));
    }

    static hashPassword(password) {
        const encrypted = sha256(password);

        console.log("::passwords", password, encrypted);
    }

}

export default AccountAuthentication;