<template>
  <div class="container">
    <router-link to="/">Go Back</router-link>
    <h1>Tasks</h1>
    <div class="create-task">
      <label for="create-task">Enter Task Information: </label>
      <div>
      <input type="text" name="text" id="text" v-model="text" placeholder="Name of task here">
      </div>
      <div>
        <label for="description">Description:</label>
        <br>
        <textarea id="description" rows="4" v-model="description" placeholder="Describe task here">  </textarea>
      </div>
      <div>
        <select name="priority" id="prio" v-model="priority" required> 
          <option value="low">Low</option>
          <option value="medium" selected>Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div class="radio-btns">
          <label for="completed">Completed</label>
          <input type="radio" id="completed" value="completed" v-model="status">
          <label for="incompleted">Incompleted</label>
          <input type="radio" id="incompleted" value="incompleted" v-model="status">   
      </div>
      <button v-on:click="createTask">Create Task</button>
    </div>


    <hr>
    <!--Show all tasks-->
    <p class="error" v-if="error">{{error}}</p>
    <div class="task-container">
      <div class="task" 
      v-for="(task, index) in tasks"
      v-bind:item="task"
      v-bind:index="index"
      v-bind:key="task._id" 
      >
      <span title="Click to delete user" v-on:click="deleteTask(task._id)">X</span>
      <h4> {{task.text}}</h4>
      <p>{{task.description}}</p>
      <div class="text-container">
        <p><strong>Status:</strong> {{task.status}}</p>
        <p><strong>Priority:</strong> {{task.priority}}</p>
      </div>
      <p class="date-text">Created at: {{`${task.createdAt.getDate()}/${task.createdAt.getMonth()}/${task.createdAt.getFullYear()}`}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskService from '../TaskService';
export default {
  name: 'TaskComponent',
  data(){
    return {
      tasks: [],
      error: '',
      text: '',
      description: '',
      priority: '',
      status: '',
    }
  },
  async created() {
  try {
    this.tasks = await TaskService.getTask();
  } catch (error) {
    console.log(error);
    this.error = error.message;
  }    
  },
  methods: {
     createTask: async function (){
      await TaskService.insertTask(this.text, this.description, this.priority, this.status);
      this.tasks = await TaskService.getTask();
    },
    deleteTask: async function (id){
  
        if (confirm("Are you sure you want to delete task?")) {
          await TaskService.deleteTask(id);
         this.tasks = await TaskService.getTask();
        } else {
          alert("Task not deleted");
        }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#prio, .task, .create-task button , #text, textarea{
  border-radius: 5px;
  width: 40%;
}
.container {
  max-width: 800px;
  margin: auto;
}
.create-task {
  border: 1px solid #c5c5c5;
  padding: 1rem;
}
.create-task button {
  padding: 10px;
}
.create-task input {
  padding: 10px;
  margin: 5px;
}
.create-task div {
  margin-top: 10px;
}
.radio-btns input {
  padding: 10px;
  margin: 5px;
}
.text-container{
  display: flex;
  justify-content: space-around;
}
.task{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: auto;
  padding: 10px;
  margin-top: 20px;
}

.task span{
  float: right;
  font-size: 12px;
}
.task span:hover, button:hover{
  font-weight: bold;
  cursor: pointer;
}
.task:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.date-text {
  font-weight: 100;
  font-size: 10px;
}
</style>
