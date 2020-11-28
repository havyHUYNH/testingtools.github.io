
//=================================Variables scope===================================
var inputData, outputData;
var textareaLength, textareaStartbyte, textareaEndbyte;
var inputDataArr,inputDataStr ;
var temp;
var length, startByte, endByte;



//=================================End=============================================

//=================================Get element by ID scope===================================
textareaLength = document.getElementById('length');
textareaStartbyte = document.getElementById('startByte');
textareaEndbyte = document.getElementById('endByte');
//=================================End=============================================

//=================================Give data from file scope===================================
var input = document.querySelector('input') 
var textarea = document.querySelector('textarea')

input.addEventListener('change', () => { 
	var files = input.files; 

	if (files.length == 0) return; 

	const file = files[0]; 

	var reader = new FileReader(); 
	reader.onload = (e) => { 
		const file = e.target.result; 
		const lines = file.split(/\r\n|\n/); 
        textarea.value = lines.join('\n'); 
        // console.log(textarea.value);
        inputDataStr = textarea.value;
        inputDataArr = inputDataStr.split(" ");
        // console.log(inputDataArr);
        // temp = inputDataArr.slice(textareaStartbyte.value,endByte+1);
        //console.log();
        // var resultOutput = document.getElementById('resultOutput');
        // resultOutput.textContent = temp;

	}; 

	reader.onerror = (e) => alert(e.target.error.name); 
	reader.readAsText(file); 
}); 
console.log("this is ");
console.log(temp);
//=================================End=======================================================
function showTableData() {
    document.getElementById('info').innerHTML = "";
    var myTab = document.getElementById('empTable');

    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 1; i < myTab.rows.length; i++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;

        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < objCells.length; j++) {
            info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
        }
        info.innerHTML = info.innerHTML + '<br />';     // ADD A BREAK (TAG).
    }
}

//=================================For conditions scope===================================
var resultLength = document.getElementById('resultLength');
var resultStartbyte = document.getElementById('resultStartByte');
var resultEndbyte = document.getElementById('resultEndByte');

function updateResult() {
    resultLength.textContent = textareaLength.value;
    resultStartbyte.textContent = textareaStartbyte.value;
    resultEndbyte.textContent = textareaEndbyte.value;
}

textareaLength.onkeyup = updateResult;
textareaStartbyte.onkeyup = updateResult;
textareaEndbyte.onkeyup = updateResult;
//=================================End=======================================================

function outputString(){

    
    var inputDataArr = textarea.value;
    inputDataArr = inputDataStr.split(" ");
    endByte = parseInt(textareaEndbyte.value);
    temp = inputDataArr.slice(textareaStartbyte.value,endByte + 1);
    var resultOutput = document.getElementById('resultOutput');
    resultOutput.textContent = temp;

}
