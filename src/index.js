const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const  { v4: uuidv4 }  = require('uuid');
const path = require('path');
require("dotenv").config()

const port = process.env.PORT || 4000

//=>SERVER APP
const app = express()
app.listen(port, ()=> {
    console.log(`server connect ${port}`);
})

//=> MIDDLEWARE  MULTER PARA SUBIR FILES
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    // let extension = file.mimetype.split("/")[1];
    let extension = path.extname(file.originalname).toLocaleLowerCase()
    cb(null, `${uuidv4()}${extension}`)
  },
});

app.use(multer({
    storage,
    dest: path.join(__dirname, "public/uploads"),
    limits: {fileSize: 1000 * 2000},
    fileFilter: (req, file, cb,) => {
        const fileTypes = /jpg|jpeg|png|gif/
        const mimetypes = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase())

        if (mimetypes && extname) {
            return cb(null, true)
        } else {
            cb('Error: archivo no valido')
        }
    }
  }).single("image")
);
//hacer publica las imagenes
app.use(express.static(path.join(__dirname, 'public')))


//=>VIEWS EN HTML 
app.set('views', path.join(__dirname, 'views') )
app.set('view engine', 'ejs')

//=>PARA PARSEAR CON POSTMAN
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//=>ROUTERS DEL SERVER
app.use('/', require('./routers/uploadRouter'))