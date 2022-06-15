import { Router } from 'express';
import movies from '../sample.js';
const router = Router();

// console.log(movies);
router.get('/', (req, res) => {
  
  res.json(movies);
});

router.post('/', (req, res) => {
  // console.log(req.body);
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const newMovie = {id: (movies[movies.length-1].id + 1), ...req.body};
    movies.push(newMovie);
    res.send('movie added');
  } else {
    res.send('missing fields');
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // console.log(req.params);
  const index = movies.findIndex(movie => movie.id === Number(id));
  // console.log(`index: ${index}`);
  if (index !== -1) {
    movies.splice(index, 1);
    res.send('movie deleted');
  } else {
    res.send('movie not found');
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  
  const { title, director, year, rating } = req.body;
  const index = movies.findIndex(movie => movie.id === Number(id));
  if (index !== -1) {
    movies[index] = { id: Number(id), title, director, year, rating};
    res.send('movie updated');
  } else {
    res.send('movie not found');
  }
});

export default router;