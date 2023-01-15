const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let produitSchema = new Schema({
name: {
	type: String
},
typeProduit: {
	type: String
},
prix: {
	type: Number
},
quantite: {
	type: Number
}
}, {
	collection: 'produits'
})

module.exports = mongoose.model('Produit', produitSchema)
