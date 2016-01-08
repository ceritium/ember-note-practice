import StorageObject from 'ember-local-storage/local/object';

export default StorageObject.extend({
  storageKey: 'your-app-settings',
  initialContent: {
    welcomeMessageSeen: false,
    currentUser: {}
  }
});

