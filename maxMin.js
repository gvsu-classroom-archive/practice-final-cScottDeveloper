function Calculate(){
    let numberArray = document.getElementsByClassName("valueBox");
    for(let i = 0; i < numberArray.length; i++){
        console.log("Num Array: " + numberArray[i].value);
    }
    let max = 0;
    let min = numberArray[0].value;
    let avg;
    let total = 0;

    let n = numberArray.length;
    for(let i = 0; i < numberArray.length; i++){
        let currNumber = parseInt(numberArray[i].value);
        if(isNaN(currNumber)){
            currNumber = 0;
        }
        if(max < currNumber){
            max = currNumber;
        }
    }
    for(let i = 0; i < numberArray.length; i++){
        let currNumber = parseInt(numberArray[i].value);
        if(isNaN(currNumber)){
            currNumber = 0;
        }
        if(min > currNumber){
            min = currNumber;
        }
    }
    for(let i = 0; i < numberArray.length; i++){
            total += parseInt(numberArray[i].value);
            if(isNaN(total)){
                alert("Please enter a number, " +
                    "or deal with this alert box, your choice " + String.fromCodePoint(0x1F609));
            }
    }
    avg = total/n;
    document.getElementById("max").innerHTML = max.toString();
    document.getElementById("min").innerHTML = min.toString();
    document.getElementById("average").innerHTML = avg.toString();
    }

    function makeInputs(){
        let inputList = document.getElementById("input-list");
        for (let i = 0; i < 10; i++) {
            inputList.innerHTML += '<input class="valueBox" type="number">';
        }
    }

