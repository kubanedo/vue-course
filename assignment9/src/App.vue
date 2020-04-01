<template>
    <div class="container">
        <div v-if="!submitted" style="margin-top: 30px">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                        <!--<div class="form-group">
                        <label for="full_name">Full Name</label><br/>
                        <input class="form-control" type="text" name="full_name" v-model="fullName">
                        </div> -->
                        <full-name v-model="fullName"></full-name>

                        <div class="form-group">
                        <label for="mail">Mail</label><br/>
                        <input class="form-control" type="text" name="mail" v-model.lazy="mail">
                        </div>                       

                        <div class="form-group">
                        <label for="password">Password</label><br/>
                        <input class="form-control" type="password" name="password" v-model="password">
                        </div>                                      

                        <div class="form-group">
                            <b>Store in DB?</b><br/>
                            <div class="form-check form-check-inline">                            
                                <input class="form-check-input" type="radio" name="store_yes" value="Yes" v-model="storeInDB">
                                <label class="form-check-label" for="store_yes">Yes</label>    
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="store_no" value="No" v-model="storeInDB">
                                <label class="form-check-label" for="store_no">No</label> 
                            </div>
                        </div>
                        <button @click.prevent="submitted = true">Submit</button>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeInDB }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';
    export default {
        data() {
            return {
                fullName: 'Pepa Novák',
                mail: '',
                password: '',
                storeInDB: 'No',
                submitted: false
            }
        }, 
        components: {
            'full-name': FullName,
        }
    }
</script>

<style>
</style>
