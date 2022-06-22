<template>
<Header />

  <!-- <h1 class="welcome">All Products</h1> -->
  <!-- <Products v-bind:items="items" /> -->
<div v-for="product in products" :key="product.title">
        <!-- <div>{{product.id}}</div> -->
               <div><img :src="product.image" :alt="product.title" width="200" /></div>
              <div>{{product.title}}
                 
             
                </div>

        


  </div>
</template>

<script>
import {onMounted, ref} from 'vue';
// import Products from '@/pages/admin/Products.vue'
import Header from'../pages/Header.vue'
export default {
name:'myAll',
components: { 
    Header
   },
  //  data(){
    // return{
      // items:[
      // this.id='',
    //  {title:'GOOGLE PIXEL 4A (JUST BLACK, 6GB RAM, 128GB STORAGE)',
      // image:'https://vlebazaar.in/image/cache/catalog//B08CFSZLQ4/Google-Pixel-4a-Just-Black-6GB-RAM-128GB-Storage-B08CFSZLQ4-1000x1000.jpg'}
    

      // ],
      
  //  }
// }





  
  // props:['items'],

     setup() {
    const products = ref([]);
    onMounted( async () => {
      const res = await fetch('http://localhost:3000/products');
      products.value = await res.json();
    });
    return{
      products
    }

     }
    

}  
</script>

<style>

</style>