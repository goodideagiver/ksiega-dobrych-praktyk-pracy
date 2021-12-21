fetch("/public/praktyki.json")
    .then(response => response.json())
    .then(jsondata => console.log(jsondata['praktyki']));