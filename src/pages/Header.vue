<template>
   <div class="nav"> 
    <!-- <router-link to="/admin">Admin</router-link> -->

    <router-link to="/dashboard">Dashboard</router-link>
        

<div class="wrapper">
  <button @click="toggle" class="btn">Select Category</button>
    <div v-show="isOpen" class="content">
      <ul class="list">
<li><router-link to="/women">Women</router-link></li>  
   <li> <router-link to="/men">Men</router-link> </li> 
   <li> <router-link to="/kids">kids</router-link> </li> 
    <li><router-link to="/electronics">Electronics</router-link></li> 
    <li> <router-link to="/all">All</router-link> </li>
     </ul>
     
  </div>
  </div>
 
   <input type="text" placeholder="Search here"/>
    <button type="button">Search</button>
   
   
   </div>
    

   
    
 </template>

<script>
export default {
  name:'myHeader',

data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
  

}

</script>






<style>

.nav {
  background-color: rgb(99, 200, 233);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  
  
  
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 16px 14px;
  text-decoration: none;
  font-size: 20px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: rgb(74, 143, 207);
  color: rgb(18, 5, 134);
}
button{
    margin-top: 20px;
    padding: 10px,6px;
    font-size: 15px;
}
input{
    margin-top: 20px;
    padding: 10px,6px;
    font-size: 15px;

    
  
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  width: 182px;
  font-size: 14px;
  color: #fff;
  background-color: #185cda;
  border-color: #2e36a1;
  padding: 8px;
}

.content {
border: 1px solid lightblue;
width: 180px;
}
.list {
  list-style: none;
  margin: 0;
  padding: 20px;
}
</style>