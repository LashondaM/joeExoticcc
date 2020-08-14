// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })

var posts = [{
  title: 'Tigers',
  picture: 'https://static.bangkokpost.com/media/content/20200219/c1_1860789_200219162635.jpg',
  post: '$7,500-15,000'
},

{
  title: 'Gorillas',
  picture: 'https://c402277.ssl.cf1.rackcdn.com/photos/18331/images/carousel_small/Mountain_Gorilla_Uganda_WW267058.jpg?1576515791',
  post: '$15,000-40,000'
},

{
  title: 'Snakes',
  picture: 'https://scx1.b-cdn.net/csz/news/800/2020/lizardandsna.jpg',
  post: '$30-450'
},

{
  title: 'Monkeys',
  picture: 'https://media.npr.org/assets/img/2017/09/13/gettyimages-453344850_custom-ef53a3e0702036fec6ae602efc72e606bae6591e-s800-c85.jpg',
  post: '$4,000-8,000'
},

{
  title: 'Birds',
  picture: 'https://media1.fdncms.com/orlando/imager/u/original/16938021/gal_exotic_birds_adobestock_46957449.jpeg.jpg',
  post: '$500-2,500'
},

{
    title: 'Tarantulas',
    picture: 'https://earthsky.org/upl/2011/05/Mexican_flameknee_tarantula.jpg',
    post: '$25-75'
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

document.getElementById("animals").innerHTML = postHTML;