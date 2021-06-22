fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var drinks = data.drinks
        console.log(drinks)
        drinks.forEach(function (drink) {
            console.log(drink.strDrinkThumb)
            var image = document.createElement('img')
            image.src = drink.strDrinkThumb
            document.body.appendChild(image)

            var div = document.createElement('div')
            div.innerHTML += drink.strDrink
            document.body.appendChild(div)

            var br = document.createElement('br')
            document.body.appendChild(br)
        })
    })