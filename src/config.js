
//PUERTO DE SERVER
process.env.PORT = process.env.PORT || 4000;




//PUERTO DE DB DE MONGODB
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//VARIABLE DE ENTORNO SECRET  SUBIR A HEROKU
process.env.SECRET =  process.env.SECRET || "este-secret-en-desarrollo"


let urlDB;

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost/dbfer";
} else {
  urlDB = "mongodb+srv://abraham:jIjRdwT5uLjmCu2L@cafe.8wspk.mongodb.net/cafe";
}

process.env.URLDB = urlDB
