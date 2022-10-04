const infoDisplayed = document.getElementById("info-displayed")
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
                
                    nameH1.innerText = name;
                    inventoryH2.textContent = inventory;
                    originH3.textContent = origin;
                    priceH4.textContent = price;


                }
            })
        
    }
    getDrugs();
//posting 

//=========================== "buy" event listener =====================================




})