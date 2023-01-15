//mongodb+srv://sallndiaya:<password>@cluster0.crfnvy2.mongodb.net/?retryWrites=true&w=majority
//importer le package pour utiliser les variables d'environnement

const dotenv = require("dotenv");
const result = dotenv.config();
//importer mongose pour me connecter à la base de donnée mongoDB
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.crfnvy2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, UseUnifiedTopology: true})
    .then(()=> console.log("connexion à MongoDB reussi"))
    .catch(()=> console.log("connexion à MongoDB échoué"));


module.exports = mongoose;



    
