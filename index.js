[10] === 10    // is false
[10]  == 10    // is true
'10' == 10     // is true
'10' === 10    // is false
 []   == 0     // is true
 [] ===  0     // is false
 '' == false   // is true but true == "a" is false
 '' ===   false // is false 
 var arr = ["a", "b", "c"];
typeof arr;   // return "object" 
arr  instanceof Array // true
arr.constructor();  //[]
(function(){
    // some private code that will be executed automatically
})();  
(function(a,b){
    var result = a+b;
    return result;
})(10,20)
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];

var  randomItem = items[Math.floor(Math.random() * items.length)];
