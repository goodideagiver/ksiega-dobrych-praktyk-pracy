let praktyki = {};
fetch("/public/praktyki.json")
    .then(response => response.json())
    .then(json => {
        praktyki = json
        console.log(praktyki['praktyki']['1']['tekst'])
        return praktyki
    });

    //superHeroes['members'][1]['powers'][2]