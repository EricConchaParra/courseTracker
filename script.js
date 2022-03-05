new Vue({
  el: "#app",

  data() {
    return {
      courses: [],
      title: "",
      time: 0,
    };
  },

  computed: {
    totalTime() {
      //Usando reduce() además de arrow functions hacemos la suma de una
      //manera bastante mas elegante que usando un for
      //reduce() en mdn https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

      return this.courses.reduce((a, b) => a + parseInt(b.time), 0);
    },
  },

  methods: {
    addCourse() {
      /*Esto para que si alguno de los datos está vacio, no haga nada (no llena datos vacíos)
      Si las variable tienen datos son TRUE
      Si las variable no tienen datos son FALSE
      Entonces si una de las dos está vacía pasaría a ser TRUE lo que daría resultado
      TRUE entonces se sale sin hacer nada más.
      */
      if (!this.title || !this.time) {
        return;
      }

      // Aquí creo un objeto con los datos de los input
      let newCourse = { title: this.title, time: this.time };
      //luego lo agrego al final del objeto courses
      this.courses.push(newCourse);
      //dejo las propiedades vacias (para recibir un nuevo objetos)
      this.title = "";
      this.time = 0;
    },
  },
});
