$(document).ready(function() {
  // prices
  let small=500, medium=750, large= 950 ;
let btn=document.querySelector('#order');
btn.addEventListener('click',function(){


//Get pizza inputs
flavor=document.querySelector('#flavor').value;
toppings=document.querySelector('#toppings').value;
size=document.querySelector('#size').value;
quantity=document.querySelector('#quantity').value;

const order= new Pizza(flavor,toppings,size,quantity,price);
$("#order").click(
  function(){
    $("#payment").text(order.flavor);
    $("#payment1").text(order.toppings);
    $("#payment2").text(order.size);
    $("#payment3").text(order.quantity);
  }
);



});

});

// Store piza attributes
function Pizza(flavor ,toppings,size, quantity) {

  this.flavor = flavor;
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;

 }
 Pizza.prototype.fullOrder= function(){
   return this.flavor + "," +this.toppings + "," + this.size + "," +this.quantity;
 }
 function price(small,medium,large) {

   this.small = small;
   this.toppings = medium;
   this.size =large;
  }
