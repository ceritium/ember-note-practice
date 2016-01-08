import Session from '../models/session';

export function initialize(container, application) {
   var session = Session.extend();
   application.register('session:main', session);
   application.inject('adapter', 'session', 'session:main');
   application.inject('route','session','session:main');
   application.inject('component','session','session:main');
   application.inject('template','session','session:main');
}

export default {
  name: 'session',
  initialize: initialize
};
