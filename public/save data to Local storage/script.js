
// $(".button").click(function(){

//     $("ol").append(`<li>${$("#test").val()}</li>`);

//     $("#test").val("").focus();
// });




var textVal = document.getElementById("test");
// localStorage.setItem("name", textVal.value);
const x = localStorage.getItem("names");
if(x != null){
    const arr = JSON.parse(x);
    for(i=0; i< arr.length; i++){
        $("ol").append(`<li>${arr[i]}</li>`);

    }
}


$(".button").click(function(){
    const namesString = localStorage.getItem("names");
    const names = namesString != null ? JSON.parse(namesString) : [];
    names.push(textVal.value);
    localStorage.setItem("names", JSON.stringify(names));
    $("ol").append(`<li>${textVal.value}</li>`);

    $("#test").val("").focus();
});


