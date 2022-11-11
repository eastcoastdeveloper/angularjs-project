// FEATURES DATA IN TABS
angular.module("vikingApp").service("displayFeatures", function () {
    var featureObj = {
        // DECK FEATURES
        deckA: ["Medical Center"],
        deck1: [
            "The Spa",
            "The Viking Living Room",
            "Guest Services",
            "Fitness Center",
            "Viking Bar"
        ],
        deck2: [
            "The Theatre & Bar",
            "Cinema 1 & 2",
            "Torshavn",
            "The Shops",
            "Atrium"
        ],
        deck3: [
            "Staterooms 3000 - 3097",
            "Self-service launderette",
            "Atrium (top level)"
        ],
        deck4: ["Staterooms 4000 - 4123"],
        deck5: ["Staterooms 5000 - 5111", "Self-service launderette"],
        deck6: [
            "Navigational Bridge",
            "Staterooms 6000-6099",
            "Self-service launderette",
            "Staterooms 6020 & 6021 are ADA staterooms. Room configuration varies; ask for details"
        ],
        deck7: [
            "Main Pool (with retractable roof)",
            "Explorers' Lounge (main level)",
            "Wintergarden",
            "Aquavit Terrace (with al fresco dining)",
            "Infinity Pool & Hot Tub"
        ],
        deck8: ["Staterooms 8000-8019", "Explorers' Lounge (upper level)"],
        deck9: ["Outdoor Gym & Yoga Area"],
        // CREATE LIST OF ARRAY ELEMENTS
        createList: function features(elems, deckNum) {
            var sum = "<ul>";
            for (var i = 0; i < elems.length; i++) {
                sum += "<li>" + elems[i] + "</li>";
            }
            sum += "</ul>";
            items.innerHTML = sum;
        }
    };
    return featureObj;
});

