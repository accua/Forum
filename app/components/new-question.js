import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : null,
        author: this.get('author') ? this.get('author') : null,
        notes: this.get('notes') ? this.get('notes') : null
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
