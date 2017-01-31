angular.module('services')
    .service('User', User);

function User($state, localStorageService) {

    var vm = this;
    vm.currentUser = null;

    this.isLoggedIn = () => vm.currentUser !== null;

    this.logIn = (user) => {
        localStorageService.set('currentUser', user);
        this.getLoggedInUser();
        $state.go('home');
    };

    this.getLoggedInUser = () => {
        vm.currentUser = localStorageService.get('currentUser');
    };

    this.logout = () => {
        localStorageService.remove('currentUser');
        vm.currentUser = null;
        $state.go('login');
    };
}