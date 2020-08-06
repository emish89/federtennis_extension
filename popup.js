// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let getData = document.getElementById('getData');


const fitCard = document.getElementById('fitCard');
const fitClubId = document.getElementById('fitClubId');
const tournamentMatches = document.getElementById('tournamentMatches');
const championshipMatches = document.getElementById('championshipMatches');

getData.onclick = () => {
  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
    "code": "document.getElementById('tennis-player-id')?.getAttribute('data-tennis-player-json')"
  }, (results) => {
    //Here we have just the innerHTML and not DOM structure
    const json = JSON.parse(results);
    console.log(json)
    fitCard.innerHTML = json.MembershipCard;
    fitClubId.innerHTML = json.TennisClubId;

    tournamentMatches.innerHTML = json.TournamentMatches.map(p => JSON.stringify(p)).join('<br /><br />');
    championshipMatches.innerHTML = json.ChampionshipMatches.map(p => JSON.stringify(p)).join('<br /><br />');

  });
}
