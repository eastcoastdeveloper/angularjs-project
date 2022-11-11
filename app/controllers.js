angular.module("vikingApp").controller("homeController", function ($scope) {
    $scope.code = ""; // YOUTUBE VIDEO URL
    $scope.optObj = [
        { choice: "Riviera", link: "#/riviera" },
        { choice: "Main", link: "#/main" },
        { choice: "Lobby", link: "#/lobby" },
        { choice: "Mezzanine", link: "#/mezzanine" },
        { choice: "Promenade", link: "#/promenade" },
        { choice: "Upper", link: "#/upper" },
        { choice: "Empress", link: "#/empress" },
        { choice: "Verandah", link: "#/verandah" },
        { choice: "Vista", link: "#/vista" },
        { choice: "Sun", link: "#/sun" }
    ];

    $scope.ship = angular.element(document.querySelector(".discoverShip"));
    $scope.backgroundImage =
        "https://frontenddevelopment.tech/assets/vikingApp/discoverShip.jpg";
    $scope.myBg = $scope.backgroundImage;
    $scope.myVideo = $scope.showVideo = false;
    $scope.closeText = angular.element(document.querySelector(".closeVid"));
    $scope.closeText[0].innerHTML = "Show Videos";
    $scope.hideVideo = function () {
        if ($scope.myVideo == false) {
            $scope.closeText[0].innerHTML = "Hide Videos";
        } else if ($scope.myVideo == true) {
            $scope.closeText[0].innerHTML = "Show Videos";
        }
        $scope.myVideo = !$scope.myVideo;
    };
    // SWAP BG IMAGE DEPENDENT ON OPTION DROPDOWN MENU
    $scope.selected = angular.element(document.querySelector("#selected"));
    $scope.selectedItemChanged = function () {
        $scope.showVideo = true;
        switch ($scope.chosen.choice) {
            case "Riviera":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck9.jpg";
                $scope.code = "pJaCrB6mDyI";
                break;
            case "Main":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck8.jpg";
                $scope.code = "n7vqlKSAwIs";
                break;
            case "Lobby":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck7.jpg";
                $scope.code = "dGz5V3dwFbQ";
                break;
            case "Mezzanine":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck6.jpg";
                $scope.code = "SYqv2UOP_fM";
                break;
            case "Promenade":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck5.jpg";
                $scope.code = "wAHzTLiaSDQ";
                break;
            case "Upper":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck4.jpg";
                $scope.code = "8QZrk1-Ty-E";
                break;
            case "Empress":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck3.jpg";
                $scope.code = "4ulB5HEYNT4";
                break;
            case "Verandah":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck2.jpg";
                $scope.code = "wZylMc_yZVE";
                break;
            case "Vista":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/Deck1.jpg";
                $scope.code = "o5nTQXv3Zfw";
                break;
            case "Sun":
                $scope.myBg =
                    "https://frontenddevelopment.tech/assets/vikingApp/DeckA.jpg";
                $scope.code = "Ry9U_boekKg";
                break;
        }
    };
});

angular
    .module("vikingApp")
    .controller("riviera", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Riviera";
        // SERVICE FUNCTION DISPLAYS FEATURES LIST
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deckA, $scope.deckNum);
        };
        // LOCAL VAR = SERVICE OBJECT HOLDING IMAGE GALLERY OBJECT
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = ["No content for the Medical Center"];
    });

angular
    .module("vikingApp")
    .controller("main", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Main";
        $scope.mobileNav = false;
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck1, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "The ideal setting for relaxation and conversation, The Viking Living Room draws guests together. Spacious seating, melodic piano tunes, live entertainment and planned activities foster rich camaraderie. And its well-curated Viking Library informs even the best-read traveler.",
            "We also reinvented the spa experience; drawing upon the holistic wellness philosophy of Nordic culture. To stimulate your circulatory system visit our snow grotto where snowflakes gently descend from the ceiling through chilled air, then invigorate yourself in the sauna, following a centuries-old Nordic tradition.",
            "Enjoy a cocktail in the Viking Bar, which is located on the ground floor of the atrium."
        ];
    });

