
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
    $("button.Continue").click(function(event){
        event.preventDefault();

        let inputtedFlavour = $("#flavour option:selected").val();
        let inputtedSize = $("#size option:selected").val();
        let inputtedCrust = $("#crust option:selected").val();
        let inputtedToppings = $("input#top").val();
  
       let siCost;
       let CrCost;
       let toCost;

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
        total = siCost + CrCost + toCost;
        let totalCost = 0;
        totalCost = totalCost + total;
         
        $("div.finalOutput").slideDown();
        
        $("#pflavour").html($("#flavour option:selected").val());
        $("#psize").html($("#size option:selected").val());
        $("#pcrust").html($("#crust option:selected").val());
        $("#pcost").html(total);
        console.log(total);
        
       

    });

    $("button#AnotherPizza").click(function(){
        
    })
    
});
