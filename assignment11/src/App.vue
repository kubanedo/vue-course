<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                1) {{text | reverseText}}<br/><br/>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                2) {{text2 | globCountLength}}<br/><br/>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                3) {{compReverseText}}<br/>
                {{compCountLength}}<br/><br/>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                4) {{mixinCompReverseText}}<br/>
                {{mixinCompCountLength}}<br/><br/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mixin } from './mixin';

    export default {
        mixins: [mixin],
        data() {
            return {
                text: 'Some text here',
                text2: 'Test'
            }
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            },
            locCountLength(value) {
                return value + ' (' + value.length + ')';
            }
        },
        computed: {
            compReverseText() {
                return this.text.split("").reverse().join("");
            },
            compCountLength() {
                return this.text2 + ' (' + this.text2.length + ')';
            }            
        }
    }
</script>

<style>
</style>
