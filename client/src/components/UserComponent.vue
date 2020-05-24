<template>
  <div class="table">
      <h1>Users</h1>
    <div class="create-user">
      <label for="create-user">Enter Name of User: </label>
      <div>
      <input type="text" name="first_name" id="first_name" v-model="first_name" placeholder="Enter first name ">
      <input type="text" name="first_name" id="last_name" v-model="last_name" placeholder="Enter last name ">
      </div>
      <button v-on:click="createUser">Create User</button>
    </div>
<hr>
      <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            <tr class="user" v-for="(user, index) in users"
                v-bind:item="user"
                v-bind:index="index"
                v-bind:key="user._id">
            <td>{{user.first_name}}</td>
            <td>{{user.last_name}}</td>
            </tr>
      </table>
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
<style >
.table {
  margin: auto;
  max-width: 800px;
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
