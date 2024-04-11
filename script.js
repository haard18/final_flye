document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const annualIncome = document.getElementById('annualIncome').value 
        const extraIncome = document.getElementById('extraIncome').value ;
        const ageGroup = document.getElementById('age').value;
        const deduction = document.getElementById('deduction').value
        console.log("DONE")
        let iconage=document.querySelector('.icon-container-age i');
        if(ageGroup=='none'){
            alert("Select a valid age group");
            iconage.style.display=='block';
            return;
        }
        else{
            iconage.style.display=='none';
        } 

        
        let alertDivannualincome = document.querySelector('.alertAnnualIncome');
        let alertDivextraincome = document.querySelector('.alertextraIncome');
        let alertDivdeduction = document.querySelector('.alertDeduction');
        let iconannual=document.querySelector('.icon-container-annual i');
        let iconextra=document.querySelector('.icon-container-extra i');
        let iconDeduction = document.querySelector('.icon-container-deduction i')
        
        if (!isNumeric(annualIncome)) {
            // alertDivannualincome.style.display = "block";
            iconannual.style.display='block'
            return; // Exit the function if validation fails
        }
        else {
            alertDivannualincome.style.display = 'none';
            iconannual.style.display='none'

        }
        if (!isNumeric(extraIncome)) {
            iconextra.style.display='block';
            // alertDivextraincome.style.display = 'inline';
            return;
        }
        else {
            iconextra.style.display='none';
            alertDivextraincome.style.display = 'none';
            
        }
        if (!isNumeric(deduction)) {
            iconDeduction.style.display='block';
            // alertDivextraincome.style.display = 'inline';
            return;
        }
        else {
            iconDeduction.style.display='none';
            alertDivdeduction.style.display = 'none';
        }
        // if(!isNumeric(deduction)){
        //     alertDivdeduction.style.display='block';
        //     return;
        // }
        // else{
        //     alertDivdeduction.display='none';
        // }
        let tax = 0;
        let taxRate = 0;
        const netIncome = parseFloat(annualIncome) + parseFloat(extraIncome) - parseFloat(deduction);
        console.log(netIncome);
        if (netIncome > 800000) { // Only calculate tax if net income is over 8 Lakhs

            if (ageGroup <= 40) {
                taxRate = 0.30;
            } else if (ageGroup >= 40 && ageGroup < 60) {
                taxRate = 0.40;
            } else if (ageGroup >= 60) {
                taxRate = 0.10;
            }
        }
        console.log(taxRate);
        tax = (netIncome) * taxRate;
        console.log(`Calculated Tax: ${tax}`);
        let incomeAfterTax = netIncome - tax;

        // Update the tax amount in the span and display the result
        document.getElementById('taxAmount').textContent = incomeAfterTax.toFixed(2);
        document.getElementById('taxResult').style.display = 'flex';
        document.getElementById('taxResult').style.justifyContent='center';
        document.getElementById('taxResult').style.alignItems='center';

        // Close button functionality
        document.getElementById('closeButton').addEventListener('click', function () {
            document.getElementById('taxResult').style.display = 'none';
        });
        // Function to check if a value is numeric
        function isNumeric(value) {
            return /^\d+$/.test(value);
        }
    })
})
