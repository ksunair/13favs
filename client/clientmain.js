var Favorites = [
    { Name: "Seven Samurai"},
    { Name: "Bad Boys"}
];

Template.favorites_main.favorites = function() {
    return Favorites;
};

Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
});

