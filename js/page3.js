// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })


var posts = [{
  title: 'Leashes',
  picture: 'https://www.earthdog.com/Shared/Images/Product/decorative-hemp-leashes/3-dec-leashes.jpg',
  post: '$15.00'
},

{
  title: 'Food',
  picture: 'https://www.milehighonthecheap.com/lotc-cms/wp-content/uploads/2018/07/anythink-farmer-market.jpg',
  post: '$50.00'
},

{
  title: 'Cages',
  picture: 'https://cdn.shopify.com/s/files/1/1899/4571/products/s559_102_0630cR_1024x1024.jpg?v=1500652090',
  post: '$7.99'
}

]


var postHTML = ''
for(var i = 0; i < posts.length; i++) {
  var heading = "<div class='post'><h2>"+posts[i].title+"</h2>";
  var image = '<img src=' +posts[i].picture + '></img'
  var body = "<p>"+posts[i].post+"</p></div>";
  var concatThis = heading + image +'<br>' + body;
  postHTML += concatThis;
};

console.log(postHTML);

document.getElementById("animalProducts").innerHTML = postHTML;