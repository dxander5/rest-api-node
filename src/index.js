import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// import { router } from './routes/movies';
const app = express();
import router  from './routes/movies.js';


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
// app.use(require('./routes/index'));
app.use('/api/movies', router);
//start the server
app.listen(app.get('port'), () => {
  console.log('listening on port 3000');
});
