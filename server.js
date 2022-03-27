const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


let rosliny = {
    'nieznane': {
        'nazwa' : 'nieznane',
        'wilgotnosc': 'nieznane',
        'kwitnienie': 'nieznane',
        'wysokosc': 'nieznane',
        'gatunki': 'nieznane',
    },
    'cyklamen': {
        'nazwa' : 'Cyklamen',
        'wilgotnosc': 'Gleba stale wilgotna',
        'kwitnienie': 'I, II, III, X, XI, XII',
        'wysokosc': 'do 40 cm',
        'gatunki': 'Perski, europejski,neapolitański, bluszczolistny, dyskowaty, libański',
    },
    'kalatea': {
        'nazwa' : 'Kalatea lub Ostrzeszyn',
        'wilgotnosc': 'Gleba umiarkowanie wilgotna',
        'kwitnienie': 'IV, V',
        'wysokosc': 'do 60 cm',
        'gatunki': 'Crocata, makoyana, ornata, roseopicta, lubbersii, insignis, zebrina',
    }, 
    'anturium': {
    'nazwa' : 'Anturium',
    'wilgotnosc': 'Gleba stale wilgotna',
    'kwitnienie': 'II, III, IV, V, VI',
    'wysokosc': 'do 70 cm',
    'gatunki': 'Alaska, Fantasia, Avo-Margaretha, Champion, Acropilis, Carre, Summer love, red love, Mirabile Spadix',
    },
    'gwiazda betlejemska': {
        'nazwa' : 'Gwiazda betlejemska lub Euphorbia pulcherrima lub wilczomlecz nadobny/poinsecja',
        'wilgotnosc': 'Gleba umiarkowanie wilgotna',
        'kwitnienie': 'XI, XII, I, II, III',
        'wysokosc': 'do 3 metrów',
        'gatunki': 'Autumn Leaves, Christmas Aurora, Christmas Beauty Nostalgia, Ice Punch, Maxima, Mira White, Premium Ice Crystal, Premium Picasso',
    },

}
    
app.listen(process.env.PORT || PORT)
app.use(cors())

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/rosliny/:nazwaRosliny', (req,res) => {
    const nazwaRosliny = req.params.nazwaRosliny.toLowerCase()
    if(rosliny[nazwaRosliny]){
        res.json(rosliny[nazwaRosliny])
    }else {
        res.json(rosliny['nieznane'])
    }
})