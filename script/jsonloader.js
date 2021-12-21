let praktyki = {};
fetch("/public/praktyki.json")
    .then(response => response.json())
    .then(json => {
        Object.assign(praktyki,json)
    });

    setTimeout(() => console.log(praktyki.praktyki[1]['tekst']), 1000)
