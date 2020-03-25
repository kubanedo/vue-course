<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="serverID!==''">
            <h3>Server #{{serverID}} Details</h3>
            {{serverStatus}}
            <button v-if="serverStatus!=='Normal'" @click="serverBackToNormal">Set status to normal</button>
        </div>
        <div v-else>Server Details are currently not updated</div>

    </div>

</template>

<script>
import { eventBus } from '../../main';
export default {
    data() {
        return {
            serverID: '',
            serverStatus: ''
        }
    },
    methods: {
        serverBackToNormal() { 
            this.serverStatus = 'Normal';
            eventBus.$emit('setToNormal', {
                 serverID: this.serverID,
                 serverStatus: this.serverStatus
            });
        }
    },
    created() {
        eventBus.$on('chosenServer', (server) => {
            this.serverID = server.serverID;
            this.serverStatus = server.serverStatus;
        });
    }
}
</script>

<style>

</style>
