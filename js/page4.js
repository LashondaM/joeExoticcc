var posts = [{
    title: 'Blankets',
    picture: 'https://www.dhresource.com/0x0/f2/albu/g3/M01/83/88/rBVaHVYgdIeAILLsAAZtG3wNVEM855.jpg',
    post: '$15.00'
},

{
    title: 'Shirts',
    picture: 'https://cdn.shopify.com/s/files/1/1527/5153/products/Adult_T-shirt_and_Baby_T-Shirt_combo_Flat_1_grande.jpg?v=1557785195',
    post: '$50.00'
},

{
    title: 'Hats',
    picture: 'https://www.dhresource.com/600x600/f2/albu/g9/M00/BB/24/rBVaVV3zW0mAN0GjAAFrVv9Tw6A144.jpg',
    post: '$7.99'
}

]


var postHTML = ''
for(var i = 0; i < posts.length; i++) {
    var heading = "<div class='post'><h2>"+posts[i].title+"</h2>";
    var image = '<a href="#"><img src=' +posts[i].picture + '></img></a>'
    var body = "<p>"+posts[i].post+"</p></div>";
    var concatThis = heading + image +'<br>' + body;
    postHTML += concatThis;
};

console.log(postHTML);

document.getElementById("merch").innerHTML = postHTML;