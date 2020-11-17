var prices = [15, 45, 1234, 65, 122, 555];
document.getElementById("test").innerHTML = prices;
 
function myFunction() {
   var result = prices.filter(price => price < 100);
   document.getElementById("test").innerHTML = result;
}