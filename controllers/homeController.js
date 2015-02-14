(function (homeController) {

	var data = require('../data');



	homeController.init = function (app) {
		app.get("/", function (req, res) {

			data.getNotesCategories(function (err, results) {
				
				//console.log(results);
				res.render('index', {
					title: 'Express + Vash',
					error: err,
					categories: results
				});
			});


		});
	};

})(module.exports);