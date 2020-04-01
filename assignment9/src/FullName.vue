<template>
    <div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="lastName">
        </div> 
    </div>    
</template>
<script>
export default {
    data() {
        const [firstName = '', lastName = ''] = this.value.split(' ')
        return {
            firstName,
            lastName,
            fullName: this.value
        }
    },
    props: ['value'],
    watch: {
        getWholeName(val) {
            this.fullName = val;
        },
    },
    computed: {
        getWholeName() {
            let wholeName = [this.firstName, this.lastName].filter((item) => item !== '').join(' ');
            this.$emit('input', wholeName);
            return wholeName; 
        }  
    }
}
</script>
<style scoped>

</style>