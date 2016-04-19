function getUserData(req) {

  var username;
  var type;
  var userSearch = {};

  username = req.body.username;
  type = 'username';
  userSearch = { username: username };

  return {
    username: username,
    type: type,
    userSearch: userSearch
  }
}
