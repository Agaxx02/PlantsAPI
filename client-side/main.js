document.querySelector('button').addEventListener('click', getPlant)

async function getPlant(){
    try{
    let nazwaRosliny = document.querySelector('input').value
    const res = await fetch(`http://localhost:8000/api/rosliny/${nazwaRosliny}`)
    const data = await res.json()
    console.log(data)
    document.querySelector('#nazwa').innerText = `Nazwa : ${data['nazwa']}`
    document.querySelector('#wilgotnosc').innerText = `Wilgotność : ${data['wilgotnosc']}`
    document.querySelector('#kwitnienie').innerText = `Okres kwitnienia : ${data['kwitnienie']}`
    document.querySelector('#wysokosc').innerText = `Wysokość : ${data['wysokosc']}`
    document.querySelector('#gatunki').innerText = `Najpopularniejsze gatunki : ${data['gatunki']}`
    //document.querySelector('#zdjecie').img.src = `images/${nazwaRosliny}.jpg`

    }catch(err){
        console.log(err)
    }
}