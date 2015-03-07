(function (data) {

    var seedData = require('./seedData');
    var database = require('./database');

    data.getNotesCategories = function (next) {
        next(null, seedData.initialNotes);
    }

    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Can't connect to the DB " + err);
            } else {
                // test to see if data exists
                db.notes.count(function(err, count) {
                    if (err) {
                        console.log("Can''t retrive data from the DB " + err);
                    } else {
                        if (count == 0) {
                            console.log("Seeding the Database");
                            seedData.initialNotes.forEach(function (item) {
                                db.notes.insert(item, function (err) {
                                    if (err) {
                                        console.log("Can't insert nore to db " + err)
                                    }
                                });
                            })
                        } else {
                            console.log("The database already seeded")
                        }
                    }
                });
            }
        })
    }
    
    seedDatabase();

})(module.exports)