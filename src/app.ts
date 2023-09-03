import express from 'express';
import bodyParser from 'body-parser';

import userRoute from './routes/users';


const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/',(req, res, next)=>{
    res.send('<h1>hello </h1>')
})

app.use('/users',userRoute)





app.listen(9999,()=>{
    console.log('server is running');
})