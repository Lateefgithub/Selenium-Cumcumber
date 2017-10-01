$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepdefinition/webFrontend.feature");
formatter.feature({
  "line": 2,
  "name": "Search Feature",
  "description": "",
  "id": "search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User is able to use the Search feature in Wikipedia",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on the Wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches for \"\u003ca_given_String\u003e\" in English",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The first heading of the search results page matches \"\u003ca_given_String\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;",
  "rows": [
    {
      "cells": [
        "a_given_String"
      ],
      "line": 11,
      "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;1"
    },
    {
      "cells": [
        "Software"
      ],
      "line": 12,
      "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;2"
    },
    {
      "cells": [
        "Pop"
      ],
      "line": 13,
      "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User is able to use the Search feature in Wikipedia",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches for \"Software\" in English",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The first heading of the search results page matches \"Software\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Wikisearch.goToWikipediaHomePage()"
});
formatter.result({
  "duration": 28608312864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 19
    }
  ],
  "location": "Wikisearch.User_search_for(String)"
});
formatter.result({
  "duration": 4509820723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software",
      "offset": 54
    }
  ],
  "location": "Wikisearch.heading_of_Search_matchs_result(String)"
});
formatter.result({
  "duration": 506025864,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User is able to use the Search feature in Wikipedia",
  "description": "",
  "id": "search-feature;user-is-able-to-use-the-search-feature-in-wikipedia;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SystemTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches for \"Pop\" in English",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The first heading of the search results page matches \"Pop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Wikisearch.goToWikipediaHomePage()"
});
formatter.result({
  "duration": 6573475410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pop",
      "offset": 19
    }
  ],
  "location": "Wikisearch.User_search_for(String)"
});
formatter.result({
  "duration": 3230289970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pop",
      "offset": 54
    }
  ],
  "location": "Wikisearch.heading_of_Search_matchs_result(String)"
});
formatter.result({
  "duration": 2487912305,
  "status": "passed"
});
});