
Template.favorites_main.favorites = function() {
    var favs = Favorites.find({}, {sort: {score: -1}});
    for(var i = 0; i < favs.length; i++) {
        var d = favs[i];
        d.rank = i;
    }
    return favs;
};
Template.favorites_main.events({
    'click #up': function (e, t) {
        var score = this.score;
        if (score == null)
           score = 0;
        score = score + 1;
        Favorites.update({"_id": this._id}, {$set: {"score": score}});
    },
    'click #down': function (e, t) {
        var score = this.score;
        if (score > 0)
           score = score - 1
        Favorites.update({"_id": this._id}, {$set: {"score": score}});
    }
});

Accounts.ui.config({
        passwordSignupFields: 'USERNAME_AND_EMAIL'
});

