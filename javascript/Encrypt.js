var Size=27,amount=0,num=0,pass=[],letter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],key=[],result=[],reverse=[];
document.getElementById("start").onclick=function(){
	var passUpper=document.getElementById("pass").value.toUpperCase();
	//alert(passUpper);
	for(var i=0;i<Size;i++){
		for(var j=0;j<Size;j++){
			if(passUpper[i]==key[j]){
				num+=1;
			}
		}
		if(num==0){
			key[amount]=passUpper[i];
			amount+=1;
		}
		num=0;
	}
    
	var count=key.length;
	for(var i=0;i<Size;i++){
		for(var j=0;j<Size;j++){
			if(letter[i]==key[j]){
				num+=1;
			}
		}
		if(num==0){
			key[count]=letter[i];
			count+=1;
		}
		num=0;
	}
    
    var orig=document.getElementById("proc").value.toUpperCase();
	if(document.getElementById("choice1").checked==true){
		for(var i=0;i<Size;i++){
			for(var j=0;j<27;j++){
  				if(orig[j]==' '){
					result[j]=' ';
				}              
				else if(letter[i]==orig[j]){
					result[j]=key[i];
				}

			}
		}
		document.getElementById("text").value=letter.join("")+"\n";
        document.getElementById("text1").value=key.join("")+"\n";
        document.getElementById("text2").value=result.join("")+"\n";
	}
    if(document.getElementById("choice2").checked==true){
		for(var i=0;i<Size;i++){
			for(var j=0;j<27;j++){
  				if(orig[j]==' '){
					reverse[j]=' ';
				}              
				else if(key[i]==orig[j]){
					reverse[j]=letter[i];
				}

			}
		}
		document.getElementById("text").value=letter.join("")+"\n";
        document.getElementById("text1").value=key.join("")+"\n";
        document.getElementById("text2").value=reverse.join("")+"\n";
	}
    
}
