angular.module('services')
    .service('Register', Register);

function Register(API, $state, User) {

    this.registration = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        isAdmin: false
    };

    this.createAccount = () => {
        if (this.registration.password === this.registration.confirmPassword) {
            API.post('/postUser', this.registration).then(res => {
                User.logIn(res.data.user, res.data.token);
                $state.go('home');
                console.log(res);
            }, rej => {
                console.log('fail');
            });
        }
    };

}