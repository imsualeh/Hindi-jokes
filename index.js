const fnbtnEl = document.getElementById('fnbtn');
const fnjokeEl = document.getElementById('fnjoke');
const btnEl = document.getElementById('btn');


const apiURL = "https://hindi-jokes-api.onrender.com/jokes?api_key=ffd1002adf9b87ab79fe4479ca51";

const options = {

    method : "GET",
}
async function gethindijoke(){
    try {
        fnjokeEl.innerText = "Loading...";
    fnbtnEl.disabled = true;
    fnbtnEl.innerText = "Updating...";
    const resp = await fetch(apiURL, options);
    const hdata = await resp.json();

    fnbtnEl.disabled = false;
    fnbtnEl.innerText = "Tell me a funny joke";
    fnjokeEl.innerText = hdata.jokeContent;
    } catch (error) {
        fnjokeEl.innerText = "you are offline. please connect the internet and try again."
        fnbtnEl.disabled = false;   
        fnbtnEl.innerText = "tell me a funny joke";    
    }
    
}

fnbtnEl.addEventListener('click', gethindijoke);

//user-defined function to open and share web content on WhatsApp
function openWhatsApp() {
	window.open('whatsapp://send?text= https://www.youtube.com/watch?v=ohpCMpderow');
    
    }

    btnEl.addEventListener('click', openWhatsApp);