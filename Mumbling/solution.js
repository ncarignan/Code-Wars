function accum(s) {
	let joiner = [];
	let sArr = s.split("");
	for(let i=0; i< sArr.length+1; i++){
	  for(let j=0; j<i; j++){
	    if(j===0 & i===1){
	      joiner.push(sArr[i-1].toUpperCase());
	    }else if(j===0){
        joiner.push('-'+sArr[i-1].toUpperCase());
      }else{
      joiner.push(sArr[i-1].toLowerCase());
      }
	  }
	}
	return joiner.join("");
}
