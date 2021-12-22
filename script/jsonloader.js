// let praktyki = {};
// fetch("/public/praktyki.json")
//     .then(response => response.json())
//     .then(json => {
//         Object.assign(praktyki,json)
//     });

//     setTimeout(() => console.log(praktyki.praktyki[1]['tekst']), 1000)

fetch("public/praktyki.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        //console.log(data.praktyki);
        //console.log(Object.keys(data.praktyki).length);
        const quotwrap = document.getElementById('qwrap');
        for (let i = 0; i < Object.keys(data.praktyki).length; i++) {
            //console.log(data.praktyki[i]['tekst']);
            let head = document.createElement("h2");
            nr = i+1;
            let htekst = document.createTextNode("Dobra praktyka numer: " + nr);
            let quote = document.createElement("q");
            let qtekst = document.createTextNode(data.praktyki[i]['tekst'])
            let author = document.createElement("p");
            let atekst = document.createTextNode(data.praktyki[i]['autor'])
            let el = [head,quote,author]
            let te = [htekst,qtekst,atekst]
            let divq = document.createElement("div")
            for (let j = 0; j < el.length; j++) {
                el[j].appendChild(te[j]);
                divq.appendChild(el[j]);
                divq.classList.add('quote-item','hl');
                quotwrap.appendChild(divq);
            }
        }
        const quotes = document.querySelectorAll('.quote-item');
        quotes[0].classList.toggle('hl');
        function nextQuote() {
            if (!(quotes[quotes.length-1].classList.contains('hl'))) {
                resetQuotes();
                return;
            }
            for (let i = 0; i < quotes.length; i++) {                
                if (!(quotes[i].classList.contains('hl'))) {                    
                    quotes[i+1].classList.toggle('hl');
                    quotes[i].classList.toggle('hl');
                    break;
                }
            }
        }

        function resetQuotes() {
            for (let i = 0; i < quotes.length; i++) {
                quotes[i].classList.add('hl');
            }
            quotes[0].classList.toggle('hl');
        }
        
        document.getElementById('next').addEventListener("click",nextQuote)
    })