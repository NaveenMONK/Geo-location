const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');
const openMap = document.querySelector('.g-maps');

btn.addEventListener('click',() =>{
    navigator.geolocation.getCurrentPosition(getPosition);
});

function getPosition(position) {
    userLocation.innerHTML = `
    Latitude:${position.coords.latitude},
    Longitude:${position.coords.longitude};
    `    

    openMap.style.visibility = 'visible';
    openMap.href = `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z`
    openMap.innerHTML = "Click here for Google Maps"
    
}