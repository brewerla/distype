const   express 	=   require('express'), 
        app     	= 	new express(), 
		path 		= 	require('path'); 

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
	res.render('index'); 
}); 

app.listen("5500", ()=> {
	console.log("I am here on 127.0.0.0:5500"); 
}); 