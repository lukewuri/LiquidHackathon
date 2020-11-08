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
    static loginAccount(username, password, loginUser) {
        const requestBody = {
            mercuryUsername: username,
            encryptedPassword: this.hashPassword(password)
        }


        const registerAccountURL = "https://c24g2p1ca6.execute-api.us-east-2.amazonaws.com/default/logIn";
        var oReq = new XMLHttpRequest();
        console.log("::requestBody", requestBody);


        oReq.onreadystatechange = function() {
            console.log("::request", oReq.readyState, oReq.status)
            if (oReq.readyState == XMLHttpRequest.DONE && oReq.status == 200 ) {
                console.log("::GOOD CALL", oReq, XMLHttpRequest.DONE)
                    loginUser(JSON.parse(oReq.responseText).mercuryUsername);
            }
        }
        oReq.open("POST", registerAccountURL, true);
        oReq.send(JSON.stringify(requestBody));
    }


    static registerAccount(firstName, lastName, username, birthday, email, password, summonerName, region, playerType) {


        var replacedBirthday = birthday.replace(/-/g, '');

        const birthdayInt = parseInt(replacedBirthday);

        const requestBody = {
            firstName: firstName,
            lastName: lastName,
            mercuryUsername: username,
            birthday: birthdayInt,
            email: email,
            encryptedPassword: this.hashPassword(password),
            summonerName: summonerName,
            serverRegion: region,
            playerType: playerType

        }
        const registerAccountURL = "https://c24g2p1ca6.execute-api.us-east-2.amazonaws.com/default/putUserInfo";
        var oReq = new XMLHttpRequest();

        oReq.onreadystatechange = function() {
            if (oReq.readyState == XMLHttpRequest.DONE) {
                alert(oReq.responseText);
            }
        }
        oReq.open("POST", registerAccountURL, true);
        oReq.send(JSON.stringify(requestBody));
    }

    static hashPassword(password) {
        const encrypted = sha256(password);
        return encrypted;
    }

}

export default AccountAuthentication;