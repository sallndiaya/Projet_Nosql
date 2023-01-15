//mongodb+srv://sallndiaya:<password>@cluster0.crfnvy2.mongodb.net/?retryWrites=true&w=majority
//importer le package pour utiliser les variables d'environnement

const dotenv = require("dotenv");
const result = dotenv.config();
//importer mongose pour me connecter à la base de donnée mongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.URL_BD, {useNewUrlParser: true, UseUnifiedTopology: true})
    .then(()=> console.log("connexion à MongoDB reussi"))
    .catch(()=> console.log("connexion à MongoDB échoué"));


module.exports = mongoose;



    
