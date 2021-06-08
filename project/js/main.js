
/* 
the first data dype is 
boolean : true , false .
array : [].
object {firstname: "omar" lastname: "mohamed"}
string: "javascript"

conditional operatores
     ( = ) assignment operators ( not comprision but define a variable).
     ( == ) comprision operators (play on value only).
     ( === ) identity operators (play on value and data type).

logical operatores 
     ( != ) not comprsion operators (play on value only).
     ( !== ) not indentity operatores (play on value and data type).
     ( && ) And.
     ( || ) OR

     onload , onclick , ondblclick , onkeyup , onkeydown , onkeypress .

 */ 
     var 
          myButton = document.getElementById("myBtn");
          myInput = document.getElementById("input");
          mySelector = document.getElementById("selector");

     //start variable deffiened
     myButton.onclick = function one() {
          var pound , result;
          pound = document.getElementById("input");
          result = pound.value * mySelector.value ;
          document.getElementById("test").innerHTML = result;
          
     }
     mySelector.onchange = function two() {
          var pound , result;
          pound = document.getElementById("input");
          result = pound.value * mySelector.value ;
          document.getElementById("test").innerHTML = result;
          
     }