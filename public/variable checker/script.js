$("button").click(function(){
    let x = checkingVariable($("#name").val());
    $("#result").text(x);
});



checkingVariable = function(input){
    let failedstring = false;
    if(
        (input.charCodeAt(0) >= 97 && input.charCodeAt(0)<= 122) || 
        (input.charCodeAt(0) >= 65 && input.charCodeAt(0)<= 90) ||
        input[0] == '_' ||
        input[0] == '$' 
    ){
        for(let i = 1; i < input.length; i++){

            let binaryCode = input.charCodeAt(i);
            console.log(binaryCode);
            if((binaryCode >= 97 && binaryCode<= 122) || 
                (binaryCode >= 65 && binaryCode<= 90) ||
                binaryCode == 36 ||
                binaryCode == 95 ||
                (parseInt(input[i]) >= 0 && parseInt(input[i]) <= 9) 
                ){
            }else{
                failedstring = true;
                break;
            }
        }
        if(failedstring){
            return 'Not a valid variable name.';
       }
       else{
        return 'Entered variable name is valid.';
       }
    }
    else{
        return 'Not a valid variable name.';        
    }
    
}
// console.log(checkingVariable(input));
