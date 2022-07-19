let num1='';
let nums2='';
let operator='';
let total='';
let all='';
let p='';     // 554+
$(document).ready(function(){
    $('button').on('click', function(e){
        let btn = e.target.innerHTML;
        console.log(btn)
        if(btn>='0'&& btn<='9')
        {
            p+=btn;
            displayButton(all+p);
            
        }
        else{
            handleNumber(p);
            all+=p;       //5+2
            p='';
            handleOperator(btn);
        }
    });


});

function handleNumber(num)
{
    if(num1==="")
    {
        num1=num;
    }
    else{
        nums2=num;
    }
}

function handleOperator(oper){
    if(operator===""){
        operator=oper;
        displayButton(all+=oper);
    }
    else
    {
        handleTotal();
        operator=oper;
        if(oper!='Enter')
            displayButton(all+=oper);
        
    }
    
}


function handleTotal(){
    switch(operator){
        case '+': 
            total+= +num1 + +nums2; //convert string to int
            console.log(all)
            displayButton(total);
            break;
        case '-': 
            total+= +num1 - +nums2; //convert string to int
            displayButton(total);
            break;
        case '/': 
            total+= +num1 / +nums2; //convert string to int
            displayButton(total);
            break;
        case '*': 
            total+= +num1 * +nums2; //convert string to int
            displayButton(total);
            break;

    }
    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);

}

function updateVariables(){
    num1=total;
    all=total;
    num2="";
}











