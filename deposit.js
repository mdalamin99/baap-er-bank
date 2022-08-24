document.getElementById("btn-deposit").addEventListener("click",function(){
      
      const depositfield=document.getElementById("Deposit-field");
      const newdepositAmoundString=depositfield.value;
      const newDepositAmount=parseFloat(newdepositAmoundString);

      if (isNaN(newDepositAmount)) {
            alert('Please provide a valid number');
            return;
        }

      const depositTotalElement=document.getElementById("deposit-total");
      const previousdepositTotalString=depositTotalElement.innerText;
      const previousdepositTotal=parseFloat(previousdepositTotalString);

      const currentDepositTotal=previousdepositTotal+newDepositAmount;
      depositTotalElement.innerText=currentDepositTotal;

      // step-5
      const balanceTotalElemt=document.getElementById("Balance-total");
      const previousbalanceTotalString=balanceTotalElemt.innerText;
      const previousbalancetTotal=parseFloat(previousbalanceTotalString);
      
      // setp--6
      const currentbalanceTotale=previousbalancetTotal+newDepositAmount;

      balanceTotalElemt.innerText=currentbalanceTotale;
      depositfield.value='';
      
})