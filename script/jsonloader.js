// let praktyki = {};
// fetch("/public/praktyki.json")
//     .then(response => response.json())
//     .then(json => {
//         Object.assign(praktyki,json)
//     });

//     setTimeout(() => console.log(praktyki.praktyki[1]['tekst']), 1000)

fetch("/public/praktyki.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.praktyki);
        console.log(Object.keys(data.praktyki).length);
        const quotwrap = document.getElementById('qwrap');
        for (let i = 0; i < Object.keys(data.praktyki).length; i++) {
            console.log(data.praktyki[i]);
            let head = document.createElement("h2");
            let quote = document.createElement("q");
            let author = document.createElement("p");
            let htekst = document.createTextNode("Dobra praktyka numer: ${i++}");
            
        }
    })