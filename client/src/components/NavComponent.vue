<template >
    <div class="navigation">
    <ul class="nav">
        <li><router-link to="/tasks">Tasks</router-link> </li>
        <li><router-link to="/">Users</router-link> </li>
    </ul>
    </div>
</template>
<script>
// JS
export default {
    name: 'NavComponent',
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss">
/* CSS */
.nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden
}
ul li {
    display: inline-block;
    padding: 10px;

    &::hover {
    font-weight: bold;
    }
}

</style>