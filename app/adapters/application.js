import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  headers: function(){
    return {
      'Authorization': 'Token token=' + this.session.get('currentUser.token')
    };
  }.property('session')
});
