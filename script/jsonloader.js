let praktyki = {};
fetch("/public/praktyki.json")
    .then(response => response.json())
    .then(json => {
        Object.assign(praktyki,json)
    });


console.log(praktyki)
