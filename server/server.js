const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'))
app.use(express.urlencoded());

app.listen(port, () => {
    console.log('listening on port, ', port);
});
///////////////////stuff from client///////////////////
let calculationHistoryList = [];
let answer;
let newEquation;
app.post('/calculationHistory',(req,res)=> {
    console.log('da body(da post)',req.body);
    // let operator = req.body.operator

    if (req.body.operator === '+'){
         answer = Number((req.body.num1)) + Number(req.body.num2);
        newEquation = {
            num1: Number((req.body.num1)),
            operation: req.body.operator,
            num2: Number((req.body.num2)),
            equals: '=',
            result: answer,
        }
    } 
        else if (req.body.operator === '-'){
            answer = Number((req.body.num1) - Number(req.body.num2));
            newEquation = {
                num1: Number((req.body.num1)),
                operation: req.body.operator,
                num2: Number(req.body.num2),
                equals: '=',
                result: answer,
        }
    }
        else if (req.body.operator === '*'){
                answer = Number((req.body.num1)) * Number((req.body.num2));
                newEquation = {
                    num1: Number(req.body.num1),
                    operation: req.body.operator,
                    num2: Number(req.body.num2),
                    equals: '=',
                    result: answer,
                }
            }
        else if (req.body.operator === '/'){
                    answer = Number((req.body.num1)) / Number((req.body.num2));
                    newEquation = {
                        num1: Number((req.body.num1)),
                        operation: req.body.operator,
                        num2: Number((req.body.num2)),
                        equals: '=',
                        result: answer,
                    }
                }
    console.log('answer:', answer);
    calculationHistoryList.push(newEquation);
    console.log('the list:',calculationHistoryList);
    console.log('newEquation:',newEquation);
    res.sendStatus(200);
});

app.get('/calculationHistory', (req,res)=> {
    console.log('we dun did got to get calculation history');
    res.send(calculationHistoryList);

    
});



//     console.log('newEquation works', newEquation);
// }
// $('#answer').empty();
// $('answer').append(answer);
