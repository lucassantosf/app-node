const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://lucas:ferreira24680@cluster0-shard-00-00-pv8jh.mongodb.net:27017,cluster0-shard-00-01-pv8jh.mongodb.net:27017,cluster0-shard-00-02-pv8jh.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.json());

app.post('/users' , (request, response) =>{ 
	console.log(request.body);
	return response.json({message:'Hello word!1'});
});

app.listen(3333);