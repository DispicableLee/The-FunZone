document.addEventListener("DOMContentLoaded", (e)=>{
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

    //add "purchase" event listener




})