const User = require('./user.model');

require('./mongo').connect();

function getUsers() {
  const docquery = User.find({});
  docquery
    .exec()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}
function postUser(req, res) {
    const originaluser = { email: req.body.email, username: req.body.username, password: req.body.password };
    const user = new User(originaluser);
    console.log('data', originaluser);
    user.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(user);
      console.log('User created successfully!');
    });
  }

  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }
module.exports = {
  getUsers,
  postUser
};