const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extender: false })); // x-www-form-urlencoded

// Routes
app.use('/api/products', productRoute);

// Simple API http://localhost:3000/
app.get('/', (req, res) => {
	res.send('He33llo0000 World!!!!!');
});

mongoose
	.connect(
		'mongodb+srv://test:Test1333@node-api.dqaxg5p.mongodb.net/?retryWrites=true&w=majority&appName=Node-API'
	)
	.then(() => {
		console.log('Connected!');
		app.listen(3000, () => {
			console.log('Server is running on port 3000');
		});
	})
	.catch(() => {
		console.log('Connection failed');
	});
