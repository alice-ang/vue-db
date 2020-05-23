<template>
  <div class="container">
    <h1>User database</h1>
    
    <div class="create-user">
      <label for="create-user">Enter Name of User: </label>
      <div>
      <input type="text" name="first_name" id="first_name" v-model="first_name" placeholder="Enter first name here">
      <input type="text" name="first_name" id="last_name" v-model="last_name" placeholder="Enter last name here">
      </div>
      <button v-on:click="createUser">Create User</button>
    </div>


    <hr>
    <!--Show all users-->
    <p class="error" v-if="error">{{error}}</p>
    <div class="users-container">
      <div class="user"
      v-for="(user, index) in users"
      v-bind:item="user"
      v-bind:index="index"
      v-bind:key="user._id"
      >
      <span title="Click to delete user" v-on:click="deleteUser(user._id)">X</span>
      <img src="https://placeimg.com/300/200/nature" alt="image of user" >
      <h4> {{user.first_name}} {{user.last_name}}</h4>
      <p></p>
      <p class="date-text">Created at: {{`${user.createdAt.getDate()}/${user.createdAt.getMonth()}/${user.createdAt.getFullYear()}`}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../UserService';
export default {
  name: 'UserComponent',
  data(){
    return {
      users: [],
      error: '',
      first_name: '',
      last_name: '',
    }
  },
  async created() {
  try {
    this.users = await UserService.getUsers();
  } catch (error) {
    console.log(error);
    this.error = error.message;
  }    
  },
  methods: {
     createUser: async function (){
      await UserService.insertUser(this.first_name, this.last_name);
      this.users = await UserService.getUsers();
    },
    deleteUser: async function (id){
  
        if (confirm("Are you sure you want to delete user?")) {
          await UserService.deleteUser(id);
         this.users = await UserService.getUsers();
        } else {
          alert("user not deleted");
        }


    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}
.create-user {
  border: 1px solid #c5c5c5;
  padding: 1rem;
}
.create-user button {
  width: 40%;
  padding: 10px;
}
.create-user input {
  padding: 10px;
  margin: 5px;
}
.user{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  margin: auto;
  padding: 10px;
  margin-top: 20px;
}

.user img {
  width: 100%;
}
.user span{
  float: right;
  font-size: 12px;
}
.user span:hover, button:hover{
  font-weight: bold;
  cursor: pointer;
}
.user:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.date-text {
  font-weight: 100;
  font-size: 10px;
}
</style>
