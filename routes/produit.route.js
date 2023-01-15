let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let produitSchema = require("../models/Produit");

// CREATE Student
router.post("/create-produit", (req, res, next) => {
produitSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Students
router.get("/", (req, res) => {
produitSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE student
router
.route("/update-produit/:id")
// Get Single Student
.get((req, res) => {
	produitSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Student Data
.put((req, res, next) => {
	produitSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Produit updated successfully !");
		}
	}
	);
});

// Delete Student
router.delete("/delete-produit/:id",
(req, res, next) => {
produitSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
