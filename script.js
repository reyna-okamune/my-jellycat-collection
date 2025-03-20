const jellycatCards = document.getElementById("jellycat-cards");
const optionsDropdown = document.getElementById("jellycats-options");
const jellycatCollection = [
    {
        name: "cinnamon bun",
        type: "pastry",
        value: 0, 
        img: "jellycat-images/cinnamon_bun.png"
    },
    {
        name: "lemon",
        type: "fruit",
        value: 0,
        img: "jellycat-images/lemon.png"
    },
    {
        name: "ginger",
        type: "veggie",
        value: 0,
        img: "jellycat-images/ginger.png"
    }
]


// render cards functions
const setCards = (arr = jellycatCollection) => {
    jellycatCards.innerHTML += arr.map(({name, img, type, value}) => {

        return `
        <div class="card">
            <h2 class="jellycat-name">${name}</h2>
            <img src="${img}" alt="jellycat-img">
            <p class="jellycat-type">${type}-${value}</p>
        </div>
        `;
    }).join("");
};

// give each food item a random int value based on score
const generateValues = (arr = jellycatCollection) => {

    // score:
    // fruits: 10-18
    // veggies: 15-25
    // desserts: 8-12

    const min_fruit = 10;
    const max_fruit = 18;
    const min_veggies = 15;
    const max_veggies = 25;
    const min_desserts = 8;
    const max_desserts = 12;


    arr.forEach(function(jellycat)  {

        if (jellycat.type === "fruit") {
            jellycat.value = Math.floor(Math.random() * (max_fruit - min_fruit + 1)) + min_fruit;
        }
        else if (jellycat.type === "veggie") {
            jellycat.value = Math.floor(Math.random() * (max_veggies - min_veggies + 1)) + min_veggies;

        } 
        else if (jellycat.type === "pastry") {
            jellycat.value = Math.floor(Math.random() * (max_desserts - min_desserts + 1)) + min_desserts;
        }
        else {
            jellycat.value = 0;
        }

        console.log(`name: ${jellycat.name} jellycat value: ${jellycat.value}`);

    });
}

// render cards for the all collection (when page is loaded) & generate values
generateValues();
setCards();

// filter collection based on jellycat type
optionsDropdown.addEventListener("change", (e) => {
    jellycatCards.innerHTML = "";

    // do switch case to filter based on collection value

    switch (e.target.value) {
        case "fruits": 
            setCards(jellycatCollection.filter((jellycat) => jellycat.type === "fruit"));
            break;
        case "veggies":
            setCards(jellycatCollection.filter((jellycat) => jellycat.type === "veggie"));
            break;
        case "pastries":
            setCards(jellycatCollection.filter((jellycat) => jellycat.type === "pastry"));
            break;
        case "all": 
            setCards(jellycatCollection);
            break;

    }
})


