<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-unit v-for="server in servers" 
                        :serverID="server.id" 
                        :serverStatus="server.status"
            ></server-unit>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main';
import ServerUnit from './ServerUnit.vue';

export default {
    components: {
            'server-unit': ServerUnit
    },
    data()  {
        return{
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Normal'},
                {id: 5, status: 'Unknown'}                                                                
            ]
            };    
        } ,
    created() {
        eventBus.$on('setToNormal', (server) => {
            this.servers[server.serverID-1].status = 'Normal';
        });
    }      
}
</script>

<style>

</style>
