async function fetchHandler() {
    try {
        const response = await fetch('http://hp-api.herokuapp.com/api/characters/house/hufflepuff', {
            'method': 'GET',
        });
        let data = await response.json();
        console.log(data)

        data.forEach((element, index) => {
            if (element.image === "") {
                delete data[index]

            }
        })
        data = data.filter(function (el) {
            return el !== undefined
        })

        console.log(data)

        data.forEach((current) => {
            const cards = document.querySelector(".heroes");
            const template = document.querySelector("#template");
            const newCardPopUp = template.content.cloneNode(true);


            const popUpBasketImage = newCardPopUp.querySelector(".image-hero");

            const popUpCardTitle = newCardPopUp.querySelector(".name-hero");


            popUpCardTitle.textContent = current.name;
            popUpBasketImage.src = current.image;

            cards.appendChild(newCardPopUp)


        })

    } catch (error) {
        console.log(error);
    }
}

fetchHandler()