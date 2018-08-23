module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.render('index', {title: "Index || RateMe"});
  });
  app.get('/signup', (req, res, next) => {
    res.render('user/signup', {title: "Sign up || RateMe"});
  });
  app.get('/login', (req, res, next) => {
    res.render('user/login', {title: "Login || RateMe"});
  });
}
