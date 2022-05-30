// Add the coffee to local storage with key "coffee"
//https://masai-mock-api.herokuapp.com/coffee/menu

async function getData() {
    const url = "https://masai-mock-api.herokuapp.com/coffee/menu"

    let res = await fetch(url);
    let data = await res.json();
    append(data.menu.data)
    console.log(data.menu.data)

}

getData();

let arr = JSON.parse(localStorage.getItem("coffee")) || [];

let total = arr.length;
console.log(total)

let count = document.getElementById("coffee_count")
count.innerText = total;
//console.log(total_item)

let menu = document.getElementById("menu");
function append(data) {
    data.forEach(function (el) {
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
        btn.innerText = "Add to Bucket";
        btn.setAttribute("id", "add_to_bucket");
        btn.addEventListener("click", function () {
            bucket(el)
        })

        div.append(img, title, price, btn);
        menu.append(div)

    })
}

function bucket(el) {
    console.log(el);
    arr.push(el);
    localStorage.setItem("coffee",JSON.stringify(arr));
    alert("add");
    window.location.reload()
}