import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      Ember.$.post('http://localhost:3000/users/sign_in.json', {
        user: {
          email: this.controller.get('email'),
          password: this.controller.get('password')
        }
      }).then(function(data) {
         this.session.set('currentUser', data);
         this.transitionTo('notebooks');
      }.bind(this), function() {
        console.log('Login failed');
      });
    }
  }
});
