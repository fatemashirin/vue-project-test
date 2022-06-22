<template>
    <div class="dashboard">
        <sidebar2 />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar2 from '@/components/Sidebar2.vue'
export default {
    name: 'myDashboard',
    components: {
    
        Sidebar2
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color: white;
    border-radius: 20px;
    margin: 6px 6px 6px 0px;
}
</style>