angular
    .module("vikingApp")
    .controller("lobby", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Lobby";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck2, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "Indulge in a wide choice of culinary offerings, featuring a daily-changing menu highlighting local cuisine with locally sourced ingredients.",
            "Relax in the soaring atrium and mingle with like-minded guests as you enjoy a cocktail from the Viking Bar.",
            "Even our theaters connect you to the destinations. Our main venue, The Theater, features live performances that bring you closer to the culture of our destinations."
        ];
    });

angular
    .module("vikingApp")
    .controller("mezzanine", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Mezzanine";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck3, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "Size including veranda: 757+ sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. 3 guaranteed priority reservations at each specialty restaurant: 90 days prior. Priority shore excursion reservations: 97 days prior.",
            "Size including a 270 sq ft veranda with stateroom access. 1 guaranteed priority reservation at each specialty restaurant, 60 days prior. Priority shore excursion reservations, 67 days prior.",
            "Size including a 270 sq ft veranda with stateroom access. 1 guaranteed priority reservation at each specialty restaurant, 60 days prior. Priority shore excursion reservations, 67 days prior.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 3:00 p.m. stateroom access. Shore excursion reservations: 60 days prior. Mini-bar with soft drinks, water & snacks. Purified water refilled daily. Viking Explorer bed with luxury linens. 24-hour room service.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 3:00 p.m. stateroom access. Shore excursion reservations: 60 days prior. Mini-bar with soft drinks, water & snacks.",
            "Relax in the soaring atrium and mingle with like-minded guests as you enjoy a cocktail from the Viking Bar."
        ];
    });

angular
    .module("vikingApp")
    .controller("promenade", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Promenade";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck4, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "Size including veranda: 757+ sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. 3 guaranteed priority reservations at each specialty restaurant: 90 days prior. Priority shore excursion reservations: 97 days prior.",
            "Priority booking of spa treatments: 90 days prior. Mini-bar with alcoholic beverages, soft drinks, water & snacks, replenished once daily. Welcome Bottle of Champagne. Premium in-suite binoculars, coffee maker & cashmere blanket. Complimentary laundry, dry cleaning, shoe shine & pressing. Purified water refilled daily. King-size Viking Explorer bed with luxury linens. 24-hour room service.",
            "Priority shore excursion reservations: 77 days prior. Priority booking of spa treatments: 70 days prior. Mini-bar with alcoholic beverages, soft drinks, water & snacks, replenished once daily. Welcome Bottle of Champagne.",
            "Priority booking of spa treatments: 60 days prior. Mini-bar with soft drinks, water & snacks, replenished once daily. In-suite binoculars, coffee maker & cashmere blanket. Purified water refilled daily.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 2:00 p.m. stateroom access. 1 guaranteed priority reservations at each specialty restaurant: 60 days prior. Priority shore excursion reservations: 67 days prior.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 2:00 p.m. stateroom access. 1 guaranteed priority reservations at each specialty restaurant: 60 days prior. Priority shore excursion reservations: 67 days prior."
        ];
    });

angular
    .module("vikingApp")
    .controller("upper", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Upper";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck5, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "Size including veranda: 757+ sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. 3 guaranteed priority reservations at each specialty restaurant: 90 days prior. Priority shore excursion reservations: 97 days prior.",
            "Premium in-suite binoculars, coffee maker & cashmere blanket. Complimentary laundry, dry cleaning, shoe shine & pressing. Purified water refilled daily.",
            'Luxury robes, slippers & toiletries. 42" flat-screen LCD TV. Interactive TV & movies-on-demand. Security safe, hair dryer, 110/220 volt outlets. Direct dial satellite phone & cell service.',
            "Interactive TV & movies-on-demand. Security safe, hair dryer, 110/220 volt outlets. Direct dial satellite phone & cell service. Wi-Fi",
            'In-suite binoculars, coffee maker & cashmere blanket. Purified water refilled daily. King-size Viking Explorer bed with luxury linens. 24-hour room service. Luxury robes, slippers & toiletries. 42" flat-screen LCD TV.',
            '42" flat-screen LCD TV. Interactive TV & movies-on-demand. Security safe, hair dryer, 110/220 volt outlets. Direct dial satellite phone & cell service.',
            'In-suite binoculars, coffee maker & cashmere blanket. Purified water refilled daily. King-size Viking Explorer bed with luxury linens. 24-hour room service. Luxury robes, slippers & toiletries. 42" flat-screen LCD TV.',
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 2:00 p.m. stateroom access. 1 guaranteed priority reservations at each specialty restaurant: 60 days prior. Priority shore excursion reservations: 67 days prior. Priority booking of spa treatments: 60 days prior. Mini-bar with soft drinks, water & snacks, replenished once daily."
        ];
    });

