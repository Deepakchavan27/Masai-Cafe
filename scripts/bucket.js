// On clicking remove button the item should be removed from DOM as well as localstorage.

let arr = JSON.parse(localStorage.getItem("coffee")) || [];
//console.log(arr)

let cost = arr.reduce(function(sum,el,index,arr){
    return sum+Number(el.price);
},0);

total_amount.innerText = cost;

//console.log(cost)

let bucket = document.getElementById("bucket");

arr.forEach(function (el, index) {
    let div = document.createElement("div");
    div.setAttribute("id", "div")

    let img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("id", "img");

    let title = document.createElement("h3");
    title.innerText = el.title;
    title.setAttribute("class", "h3")

    let price = document.createElement("h4");
    price.innerText = el.price;
    price.setAttribute("class", "h3")

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id", "remove_coffee");
    btn.addEventListener("click", function () {
        coffee_remove(el, index)
    })

    div.append(img, title, price, btn);
    bucket.append(div)
})

function coffee_remove(el, index) {
    //console.log(el);
    arr.splice(el, 1);
    localStorage.setItem("coffee", JSON.stringify(arr));
    alert("remove");
    window.location.reload()
}

function checkout(){
    window.location.href = "./checkout.html"
}
