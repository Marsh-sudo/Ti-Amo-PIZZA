

function Pizza(flavour,crust,size,toppings,total) {
    this.flavour = flavour;
    this.crust = crust;
    this.size = size;
    this.toppings = toppings;
    this.total = total;
}

// user interface
$(document).ready(function() {
    $("button.Continue").click(function(event){
        event.preventDefault();

        var inputtedFlavour = $("#flavour option:selected").val();
        var inputtedSize = $("#size option:selected").val();
        var inputtedCrust = $("#crust option:selected").val();
        var inputtedToppings = $("input#top").val();
  
        inputValues(inputtedCrust,inputtedFlavour,inputtedSize,inputtedToppings)

    });
    
    switch(inputtedSize){
        case 'small':
          siCost = 850;
        break;
        case 'medium':
          siCost = 950;
        break;
        case 'large':
           siCost = 1050; 
        break;
        case 'x-large':
            siCost =  1500;  
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
    let inputtedToppings;
    switch(inputtedToppings){
        case 'bacon':
            toCost = 200;
            break;
        case 'sausage':
            toCost = 150;
            break;
        case 'onions':
            toCost = 50;
            break;
        case 'peppers':
            toCost = 50;           
    }

    // cost of everything
    let norm = 0;
    let totalCost = 0
    norm = toCost + siCost + CrCost;
    totalCost = norm + totalCost;
     
    $("#Orders").html(norm);
   



});
