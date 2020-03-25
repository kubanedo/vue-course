<template>
    <li class="list-group-item" @click="chooseServer" style="cursor: pointer">
        Server #{{ server.id }} - status: {{ server.status }}
    </li>
</template>
<script>
import { eventBus } from '../../main';
export default {
   props: {
       server: {
           type: Object,
       }
   },
   methods: {
            chooseServer: function() {
             eventBus.$emit('chosenServer', this.server);
            }
   }   
}
</script>
<style scoped>

</style>