﻿const number = {
	0: "□ ■ ■ ■ □\n■ □ □ □ ■\n■ □ □ □ ■\n■ □ □ □ ■\n□ ■ ■ ■ □",
	
	1: "□ ■ ■ □ □\n□ □ ■ □ □\n□ □ ■ □ □\n□ □ ■ □ □\n□ ■ ■ ■ □",
	
	2: "■ ■ ■ ■ ■\n□ □ □ □ ■\n■ ■ ■ ■ ■\n■ □ □ □ □\n■ ■ ■ ■ ■",
	
	3: "■ ■ ■ ■ ■\n□ □ □ □ ■\n■ ■ ■ ■ ■\n□ □ □ □ ■\n■ ■ ■ ■ ■",
	
	4: "■ □ □ ■ □\n■ □ □ ■ □\n■ ■ ■ ■ ■\n□ □ □ ■ □\n□ □ □ ■ □",
	
	5: "■ ■ ■ ■ ■\n■ □ □ □ □\n■ ■ ■ ■ ■\n□ □ □ □ ■\n■ ■ ■ ■ ■",
	
	6: "■ ■ ■ ■ ■\n■ □ □ □ □\n■ ■ ■ ■ ■\n■ □ □ □ ■\n■ ■ ■ ■ ■",
	
	7: "■ ■ ■ ■ ■\n■ □ □ □ ■\n□ □ □ □ ■\n□ □ □ □ ■\n□ □ □ □ ■",
	
	8: "■ ■ ■ ■ ■\n■ □ □ □ ■\n■ ■ ■ ■ ■\n■ □ □ □ ■\n■ ■ ■ ■ ■",
	
	9: "■ ■ ■ ■ ■\n■ □ □ □ ■\n■ ■ ■ ■ ■\n□ □ □ □ ■\n■ ■ ■ ■ ■"
}

const out = numbers => {
	const numberArray = String(numbers).split("");
	for(let i = 0; i < numberArray.length; i++) {
		console.log(number[numberArray[i]]);
	}
}



