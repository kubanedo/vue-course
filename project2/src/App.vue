<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="reallyDeleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-info">
                    Infor: Click on a Quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
       data() {
           return {
               quotes: [
                   'Just a Quote to see something'
               ],
               maxQuotes: 10
           }
       },
       methods: {
           newQuote(quote) {
               if(this.quotes.length >= this.maxQuotes) {
                   return alert('Please delete Quotes first!')
               } else if (quote=='') {
                   return alert('Please fill in the Quote first. The form is empty.')
               }
               this.quotes.push(quote);
           },
           reallyDeleteQuote(index) {
               this.quotes.splice(index, 1);
           }
       },
       components: {
           appQuoteGrid: QuoteGrid,
           appNewQuote: NewQuote,
           appHeader: Header
       } 
    }
</script>

<style>
</style>
