$(document).ready(function() {
let btn=document.querySelector('#btn');
btn.addEventListener('click',function(){

//Get pizza inputs
flavor=document.querySelector('#flavor').value;
toppings=document.querySelector('#toppings').value;
size=document.querySelector('#size').value;
quantity=document.querySelector('#quantity').value;

const order= new Pizza(flavor,toppings,size,quantity);
console.log(order);

});

});

// Store piza attributes
function Pizza(flavor ,toppings,size, quantity) {

  this.flavor = flavor;
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;

 }
