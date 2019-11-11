$(document).ready(function() {
  // prices
  function Pizza(flavor ,toppings,size, quantity) {

    this.flavor = flavor;
    this.toppings = toppings;
    this.size = size;
    this.quantity = quantity;

   }

let btn=document.querySelector('#order');
btn.addEventListener('click',function(){


//Get pizza inputs
flavor=document.querySelector('#flavor ').value;
toppings=document.querySelector('#toppings ').value;
size=document.querySelector('#size ').value;
quantity=document.querySelector('#quantity').value;
price = get_price();


const order= new Pizza(flavor,toppings,size,quantity,);
$("#order").click(
  function(){
    $("#payment").text(order.flavor);
    $("#payment1").text(order.toppings);
    $("#payment2").text(order.size);
    $("#payment3").text(order.quantity);
    $("#total").text(price);
  }
);



});

});

// Store piza attributes


 //price Function
 let small=500, medium=750, large= 950 ;
 let toppings =100;
 let get_price =() => {
   let price;
   if (size === "small"){
     price = small*quantity;
     //console.log(price);
     return price*quantity;
   }else if (size ==="medium"){
     price = medium *quantity;
     //console.log(price);
     return price*quantity;
   }else if(size === "large"){
     price = large*quantity;
    // console.log(price);

     return price ;
   }

  }
