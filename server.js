const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public')); //Creamos un contenido estático (middleware). Hace público
//el contenido.


const port = process.env.PORT || 3000;

//Express HBS engine                                                
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
//Helpers HBS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res) => {  //Forma original de crear un servicio con express

    //DOCUMENTACION PARA RENDER EXPRESS
    //     res.render(view [, locals] [, callback])
    // Renders a view and sends the rendered HTML string to the client. Optional parameters:
    // locals, an object whose properties define local variables for the view.
    // callback, a callback function. If provided, the method returns both the possible error and rendered string,
    //  but does not perform an automated response. When an error occurs, the method invokes next(err) internally.
    // The view argument is a string that is the file path of the view file to render. This can be an absolute path,
    //  or a path relative to the views setting. If the path does not contain a file extension, then the view engine 
    //  setting determines the file extension. If the path does contain a file extension, then Express will load the 
    //  module for the specified template engine (via require()) and render it using the loaded module’s __express function.
    res.render('home', {
        nombre: 'Ariel'
    });
});


app.get('/about', (req, res) => {  //Forma original de crear un servicio con express

    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});