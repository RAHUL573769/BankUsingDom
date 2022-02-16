
 let withdrawValue=document.getElementById('withdraw-value');
 let withdrawOutput=document.getElementById('withdraw-output');
 
 let  depositValue=document.getElementById('deposit-value');
 let depositOutput=(document.getElementById('deposit-output'));

 let balanceOutput=document.getElementById('balance-output');


 function deposit(){
     
   
  
  const totalDepositAmpount= addMoney(depositOutput.innerText, depositValue.value);
  
  depositOutput.innerText=totalDepositAmpount;
  balanceOutput.innerText=totalDepositAmpount;
  depositValue.value='';
  
  
  
  
  
  }

 function addMoney(amountOne,amountTwo){

return Number(amountOne)+Number(amountTwo);


}

function substractMoney(amountThree,amountFour){
    return Number(amountFour)-Number(amountThree);
}



function withdraw(){
 

const totalWithdrawAmount=addMoney(withdrawOutput.innerText,withdrawValue.value);
withdrawOutput.innerText=totalWithdrawAmount;

const substactAmount=substractMoney(withdrawValue.value,balanceOutput.innerText)

balanceOutput.innerText=substactAmount;


    withdrawValue.value='';
}

