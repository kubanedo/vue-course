<template>
    <li class="list-group-item" @click="chooseServer">
        Server #{{ serverID }} - status: {{ serverStatus }}
    </li>
</template>
<script>
import { eventBus } from '../../main';
export default {
   props: {
       serverID: {
           type: Number,
       },
       serverStatus: {
           type: String,
       }
   },
   methods: {
            chooseServer: function() {
             eventBus.$emit('chosenServer', {
                 serverID: this.serverID,
                 serverStatus: this.serverStatus
             });
             console.log('this.server', {
                 serverID: this.serverID,
                 serverStatus: this.serverStatus
             });
            }
   }   
}
</script>
<style scoped>

</style>