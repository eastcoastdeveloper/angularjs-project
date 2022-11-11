var vikingApp = angular.module("vikingApp", [
    "ngRoute",
    "chieffancypants.loadingBar",
    "ngAnimate"
]);

vikingApp.config(function (
    $routeProvider,
    $httpProvider,
    cfpLoadingBarProvider
) {
    // LOADER
    cfpLoadingBarProvider.includeSpinner = true;
    // IE FIX FOR JSON DATA NOT LOADING
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    // DISABLE IE AJAX REQUEST CACHING
    $httpProvider.defaults.headers.get["If-Modified-Since"] = "0";

    $routeProvider
        .when("/", {
            templateUrl: "pages/home.html",
            controller: "homeController"
        })
        .when("/riviera", {
            templateUrl: "pages/decka.html",
            controller: "riviera"
        })
        .when("/main", {
            templateUrl: "pages/deck1.html",
            controller: "main"
        })
        .when("/lobby", {
            templateUrl: "pages/deck2.html",
            controller: "lobby"
        })
        .when("/mezzanine", {
            templateUrl: "pages/deck3.html",
            controller: "mezzanine"
        })
        .when("/promenade", {
            templateUrl: "pages/deck4.html",
            controller: "promenade"
        })
        .when("/upper", {
            templateUrl: "pages/deck5.html",
            controller: "upper"
        })
        .when("/empress", {
            templateUrl: "pages/deck6.html",
            controller: "empress"
        })
        .when("/verandah", {
            templateUrl: "pages/deck7.html",
            controller: "verandah"
        })
        .when("/vista", {
            templateUrl: "pages/deck8.html",
            controller: "vista"
        })
        .when("/sun", {
            templateUrl: "pages/deck9.html",
            controller: "sun"
        })
        .otherwise({ redirectTo: "/" });
});

// PARTIAL NAVIGATION
vikingApp.run(function ($rootScope, PrevNextService, $route, $location) {
    $rootScope.goNext = function (direction) {
        PrevNextService.goNext();
        // SLIDE LEFT
        $rootScope.direction = true;
    };
    $rootScope.goBack = function (direction) {
        PrevNextService.goBack();
        // SLIDE RIGHT
        $rootScope.direction = false;
    };
});

vikingApp.factory("PrevNextService", function ($route, $location) {
    var routes = [];
    angular.forEach($route.routes, function (config, route) {
        if (angular.isUndefined(config.redirectTo)) {
            routes.push(route);
        }
    });

    return {
        goNext: function () {
            var nextIndex = routes.indexOf($location.path()) + 1;
            if (nextIndex === routes.length) {
                $location.path(routes[0]);
            } else {
                $location.path(routes[nextIndex]);
            }
        },
        goBack: function () {
            var backIndex = routes.indexOf($location.path()) - 1;
            if (backIndex === -1) {
                $location.path(routes[routes.length - 1]);
            } else {
                $location.path(routes[backIndex]);
            }
        }
    };
});
