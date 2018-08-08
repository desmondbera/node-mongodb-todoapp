let mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

let user = new User({
  email: 'text@gmail.com'
});

user.save().then((doc) => {
  console.log('User saved', doc)
}, (e) => {
  console.log('unable to save user', e)
});

module.exports = {User: User};
