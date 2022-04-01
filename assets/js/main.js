// BONUS extra:
// non permettere l'inserimento di todo doppie nell'array di oggetti

var app = new Vue({
  el : "#root",
  data : {
    todo : [
    {
      text : "Fare i compiti",
      done : false,
    },
    {
      text : "Fare la spesa",
      done : false,
    },
    {
      text : "Fare il bucato",
      done : false,
    }
    ]
  },

  methods : {
    add: function(){
      let task = document.getElementById("newTodo").value,
      newTodo = {
        text : task,
        done : false
      }
      // DA SISTEMARE SE L'ELEMENTO E' GIA STATO INSERITO
      if(this.todo.includes(newTodo)){
        alert("Il task è già stato inserito");
      } else if(task == ""){
        alert("Non hai inserito nessun task!")
      } else {
        this.todo.push(newTodo);
      }
    },
    deleteTask: function(i){
      this.todo.splice(i, 1)
    },
    taskDone: function(i){
      this.todo[i].done = true;
    },
  },
});