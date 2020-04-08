export const mixin = {
    computed: {
        mixinCompReverseText() {
            return this.text.split("").reverse().join("");
        },
        mixinCompCountLength() {
            return this.text2 + ' (' + this.text2.length + ')';
        }            
    }    
};