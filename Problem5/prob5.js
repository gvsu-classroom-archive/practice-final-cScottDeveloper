
function submitNumber() {
    let xhttp = new XMLHttpRequest();
    //create obj for information to be put in and displayed
    let individualObj = {
      item: "",
      quantity: "",
      price: ""
    };
    let total = 0;
    let orderNum;
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
           let dataArray = JSON.parse(document.getElementById("informationDisplay").innerHTML = this.responseText);
           console.log(dataArray);
           //Clear innerHTML, might be a better way other than accessing DOM again
           let domRequest = document.getElementById("informationDisplay");
           domRequest.innerHTML = "";
           orderNum = document.getElementById("inputField").value;
           domRequest.innerHTML += "<h2>" + 'Order Number: ' + "<b>" + orderNum + "</b>" + "</h2>"
           //keep track of the item on the list for display, could also use id
           for (let i = 0; i < dataArray.length; i++){
               individualObj.item = dataArray[i].item;
               individualObj.quantity = dataArray[i].quantity;
               individualObj.price = dataArray[i].price;
               total += individualObj.price * individualObj.quantity;
               console.log("Total: " + total);
               //Use += to add to the current innerHTML each time instead of fully replacing it.
               domRequest.innerHTML += "<div id='informationBox'>" + "<br>" +
                   'Item: ' + individualObj.item + '<br>' +
                   'Quantity: ' + individualObj.quantity + "<br>" +
                   'Price: ' + individualObj.price + '<br></div>';
           }
           domRequest.innerHTML += "Total cost of items: " + total.toFixed(2) + '<br>';
        }
    };
    //get id for url request
    let id = document.getElementById("inputField").value;
    console.log("Id value: " + id);
    xhttp.open("GET", "https://www.cis.gvsu.edu/~kurmasz/Orders/" + id , true);
    xhttp.send();
}
