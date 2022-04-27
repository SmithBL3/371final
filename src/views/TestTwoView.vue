<template>
  <div>
    <h1>
      Romantic Restaurant Reviews
    </h1>

    

    <h2>
      Restaurant List
    </h2>
        <nav>
      <ul>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/restaurant-list">Restaurant List</a></li>
        <li><a href="/reviews">Reviews</a></li>
      </ul>
    </nav>
    <p>This list developed by <i>Romantic Restaurant Reviews</i> includes our top recommendations for restaurants, in a list form. Refer to the "Reviews" page for the reviews for each of these restaurants, including reviews from customers.</p>
    <table>
      <tr>
        <th>Restaurant</th>
        <th>Stars</th>
      </tr>
      <tr>
        <td>Giornio's</td>
        <td>5 out of 5</td>
      </tr>
      <tr>
        <td>The Watering Hole</td>
        <td>3 out of 5</td>
      </tr>
      <tr>
        <td>Cafe Espresso</td>
        <td>4 out of 5</td>
      </tr>
      <tr>
        <td>McDonald's</td>
        <td>1 out of 5</td>
      </tr>
      <tr>
        <td>Pizza Palace</td>
        <td>5 out of 5</td>
      </tr>
    </table>     
    <div>
      
    </div>
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
export default class TestTwoView extends Vue {

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

p {
  text-align: center;
  background-color:rgb(235, 212, 232);
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

table {
    margin-left: auto;
  margin-right: auto;
}

pre {
  white-space: normal;
  padding: 0.5em;
  border: 2px solid gray;
}

</style>