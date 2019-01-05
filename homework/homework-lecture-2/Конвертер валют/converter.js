    
    // Script: convertion currency in both directions (Gryvnia & Dollars)
    
    var ask1 = confirm('Do you want to convert Gryvnias to Dollars?');
    if (ask1) {
        var inputSumInGryvnias = Number(prompt('Input your sum in Gryvnia!'));
            if (isNaN(inputSumInGryvnias)) {
                alert('Please, restart the page and input numbers only!');
                throw new Error();    
            }
        var resultInDollars = (inputSumInGryvnias / 27.62).toFixed(2);
        alert('Your sum is ' + resultInDollars + ' dollars');
        
    } else {
        var ask2 = confirm('Do you want to convert Dollars to Gryvnias?');
    
        if (ask2) {
            var inputSumInDollars = Number(prompt('Input your sum in Dollars!'));
            if (isNaN(inputSumInDollars)) {
                alert('Please, restart the page and input numbers only!');
                throw new Error();
                
            }

            var resultInGryvnias = (inputSumInDollars * 27.62).toFixed(2);
            alert('Your sum is ' + resultInGryvnias + ' Gryvnias');
        } else {
            alert('Sorry! We can not help You with other types of Currency!')
        }
    } 
    
    