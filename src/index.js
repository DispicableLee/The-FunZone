const info = document.getElementById("info-list")
const infoDisplayed = document.getElementById("info-displayed")
const displayName = document.getElementById("display-name")
const displayImage = document.getElementById("display-image")
const displayPrice = document.getElementById("display-price")
const displayInventory = document.getElementById("display-inventory")
const displayOrigin = document.getElementById("display-origin")
const form = document.querySelector(".form-info")
document.addEventListener("DOMContentLoaded", (e)=>{
    console.log(form)
    // ================================= json-server --watch db.json ===============================
    //=============================== getting drugs data
    function getDrugs(){
        fetch("http://localhost:3000/products")
        .then(res=> res.json())
        .then(json=>{
            for(let i = 0; i<json.length; i++){
//============================= setting constants from data ===================================
                const name = json[i].name;
                const nameCopy = name
                const price = json[i].price;
                const image = json[i].image;
                const inventory = json[i].inventory;
                const origin = json[i].Origin;
                console.log(origin)
//=========================== declaring html elements in DOM ============================
                const newLi = document.createElement("li")
                const nameH1 = document.createElement("h1")
                    nameH1.innerText = name;
//======================= info-displayed event listener =======================================
                nameH1.addEventListener("click", (e)=>{
                    e.preventDefault();
                    displayName.textContent = nameCopy;
                    displayImage.src = image
                    displayPrice.textContent = price
                    displayInventory.textContent = inventory
                    displayOrigin.textContent = origin
                })
                newLi.append(nameH1)
                info.append(newLi)

                }
            })
        
    }
    getDrugs();
//posting 

//=========================== "buy" event listener =====================================   
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            console.log("i have been clicked")
            alert("THIS IS THE DEA\r\nYou have been caught!")
        })



})


//=========================== "light/dark mode" evetn listener =====================================   
icon.addEventListener('click',(e) =>{
    e.preventDefault();
icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src ="images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}}
)

//comment