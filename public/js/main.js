const Hello = Vue.extend({
  props: ['content'],
  template: '#hello'
});

const List = Vue.extend({
  props: ['items'],
  template: '#list'
});

const App = new Vue({
  el: '.main-app',
  data: {
    name: 'Marcelo',
    names: [],
    newName: ''
  },
  methods: {
    addName: function() {
      this.names.push(this.newName);
      this.newName = '';
    }
  },
  components: {
    'm-hello': Hello,
    'm-items': List
  }
});
