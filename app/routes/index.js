import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },

    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    update(updateQuestion, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          updateQuestion.set(key, params[key]);
        }
      });
      debugger;
      updateQuestion.save();
      this.transitionTo('index');
    }
  }
});
