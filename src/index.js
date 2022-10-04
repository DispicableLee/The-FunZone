const info = document.getElementById("info-list")
const infoDisplayed = document.getElementById("info-displayed")
const displayName = document.getElementById("display-name")
const displayImage = document.getElementById("display-image")
const displayPrice = document.getElementById("display-price")
const displayInventory = document.getElementById("display-inventory")
const displayOrigin = document.getElementById("display-origin")
document.addEventListener("DOMContentLoaded", (e)=>{
    const form = document.querySelector(".form-info")
    console.log(form)
    // ================================= json-server --watch db.json ===============================
    //=============================== getting drugs data
    function getDrugs(){
        fetch("http://localhost:3000/products")
        .then(res=> res.json())
        .then(json=>{
            for(let i = 0; i<json.length; i++){
//============================= setting constants from data ===================================
                console.log(json[i])
                const name = json[i].name;
                const price = json[i].price;
                const image = json[i].image;
                const inventory = json[i].inventory;
                const origin = json[i].origin;
//=========================== declaring html elements in DOM ============================
                const newLi = document.createElement("li")
                const nameH1 = document.createElement("h1")
                    nameH1.innerText = name;
//======================= info-displayed event listener =======================================
                nameH1.addEventListener("click", (e)=>{
                    e.preventDefault();
                    displayImage.textContent = name
                    displayPrice.textContent = price
                })
                newLi.append(nameH1)
                info.append(newLi)

                }
            })
        
    }
    getDrugs();
//posting 

//=========================== "buy" event listener =====================================




})