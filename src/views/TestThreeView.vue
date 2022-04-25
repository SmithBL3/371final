<template>
  <div>
    <h1>
      Romantic Restaurant Reviews
    </h1>

    <h2>
      Reviews
    </h2>

    <nav>
      <ul>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/restaurant-list">Restaurant List</a></li>
        <li><a href="/reviews">Reviews</a></li>
      </ul>
    </nav>

    <table>
      <tr>
        <th>Name</th>
        <th>Restaurant</th>
        <th>Review</th>
        <th>Stars</th>
      </tr>
      <tr>
        <td>KristenA</td>
        <td>Giornio's</td>
        <td>Wonderful ambiance! Good for a great night out.</td>
        <td>5 out of 5</td>
      </tr>
      <tr>
        <td>KailaJ</td>
        <td>The Watering Hole</td>
        <td>The food was really good, but the staff were a little rude.</td>
        <td>3 out of 5</td>
      </tr>
      <tr>
        <td>PattiC</td>
        <td>Cafe Espresso</td>
        <td>A go to spot to chill by the fire.</td>
        <td>4 out of 5</td>
      </tr>
      <tr>
        <td>LillyT</td>
        <td>McDonald's</td>
        <td>Not the epitome of fine dining.</td>
        <td>1 out of 5</td>
      </tr>
      <tr>
        <td>JuddL</td>
        <td>Pizza Palace</td>
        <td>Amazing place for a bite after a fun night on the town.</td>
        <td>5 out of 5</td>
      </tr>
    </table>
    
    <br>

    <span>Name:</span> &nbsp;
    <input type="text" :value="Name">
    <br>
    <span>Restaurant:</span> &nbsp;
    <input type="text" :value="Restaurant">
    <br>
    <span>Review:</span> &nbsp;
    <input type="text" :value="Review">
    <br>
    <span>Stars:</span> &nbsp;
    <input type="number" :value="Stars">
    
    <br><br>
    <button @click="addReview">Add Review</button> &nbsp;
    <button @click="logout">Logout</button> &nbsp;
    <button @click="deleteUser">Delete my Account...</button>
  </div>
</template>

<script lang="ts">
// import ChildComponent from "./60-props-child.vue";
import axios, { AxiosResponse } from "axios";
//import {DocumentReference, CollectionReference,  addDoc, collection} from “firebase/firestore";
import { getAuth, deleteUser, signOut } from "firebase/auth";
import { Vue, Component } from "vue-property-decorator";
import { ZoneRegion } from "@js-joda/core";

@Component
export default class TestThreeView extends Vue {

 // Save Data Function
 logout(): void {
   const auth = getAuth();
   const user = auth.currentUser;
   signOut(auth)
   this.$router.back();
 }

 // DELETE USER FUNCTION
deleteUser(): void {
    const auth = getAuth();
    const user = auth.currentUser;

  if (user !== null) {
    deleteUser(user)
    
    .then(() => {
      this.$router.push("/");
     
  // User deleted.
}).catch((error) => {
  // An error ocurred
  // ...
});
  
  }}
  
}

</script>

<style scoped>
h1 {
  text-align: center;
  color: red;
  font-size: 60px;
  font-family:cursive;
}

h2 {
  font-family:Georgia, 'Times New Roman', Times, serif;
  text-align: center;
}

nav {
    /* height: 40px; */
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    background: #f7c1cb;
}

nav ul {
    margin-left: auto;
    margin-right: auto;
}

nav li {
    display: inline-block;
    height: 100%;
    width: 20%;
}

nav li a {
    font-family: cursive;
    color: #ff1e4b;
    font-size: 20px;
    text-decoration: none;
}

nav li a:hover {
    color: #dd5771;
}

pre {
  white-space: normal;
  padding: 0.5em;
  border: 2px solid gray;
}

th {
  border: 1px solid;
}
tr :nth-child(even) {
  background-color: #f1b0bd;
}
</style>