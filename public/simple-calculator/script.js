let oldText = "0";
function setValue(value) {
    if (oldText === "0") {
        // return oldText;
        $("#display").text(value);
        oldText = "" + value;
    }
    else if (oldText.length < 10) {
        // return oldText + value;
        $("#display").text(oldText + value);
        oldText = oldText + value;
    }
    console.log("expression ---- ", oldText)
};

function operandFloat(value) {
    const currentChar = $("#display").text().slice(-1);
    if (
        currentChar == '+' ||
        currentChar == '-' ||
        currentChar == '*' ||
        currentChar == '/'
    ) {
        return oldText;
    }
    else{
        setValue(value);
    }
}

function calculate() {
    try {
        let answer = eval(oldText);
        console.log(answer);
        $("#display").empty();
        $("#display").text(answer);
        oldText = "" + answer;
        
    } catch (e) {
        // console.error(e);
        console.error("NEEKU MATHS VACCHA");
    }
}

$(".seven").click(function () {
    setValue(7);
    if ($("#display").text() === "0") {
        return setValue(7);
    }
});

$(".eight").click(function () {
    setValue(8);
});

$(".nine").click(function () {
    setValue(9);
});

$(".four").click(function () {
    setValue(4);
});

$(".five").click(function () {
    setValue(5);
});

$(".six").click(function () {
    setValue(6);
});

$(".one").click(function () {
    setValue(1);
});

$(".two").click(function () {
    setValue(2);
});

$(".three").click(function () {
    setValue(3);
});

$(".zero").click(function () {

    if ($("#display").text() !== "0") {
        setValue(0);
    }

});

$(".clear").click(function () {
    // $("#display").empty();
    $("#display").text("0");
    oldText = "0";


});


$(".plus").click(function () {
    calculate();
    operandFloat("+");
    // if ($("#display").text().slice(-1) === "+, -, *, /") {
    //         return oldText;

    // }

});

$(".minus").click(function () {
    calculate();
    operandFloat("-");
});

$(".multiply").click(function () {
    calculate();
    operandFloat("*");
});

$(".devide").click(function () {
    calculate();
    operandFloat("/");
});

$(".dot").click(function () {
    // if($("#display").text():contains(".") == true){

    // }
    operandFloat(".");
});

$(".backSpace").click(function(){
    let text = $("#display").text();
    let result = text.slice(0, -1);
    $("#display").text(result);
    oldText = result;
});


$(".equalTo").click(calculate);

