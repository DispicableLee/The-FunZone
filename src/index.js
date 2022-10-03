
document.addEventListener("DOMContentLoaded", (e)=>{
    const nameH1 = document.getElementById("name")
    const commentH1 = document.getElementById("comment")
    const inventoryH2 = document.getElementById("inventory")
    const originH3 = document.getElementById("origin")
    const priceH4 = document.getElementById("price")
    const form = document.getElementById("form-info")
    console.log(form)
// ================================= json-server --watch db.json ===============================
//=============================== getting drugs data
    function getDrugs(){
        fetch("http://localhost:3000/My-Favorite-Drugs")
            .then(res=> res.json())
            .then(json=>{
                console.log(json)
            })
        
    }
    getDrugs();
//posting 

//=========================== "buy" event listener =====================================




})