
 let idNumber = '0203154874532'
console.log(+idNumber.charAt(6) > 4 ? 'Male' : 'Female');

function IDChecker() {
    let IDText = document.getElementById("IdText")
     if (IDText.value.length >= 13 && isNaN(IDText) && +IDText.charAt(6) > 4 )    {
     document.getElementById("DoB").innerHTML = IDText.value
     document.getElementById("Gender").innerHTML = "Male"
     console.log(IDText.value.chartAt(6));
     }

    //  else if (IDText.value.length >= 13 && isNaN(IDText) &&)     {
    //     document.getElementById("DoB").innerHTML = IDText.value
    //     document.getElementById("Gender").innerHTML = "Male"
    //     }
   
    // 0000000000000


    }