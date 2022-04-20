<template>
  <div>
    <p>
      371 Final Project
    </p>

  
    <input type="text" :value="geoPosition">
    
    <button @click="searchCity">Add</button>
    <button @click="logout">Logout</button>
     <button @click="deleteUser">Delete my Account...</button>
     
    
    <div id="clocks">
      
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

const timezoneDBUrl = "http://api.timezonedb.com/v2.1";
type City = {
  name: string;
  timeZone: string;
};

type TimeZoneData = {
  countryName: string;
  gmtOffset: number;
  regionName: string;
  zoneName: string;
};
@Component
export default class Sample extends Vue {
  geoPos: { lat?: number; lng?: number } = {};
  selectedCities: Array<City> = [];
  //selectedLoctions: Array<Location> = [];
  apiKey = "";
  mounted(): void {
    this.apiKey = process.env.VUE_APP_TIMEZONE_API_KEY;
  }
  get geoPosition(): string {
    if (this.geoPos.lat && this.geoPos.lng)
      return `${this.geoPos.lat.toPrecision(5)},${this.geoPos.lng.toPrecision(
        5
      )}`;
    else return "N/A";
  }
  searchCity(): void {
    const param = new URLSearchParams();
    param.append("key", this.apiKey);
    param.append("format", "json");
    param.append("by", "position");
    param.append("lat", this.geoPos.lat!.toString());
    param.append("lng", this.geoPos.lng!.toString());
    const tzUrl = `${timezoneDBUrl}/get-time-zone?` + param.toString();
    // Use a Web Proxy Server to get around CORS issue
    // since timezonedb.com does not allow CORS
    axios
      .request({
        method: "GET",
        url: "https://api.allorigins.win/get",
        params: {
          url: tzUrl,
        },
      })
      .then((r: AxiosResponse) => {
        return r.data;        
      })
      .then((r: any) => JSON.parse(r.contents))
      .then((r: TimeZoneData) => {
        // Add the selected location to our array
  /* 
         var temp ;
         temp = this.selectedCities.find(r => r.name, r.regionName)
         console.log(temp?.name)
  */
       
         // let temp = this.selectedCities.find(r => r.name, r.regionName)
         
        if (this.selectedCities.findIndex(tempCity => tempCity.name == r.regionName)) {
       // && this.selectedCities.find(r => r.timeZone)
           this.selectedCities.push({ name: r.regionName, timeZone: r.zoneName });
           

        }

      });
  }

  what(geoPos: { lat: number; lng: number }): void {
    // When the user pans the map left/right the longitude
    // angle can be out of the [-180,+180] range
   

   
    while (geoPos.lng > 180) geoPos.lng -= 360;
    while (geoPos.lng < -180) geoPos.lng += 360;
    // If statement to check if region is the same?
    this.geoPos = { ...geoPos };




    
  }


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
/* #clocks {
  margin-top: 1em;
} */
pre {
  white-space: normal;
  padding: 0.5em;
  border: 2px solid gray;
}
</style>