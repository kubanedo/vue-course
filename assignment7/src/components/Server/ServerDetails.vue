<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <h3>Server #{{server.id}} Details</h3>
            {{server.status}}
            <button v-if="server.status!=='Normal'" @click="serverBackToNormal">Set status to normal</button>
        </div>
        <div v-else>Please select some server</div>

    </div>

</template>

<script>
import { eventBus } from '../../main';
export default {
    data() {
        return {
            server: null
        }
    },
    methods: {
        serverBackToNormal() { 
            this.server.status = 'Normal';
            eventBus.$emit('setToNormal', this.server);
        }
    },
    created() {
        eventBus.$on('chosenServer', (server) => {
            this.server = server;
        });
    }
}
</script>

<style>

</style>
