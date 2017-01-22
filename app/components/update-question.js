import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(updateQuestion) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', updateQuestion, params);
      debugger;
    }
  }
});
