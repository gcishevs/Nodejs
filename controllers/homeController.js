(function (homeController) {

	var data = require('../data');

	homeController.init = function (app) {
		app.get("/", function (req, res) {

			data.getNotesCategories(function (err, results) {
				
					res.render('index', {
					title: 'The Board',
					error: err,
					categories: results
				});
			});


		});
	};

})(module.exports);
