document.getElementById("btn-withdraw").addEventListener("click",function(){
      const withdrawField=document.getElementById("withdraw-field");
      const withdrawFieldString=withdrawField.value;
      const withdrawTotallamound=parseFloat(withdrawFieldString);     
      withdrawField.value='';

      if (isNaN(withdrawTotallamound)) {
            alert('Please provide a valid number');
            return;
        }
     const withdrawBlance= document.getElementById("total-withdraw");
     const withdrawBlanceString=withdrawBlance.innerText;
     const totallwithdraw=parseFloat(withdrawBlanceString);
     
     const curentTotallwidthrow=totallwithdraw+withdrawTotallamound;
     withdrawBlance.innerText=curentTotallwidthrow;

    

    const minusBlance= document.getElementById("Balance-total");
     const minusBlanceString=minusBlance.innerText;
     const toTallminusBlane=parseFloat(minusBlanceString);
     
     if (withdrawTotallamound >toTallminusBlane) {
      alert('Baap er bank e eto taka nai');
      return;
  }
     const minus=toTallminusBlane-curentTotallwidthrow;
     minusBlance.innerText=minus;

      
})