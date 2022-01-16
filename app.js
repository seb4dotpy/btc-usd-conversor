new Vue({
    el: '#app',

    data () {
        return {

            name : 'Bitcoin',
            symbol:'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 1,//Will change BTC if percent variation is + or -
           //Array with different values
            color:'f4f4f4',
            currentPrice: 30000,
            valueC:0,
            pricesWithDays: [
                {day:'Monday', value: 5000},
                {day:'Tuesday', value: 10000},
                {day:'Wednesday', value: 30000},
                {day:'Thurday', value: 35000},
                {day:'Friday', value: 20000},
                {day:'Saturday', value: 40000},
                {day:'Sunday', value: 5000}
            ],

            showPrices: false, //Show or hide, until user interaction
        }
    },
    computed: { //Change title by name actualizations
        title() {
            return `${this.name} - ${this.symbol}`
        },
        convertedValue () {
            if(!this.valueC){//If valueC is 0 or nothing, return 0
                return 0
            }
            
            return this.valueC / this.currentPrice //show BTC price in dollar, about current price
        }
    },

    watch: {
        showPrices(newValue,oldValue){
            console.log(newValue,oldValue)
        }
    },

    methods: { //Methods is used to define functions

        toggleShowPrices(){ //Change showPrices value
            this.showPrices = !this.showPrices

            this.color = this.color.split('').reverse().join('')//change background color
        }

    }

})