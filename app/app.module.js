angular.module('app', [
    'templates',
    'ui.router',
    'directives',
    'services',
    'home',
    'register',
    'login',
])
    .config(function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');
    })
    .run(function (User) {
        User.getLoggedInUser();
    });