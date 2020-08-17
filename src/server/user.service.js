const Hero = require('./user.model');

require('./mongo').connect();

function getusers() {
  const docquery = User.find({});
  docquery
    .exec()
    .then(Users => {
      res.status(200).json(Users);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}
function postUser(req, res) {
    const originaluser = { email: req.body.email, username: req.body.username,password: req.body.password };
    const user = new User(originaluser);
    user.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(user);
      console.log('User created successfully!');
    });
  }
module.exports = {
  getHeroes,
  postUser
};