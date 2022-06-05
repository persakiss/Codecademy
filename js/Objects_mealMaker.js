let menu = {
    _meal: '',
    _price: 0,

    // Setter method takes a parameter
    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        } 
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },

    get todaysSpecial() {
       if(this._meal && this._price) {
           return("Today's Special is Spaghetti for $5!");
       };
       if(!this._meal || !this._price) {
           return("Meal or price as not set correctly!");
       };
    }
}

menu.meal = "Lasagna";
menu.price = 12;

// console.log(menu);

console.log(menu.todaysSpecial);