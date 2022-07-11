

const restaurants = ["Malone's Bar & Grill", "Brick & Bourbon", "Crave", "Broadway Pizza", "Redstone", "Biaggi's", "Buca di Beppo", "3 Squares", "Famous Dave's", "Benihana", "Granite City Food & Brewery", "Pizza Karma", "Pittsburgh Blue", "P.F. Chang's", "Red Lobster"]


function restaurantGenerator() {
    const random = Math.floor(Math.random()*restaurants.length)
    alert(restaurants[random])
}

let restaurant = document.getElementById('restaurant')
restaurant.addEventListener('click', restaurantGenerator)