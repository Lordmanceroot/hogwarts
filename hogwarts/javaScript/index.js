async function fetchHandler(url) {
    try {
        const response = await fetch(url, {
            'method': 'GET',
        });
        let data = (await response.json()).filter(el => el.image);

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

