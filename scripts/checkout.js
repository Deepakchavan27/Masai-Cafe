


function checkout(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let add = document.getElementById("address").value;

    console.log(name, number, add)
    alert("Your order is accepted ")
    alert("Your order is being Prepared")
    alert("Your order is being packed")
    alert("Your order is out for delivery")
    alert("Order delivered")

}

