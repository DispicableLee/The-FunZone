
document.addEventListener("DOMContentLoaded", (e)=>{
    const nameH1 = document.getElementById("name")
    const commentH1 = document.querySelector(".comment")
    const inventoryH2 = document.querySelector(".inventory")
    const imageImg = document.querySelector(".item")
    imageImg.src = 'shiitake-mushroom-thumbs-up-cartoon-illustration-mascot-149399926.jpg';
    const originH3 = document.querySelector(".origin")
    const priceH4 = document.querySelector(".price")
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
                    nameH1.innerText = name;
                    inventoryH2.textContent = inventory;
                    imageImg.src = image
                    originH3.textContent = origin;
                    priceH4.textContent = price;


                }
            })
        
    }
    // getDrugs();
//posting 

//=========================== "buy" event listener =====================================




})