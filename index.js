var app = angular.module('app', ['angularMoment', 'ngAnimate']);
// image title upvotes, descirption date comments author
var posts = [{
  id: 0,
  date: new Date('01/20/2016'),
  author: 'Christopher Hutchinson',
  title: 'Panoramic Photo Gone Wrong',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  upvotes: 20,
  image_url: 'https://a.thumbs.redditmedia.com/6W-pyvoTt7kjLOxx.jpg',
  comments: [
    {
      id: 1,
      date: new Date(),
      comment: "Test Comment",
      author: 'test author'
    },
    {
      id: 2,
      date: new Date(),
      comment: "Test Comment 2",
      author: 'testing author'
    }
  ]
}];


app.controller("postController", function($scope,$rootScope){
  $scope.posts = posts;
  // $scope.nc = false;
  $scope.newPost={
    id: 1,
    date: new Date(),
    author: '',
    title: '',
    description: '',
    upvotes: 0,
    image_url: '',
    comments: []
  };
  $scope.newComment={
    date: new Date(),
    author: '',
    comment: ''
  }

  $scope.addPost = function(){
    $scope.newPost.id = new Date();
    posts.push($scope.newPost);
    $scope.newPost={
      id: 1,
      date: new Date(),
      author: '',
      title: '',
      description: '',
      upvotes: 0,
      image_url: '',
      comments: []
    };
    $rootScope.newpost = false;
    this.on = !this.on;
  };
  $scope.addComment = function(post){
    $scope.newComment.date = new Date();
    posts.findIndex(function(elem,index){
      if (elem.id === post){
        posts[index].comments.push($scope.newComment);
      }
    });
    $scope.newComment={
      date: new Date(),
      author: '',
      comment: ''
    };
    this.nc = false;
  }
})
