
Template.favorites_main.helpers({
    favorites: Favorites.find({})
});

Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
});

