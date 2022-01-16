let total = 0;

function Pizza(flavour,crust,size,toppings,total) {
    this.flavour = flavour;
    this.crust = crust;
    this.size = size;
    this.toppings = toppings;
    this.total = total;
}

// user interface
$(document).ready(function() {
    $("form#pizza-option").submit(function(event){
        event.preventDefault();

        var inputtedFlavour = $("#flavour option:selected").val();
        var inputtedSize = $("#size option:selected").val();
        var inputtedCrust = $("#crust option:selected").val();


    })
    let inputtedSize;
    switch(inputtedSize){
        case 'small':
          cost = 850;
        break;
        case 'medium':
          cost = 950;
        break;
        case 'large':
           cost = 1050; 
        break;
        case 'x-large':
            cost =  1500;  
    }
    let inputtedCrust;
    switch(inputtedCrust) {
        case 'Gluten':
            CrCost = 150;
            break;
        case 'crispy':
            CrCost = 200;
            break;
        case 'stuffed':
            CrCost = 300;
            break;        
    }
})