angular
    .module("vikingApp")
    .controller("empress", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Empress";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck6, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "Size including veranda: 757+ sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. 3 guaranteed priority reservations at each specialty restaurant: 90 days prior. Priority shore excursion reservations: 97 days prior.",
            "Size including veranda: 405 sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. 3 guaranteed priority reservations at each specialty restaurant: 80 days prior. Priority shore excursion reservations: 87 days prior.",
            "Size including veranda: 338 sq. ft. 11:00 a.m. embarkation. 1:00 p.m. stateroom access. 2 guaranteed priority reservations at each specialty restaurant: 70 days prior. Priority shore excursion reservations: 77 days prior.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 2:00 p.m. stateroom access. 1 guaranteed priority reservations at each specialty restaurant: 60 days prior. Priority shore excursion reservations: 67 days prior."
        ];
    });

angular
    .module("vikingApp")
    .controller("verandah", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Verandah";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck7, $scope.deckNum);
        };
        $scope.galleryPics = divService.galleryPics;
        $scope.linkData = 0;
        $scope.galleryContent = [
            "Suite size: 1,448 sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. Priority shore excursion reservations. 3 guaranteed priority reservations at each specialty restaurant (90 days prior to departure).",
            "Premium in-suite binoculars, coffee maker & cashmere blanket. Complimentary laundry, dry cleaning, shoe shine & pressing. Purified water refilled daily. King-size Viking Explorer bed with luxury linens.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 2:00 p.m. stateroom access. 1 guaranteed priority reservations at each specialty restaurant: 60 days prior.",
            "Dine al fresco in the evening at the Aquavit Terrace.",
            "The Infinity Pool, one of the first of its kind at sea, gives you a sense of swimming in the heart of your destination. Its glass backing is infused with the spirit of exploration. This relaxing setting also offers an inviting hot tub.",
            "The heated Main Pool and hot tub provide a calming oasis in any weather. The retractable roof allows for any-time swims and soaks. A haven for relaxation, it’s a fun spot to socialize during a day at sea.",
            "Size including veranda: 405 sq. ft. 11:00 a.m. embarkation. 11:00 a.m. priority stateroom access. 3 guaranteed priority reservations at each specialty restaurant: 80 days prior. Priority shore excursion reservations: 87 days prior.",
            "Size including veranda: 270 sq. ft. 11:00 a.m. embarkation. 2:00 p.m. stateroom access. 1 guaranteed priority reservations at each specialty restaurant: 60 days prior. Priority shore excursion reservations: 67 days prior.",
            "Inspired by the trade routes of Vikings, the Explorers’ Lounge is the ideal place for guests to share their discoveries over an aquavit or a craft beer while sampling fine Scandinavian fare."
        ];
    });

angular
    .module("vikingApp")
    .controller("vista", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Vista";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck8, $scope.deckNum);
        };
        $scope.linkData = 0;
    });

angular
    .module("vikingApp")
    .controller("sun", function ($scope, displayFeatures, divService) {
        $scope.deckNum = "Sun";
        $scope.features = function () {
            displayFeatures.createList(displayFeatures.deck9, $scope.deckNum);
        };
        $scope.linkData = 0;
    });

