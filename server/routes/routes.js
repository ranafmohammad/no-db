const {
  getMovies,
  addToFav,
  deleteFromFav,
  getFav
} = require('./../controllers/movieController');
const routes = (app) => {
  app.get('/healthcheck', (req, res) => {
    res.send({
      message: 'Ok'
    })
  });
  app.get('/api/movies', getMovies);
  app.get('/api/movie/fav', getFav);
  app.post('/api/movie/fav', addToFav);
  app.delete('/api/movie/fav/:id', deleteFromFav);
};


module.exports = routes;