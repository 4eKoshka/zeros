module.exports = function getZerosCount(number) {
  var a;
  var z=0;
  var temp;
   
      
  for(var a=1;a<=number; a++){
	   if(a%5 === 0) {
		   temp = a;
		   while (temp % 5 == 0) {
			   z++;
			   temp = temp/5;
		   }
	   }
  }
  
    
  return z;
  
  // your implementation
}