angular
    .module("vikingApp")
    .controller(
        "mainController",
        function (
            $scope,
            $rootScope,
            $window,
            divService,
            cfpLoadingBar,
            $location,
            $http
        ) {
            $rootScope.pageClass = "slideRight";
            $scope.currentRoute = null;
            $scope.screenSize = null;
            $scope.hideOthers = function (clicked) {
                $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = $scope.apis = false;
                $scope.gallery = false;
                $rootScope.apiText = "Trip Forecast";
            };

            // ITINERARIES & STATEROOM BTNS
            $scope.showBtnOne = function () {
                $scope.btnOne = $scope.btnOne ? false : true;
                $scope.oneActive = !$scope.oneActive;
                $scope.oneActive
                    ? ($rootScope.apiText = "Trip Forecast")
                    : "Close";
                $scope.twoActive = $scope.btnTwo = $scope.details = $scope.apis = false;
                $scope.gallery = false;
                $scope.overlayActive = false;
            };
            $scope.openAccordionSection = function (e) {
                let elems = [];
                elems = Array.from(document.querySelectorAll(".panel-wrapper"));
                for (var i = 0; i < elems.length; i++) {
                    elems[i].classList.add("panel-default");
                }
                // console.log(elems)
                let elem = e.target.parentElement.querySelector(
                    ".panel-wrapper"
                );
                console.log(elem);
                elem.classList.remove("panel-default");
            };
            $scope.showBtnTwo = function () {
                $scope.btnTwo = $scope.btnTwo ? false : true;
                $scope.twoActive = !$scope.twoActive;
                $scope.twoActive
                    ? ($rootScope.apiText = "Trip Forecast")
                    : "Close";
                $scope.oneActive = $scope.btnOne = $scope.details = $scope.apis = false;
                $scope.gallery = false;
                $scope.overlayActive = false;
            };
            $scope.closeAll = function () {
                $scope.mobileNav = false;
                $scope.btnOne = false;
                $scope.btnTwo = false;
                $scope.oneActive = false;
                $scope.twoActive = false;
                $scope.details = false;
                $rootScope.apiText = "Trip Forecast";
            };
            $scope.toggleNav = function () {
                $scope.mobileNav = !$scope.mobileNav;
                $scope.hideOthers();
            };
            $scope.hideOthers();

            // CHANGE DETAILS BTN COPY
            $scope.detailsText = function () {
                if ($scope.details == true) {
                    $scope.divText = "Close";
                } else {
                    $scope.divText = "Deck Details";
                }
            };

            // DETAILS BTN/ SIDEBAR MENU TOGGLE
            $scope.details = false;
            $scope.myBtn = angular.element(document.querySelector("#h5Btn"));
            $scope.divText = "Deck Details";
            $scope.detailsToggle = function () {
                $scope.details = !$scope.details;
                $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = false;
                $scope.detailsText();
            };

            $scope.grid = $scope.apis = false;
            $scope.slider = true;
            $rootScope.apiText = "Trip Forecast";
            $scope.getElem = function (obj) {
                $scope.closeGallery();
                $scope.details = false;
                // GET ELEMENT BY DATA VALUE. EVALUATE WHICH BUTTONS TO DISPLAY
                var elemData = obj.target.attributes.data.value;
                switch (elemData) {
                    case "slider":
                        $scope.grid = false;
                        $scope.slider = true;
                        break;
                    case "grid":
                        $scope.slider = false;
                        $scope.grid = true;
                        break;
                    case "apis":
                        $scope.apis = !$scope.apis;
                        $scope.apis
                            ? ($rootScope.apiText = "Close")
                            : ($rootScope.apiText = "Trip Forecast");
                        $scope.btnOne = $scope.btnTwo = $scope.oneActive = $scope.twoActive = false;
                }
            };

            // WEATHER & MAP API
            $scope.textSearching = $scope.results = false;
            $scope.changeInput = "Please enter your city destination.";
            $scope.userSearching = function () {
                $scope.changeInput = "Google maps API searching for";
                $scope.textSearching = true;
            };

            $scope.getForecast = function () {
                // API CALL W/ CITY VARIABLE
                $scope.url =
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                    $scope.cityName +
                    "&appid=5fa988728912c96f18d5abbb35a0a12f";
                $http.get($scope.url).then(function (response) {
                    var myWeather;
                    $scope.myWeather = myWeather;
                    // DATA IN RETRIEVED OBJECT
                    myWeather = response.data;
                });
                $.getJSON($scope.url, weatherCallback);
                function weatherCallback(myWeather) {
                    var mapOptions = {
                        // WEATHER LONGITUDE & LATITUDE COORDINATES
                        center: new google.maps.LatLng(
                            myWeather.coord.lat,
                            myWeather.coord.lon
                        ),
                        zoom: 10,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
                    var map = new google.maps.Map(
                        document.getElementById("maps"),
                        mapOptions
                    );
                    // WEATHER & DATE VARS
                    var cityName = myWeather.name,
                        country = myWeather.sys.country,
                        // CONVERT KELVIN TO FAHRENHEIT
                        Fahrenheit =
                            Math.ceil((myWeather.main.temp - 273.15) * 1.8) +
                            32,
                        // CONVERT KELVIN TO CELCIUS
                        Celcius = Math.ceil(
                            myWeather.main.temp - 273.15
                        ).toFixed(0),
                        myDate = new Date(),
                        time = myDate.toLocaleTimeString(),
                        month = myDate.getMonth(),
                        months = [
                            "Jan",
                            "Feb",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "Aug",
                            "Sept",
                            "Oct",
                            "Nov",
                            "Dec"
                        ],
                        today = myDate.getDate(),
                        year = myDate.getFullYear();
                    // DISPLAY TEXT HERE
                    $scope.results = angular.element(
                        document.querySelector("#temp")
                    );
                    $scope.results.html(
                        "The temperature in " +
                            cityName +
                            " (" +
                            country +
                            ") is:<br>" +
                            Fahrenheit +
                            "<span class='fahrenheit'> (Fahrenheit)</span>" +
                            "<br>" +
                            Celcius +
                            "<span class='fahrenheit'> (Celcius)</span>"
                    );
                    $("#temp").append(
                        "<br>" +
                            "Humidity: " +
                            myWeather.main.humidity +
                            "<span class='fahrenheit'>%</span>"
                    );
                    $("#temp").append(
                        "<br><br>" +
                            "Requested at " +
                            time +
                            ", " +
                            months[month] +
                            " " +
                            today +
                            ", " +
                            year
                    );
                }
            };

            // CLEAR RESULTS
            $scope.clear = function (myWeather) {
                $scope.cityName = "";
            };
            // BOOTSTRAP OPEN ACCORDION SECTIONS ON CLICK
            $scope.captureClick = function (obj) {
                var elemData = obj.target.attributes.data.value;
                $scope.detailsToggle();
                // CLOSE BOOTSTRAP ACCORDION SECTIONS, OPEN SECTION ASSOCIATED W/ DATA VALUE
                $(".panel-collapse.in").collapse("hide");
                $("#collapse" + elemData).collapse("toggle");
                $scope.gallery = false;
            };
            // SET GALLERY TO CLOSED
            $scope.gallery = false;
            // GET ID & DATA VALUE OF RED DOT CLICKED ON DECK
            $scope.myFunction = function (obj) {
                this.myElem = obj.target.attributes.data.value;
                this.ID = obj.target.attributes.id.value;
                // OPEN GALLERY
                $scope.gallery = true;
            };
            // CLOSE GALLERY TEMPLATE URL
            $scope.closeGallery = function () {
                $scope.gallery = false;
            };

            // BROWSER BACK BUTTON FIX PART 1
            $rootScope.$on("$locationChangeSuccess", function () {
                $scope.screenSize = window.innerWidth;
                $rootScope.actualLocation = $location.path();
                $scope.apis = false;
            });
            // BROWSER BACK BUTTON FIX PART 2
            $rootScope.$watch(
                function () {
                    $scope.currentRoute = $location.$$path;
                    return $location.path();
                },
                function (newLocation, oldLocation) {
                    if ($rootScope.actualLocation === newLocation) {
                        $scope.gallery = false;
                    }
                }
            );

            $scope.start = function () {
                cfpLoadingBar.start();
            };

            $scope.complete = function () {
                cfpLoadingBar.complete();
            };
        }
    );
