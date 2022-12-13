console.log('client works');

////////////////////////onReady function/////////////////////////////////
$(document).ready(onReady);

function onReady() {
    $('#calcButton').on('click', takeInputs);
    $('#calcButtonTwo').on('click', clearFields);
    $('#plusButton').on('click', addition);
    $('#minusButton').on('click', subtraction);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
}

let operator = '';

function addition(){
    operator = '+';
    console.log(operator);
}

function subtraction(){
    operator = '-';
    console.log(operator);
}

function multiply(){
    operator = '*';
    console.log(operator);
}

function divide(){
    operator = '/';
    console.log(operator);
}

function takeInputs (){
    console.log('takeInputs works');
    postResult();
}

function clearFields (){
    console.log('clearFields works');
}
/////////////////////postResult function///////////////////////////////
function postResult(){
    console.log('postResult works');


    $.ajax({
        method: 'POST',
        url: '/calculationHistory',
        data: {
            num1: Number($('#numberInput').val()), 
            num2: Number($('#numberInputTwo').val()),
            operator: operator
        }
    }).then (function(response) {
        console.log('post response from server', response);
        getCalculations();
    }).catch (function(error) {
        console.log('error:', error);
        alert(error.responseText);

    });
}
///////////////////pulling the stuff back from the server///////////////////


function getCalculations(){
    $.ajax({
        method: 'GET',
        url: '/calculationHistory',
    }).then (function(response) {
        console.log('response from server',response);
    calcToDOM(response);
    
})}

function calcToDOM(calculationHistoryList){
    $('#result').empty();
    $('#result').append(`${calculationHistoryList[calculationHistoryList.length-1].result}`);
    
    $('#resultHistory').empty();
    for (equation of calculationHistoryList){
    $('#resultHistory').append(

            `${equation.num1}`
        //   CANT GET THE REST OF THE KEYS TO POPULATE TO DOM NO MATTER WHAT I TRY
        )}
    
}
// ${calculationHistoryList[0].num1} ${req.body.operator} ${req.body.num2} ${req.body.answer}

// calculationHistoryList.length-1

// $('#answer').append(`<h2>${history[history.length - 1].answer}</h2>`);

// Number($('#numberInput').val()) + Number($('#numberInputTwo').val());




// TODO:
// grab inputs from the field and make them usable to our logic / grab the operator
// write the logic/ send new information to the array 
// figure out how to append all that garbage to the dom 
// figure out how to make the now complete calculations happen in the server
// 