const info = document.getElementById("info-list")
const infoDisplayed = document.getElementById("info-displayed")
const displayName = document.getElementById("display-name")
const displayImage = document.getElementById("display-image")
const displayPrice = document.getElementById("display-price")
const displayInventory = document.getElementById("display-inventory")
const displayOrigin = document.getElementById("display-origin")
const form = document.querySelector(".form-info")
const itemForm = document.querySelector('.item-form')
const newAmount = document.querySelector('#quantity')
const currentAmount = document.querySelector("#amount-x")
document.addEventListener("DOMContentLoaded", (e) => {
    console.log(form)
    // ================================= json-server --watch db.json ===============================
    //=============================== getting drugs data

    fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => getDrugs(data))

    //============================= setting constants from data ===================================
    function getDrugs(drug) {
        drug.forEach((drugs) => {
            const name = drugs.name;0
            const nameCopy = name
            const price = drugs.price;
            const image = drugs.image;
            const inventory = drugs.inventory;
            const origin = drugs.Origin;
            console.log(origin)
            //=========================== declaring html elements in DOM ============================
            const newLi = document.createElement("li")
            const nameH1 = document.createElement("h1")
            nameH1.innerText = name;
            //======================= info-displayed event listener =======================================
            nameH1.addEventListener("click", (e) => {
                e.preventDefault();
                displayName.textContent = `Name: ${nameCopy}`;
                displayImage.src = image
                displayPrice.textContent = `Price: $${price}`
                displayInventory.textContent = `Inventory: ${inventory}`
                displayOrigin.textContent = `Origin: ${origin}`
            })
            newLi.append(nameH1)
            info.append(newLi)

        })
    }
})


//posting 

//=========================== "buy" event listener =====================================   
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("i have been clicked")
    alert("THIS IS THE DEA\r\nYou have been caught!")
})
//============================ new-drugs-form event listener ==============================
const newDrugsForm = document.getElementById("new-drugs-form")
newDrugsForm.addEventListener("submit", (e)=>{
    e.preventDefault()
//====================== creating constants from form ================================
    const newDrugName = e.target["name"].value
    const newDrugImage = e.target["image"].value
    const newDrugPrice = e.target["price"].value
    const newDrugInventory = e.target["inventory"].value
    const newDrugOrigin = e.target["origin"].value
//=================================== configObj ========================================
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify({
            "name": newDrugName,
            "price": newDrugPrice,
            "image": newDrugImage,
            "inventory": newDrugInventory,
            "origin": newDrugOrigin
        })

    }
//====================================== fetch ========================================
    fetch("http://localhost:3000/products", configObj)
    .then(res=>res.json())
    .then(console.log)

})





//=========================== "light/dark mode" event listener =====================================   
icon.addEventListener('mouseover', (e) => {
    e.preventDefault();
    icon.onmouseover = function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            icon.src = "images/sun.png";
        } else {
            icon.src = "images/moon.png";
        }
    }
}
)
//=========================== "Add to Cart Event Listener"=====================================
 itemForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const newAmount = e.target.quantity.value
  const newAmountInteger = parseInt(newAmount)
  const currentAmountString = currentAmount.textContent
  const currentAmountInteger = parseInt(currentAmountString)
  console.log(parseInt(newAmountInteger)+ parseInt(currentAmountInteger))
  currentAmount.textContent = newAmountInteger
 



 //debugger;

 })