angular.module("vikingApp").service("divService", function () {
    var myObj = {
        // IMAGE GALLERY PICS & THUMBS
        galleryPics: {
            vikingRoom: [
                "https://frontenddevelopment.tech/assets/vikingApp/1.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/2.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/3.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/4.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/5.jpg"
            ],
            theSpa: [
                "https://frontenddevelopment.tech/assets/vikingApp/6.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/7.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/8.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/9.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/10.jpg"
            ],
            vikingBar: [
                "https://frontenddevelopment.tech/assets/vikingApp/11.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/12.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/13.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/14.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/15.jpg"
            ],
            theRestaurant: [
                "https://frontenddevelopment.tech/assets/vikingApp/16.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/17.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/18.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/19.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/20.jpg"
            ],
            theAtrium: [
                "https://frontenddevelopment.tech/assets/vikingApp/21.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/22.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/23.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/24.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/25.jpg"
            ],
            theater: [
                "https://frontenddevelopment.tech/assets/vikingApp/26.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/27.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/28.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/29.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/30.jpg"
            ],
            dkThreeOne: [
                "https://frontenddevelopment.tech/assets/vikingApp/31.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/32.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/33.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/34.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/35.jpg"
            ],
            dkThreeTwo: [
                "https://frontenddevelopment.tech/assets/vikingApp/36.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/37.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/38.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/39.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/40.jpg"
            ],
            dkThreeThree: [
                "https://frontenddevelopment.tech/assets/vikingApp/41.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/42.jpg",
                ,
                "https://frontenddevelopment.tech/assets/vikingApp/43.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/44.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/45.jpg"
            ],
            dkThreeFour: [
                "https://frontenddevelopment.tech/assets/vikingApp/46.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/47.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/48.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/49.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/50.jpg"
            ],
            dkThreeFive: [
                "https://frontenddevelopment.tech/assets/vikingApp/51.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/52.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/53.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/54.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/55.jpg"
            ],
            dkThreeSix: [
                "https://frontenddevelopment.tech/assets/vikingApp/56.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/57.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/58.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/59.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/60.jpg"
            ],
            dkFourOne: [
                "https://frontenddevelopment.tech/assets/vikingApp/61.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/62.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/63.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/64.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/65.jpg"
            ],
            dkFourTwo: [
                "https://frontenddevelopment.tech/assets/vikingApp/66.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/67.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/68.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/69.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/70.jpg"
            ],
            dkFourThree: [
                "https://frontenddevelopment.tech/assets/vikingApp/71.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/72.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/73.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/74.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/75.jpg"
            ],
            dkFourFour: [
                "https://frontenddevelopment.tech/assets/vikingApp/76.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/77.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/78.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/79.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/80.jpg"
            ],
            dkFourFive: [
                "https://frontenddevelopment.tech/assets/vikingApp/81.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/82.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/83.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/84.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/85.jpg"
            ],
            dkFourSix: [
                "https://frontenddevelopment.tech/assets/vikingApp/86.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/87.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/88.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/89.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/90.jpg"
            ],
            dkFiveOne: [
                "https://frontenddevelopment.tech/assets/vikingApp/91.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/92.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/93.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/94.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/95.jpg"
            ],
            dkFiveTwo: [
                "https://frontenddevelopment.tech/assets/vikingApp/96.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/97.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/98.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/99.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/100.jpg"
            ],
            dkFiveThree: [
                "https://frontenddevelopment.tech/assets/vikingApp/1.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/2.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/3.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/4.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/5.jpg"
            ],
            dkFiveFour: [
                "https://frontenddevelopment.tech/assets/vikingApp/6.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/7.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/8.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/9.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/10.jpg"
            ],
            dkFiveFive: [
                "https://frontenddevelopment.tech/assets/vikingApp/11.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/12.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/13.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/14.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/15.jpg"
            ],
            dkFiveSix: [
                "https://frontenddevelopment.tech/assets/vikingApp/16.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/17.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/18.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/19.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/20.jpg"
            ],
            dkFiveSeven: [
                "https://frontenddevelopment.tech/assets/vikingApp/21.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/22.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/23.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/24.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/25.jpg"
            ],
            dkSixOne: [
                "https://frontenddevelopment.tech/assets/vikingApp/26.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/27.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/28.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/29.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/30.jpg"
            ],
            dkSixTwo: [
                "https://frontenddevelopment.tech/assets/vikingApp/31.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/32.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/33.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/34.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/35.jpg"
            ],
            dkSixThree: [
                "https://frontenddevelopment.tech/assets/vikingApp/36.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/37.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/38.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/39.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/40.jpg"
            ],
            dkSixFour: [
                "https://frontenddevelopment.tech/assets/vikingApp/41.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/42.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/43.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/44.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/45.jpg"
            ],
            dkSevenOne: [
                "https://frontenddevelopment.tech/assets/vikingApp/46.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/47.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/48.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/49.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/50.jpg"
            ],
            dkSevenTwo: [
                "https://frontenddevelopment.tech/assets/vikingApp/51.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/52.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/53.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/54.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/55.jpg"
            ],
            dkSevenThree: [
                "https://frontenddevelopment.tech/assets/vikingApp/56.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/57.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/58.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/59.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/60.jpg"
            ],
            dkSevenFour: [
                "https://frontenddevelopment.tech/assets/vikingApp/61.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/62.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/63.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/64.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/65.jpg"
            ],
            dkSevenFive: [
                "https://frontenddevelopment.tech/assets/vikingApp/66.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/67.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/68.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/69.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/70.jpg"
            ],
            dkSevenSix: [
                "https://frontenddevelopment.tech/assets/vikingApp/71.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/72.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/73.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/74.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/75.jpg"
            ],
            dkSevenSeven: [
                "https://frontenddevelopment.tech/assets/vikingApp/76.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/77.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/78.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/79.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/80.jpg"
            ],
            dkSevenEight: [
                "https://frontenddevelopment.tech/assets/vikingApp/81.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/82.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/83.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/84.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/85.jpg"
            ],
            dkSevenNine: [
                "https://frontenddevelopment.tech/assets/vikingApp/86.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/87.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/88.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/89.jpg",
                "https://frontenddevelopment.tech/assets/vikingApp/90.jpg"
            ]
        }
    };
    return myObj;
});
