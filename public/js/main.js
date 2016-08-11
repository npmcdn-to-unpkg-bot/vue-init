const Hello = Vue.extend({
  props: ['content'],
  template: '#hello'
});

const List = Vue.extend({
  props: ['items', 'delete'],
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
    },
    removeName: function(index) {
      this.names.splice(index, 1);
    }
  },
  components: {
    'm-hello': Hello,
    'm-items': List
  }
});
