angular.module('starter.controllers', [])

.directive('scrollWatch', function($rootScope, ionicMaterialMotion, ionicMaterialInk, $timeout) { 
   // $rootScope.something = false; //console.log($rootScope);
  return function(scope, elem, attr) {
    var start = 0;
    var threshold = 2;
    var abc = document.getElementById("MyHead");
    
    elem.bind('scroll', function(e) { console.log(e ); console.log(e.detail.scrollTop);
    e.bubbles = true; //console.log($rootScope);
    console.log(e.detail.scrollTop); console.log(threshold); //console.log(threshold)
      if(e.detail.scrollTop - start > threshold) { console.log("e ");
      
      // Set Motion
    $timeout(function() {
        $rootScope.something = true;
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
    
        
        $rootScope.slideHeader = true;
        
      } else { console.log("f");
        $rootScope.slideHeader = false;
        $rootScope.something = false;
      }
      if ($rootScope.slideHeaderPrevious >= e.detail.scrollTop - start) {
        //$rootScope.slideHeader = false; console.log("ff ");
        //$rootScope.something = false;
      }
      $rootScope.slideHeaderPrevious = e.detail.scrollTop - start;
      $rootScope.$apply();
    });
  };
})

.controller('PaneCtrl', function($scope, $ionicScrollDelegate, $rootScope) {
  $rootScope.MyHead = false;
  $rootScope.something = false;
  $rootScope.slideHeaderPrevious = 0;
})

.controller('beaconCtrl', function($scope, $ionicScrollDelegate, $rootScope) {
  console.log("huck");
})

.controller('CartCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicHistory) {
    
    var myBeaAdd = angular.element( document.querySelector( '#beaconMsg' ) );
    myBeaNoti = 1;
    myBeaNoti2 = 2;
	var element = '';
	  
    myBeaAdd.html(element);
                
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('CategoryCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicHistory) {
    
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    /*
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-blinds .item'
        });
    }, 1000);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
    */
})

.controller('ListCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicHistory) {
    
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('DetailsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $ionicHistory, $rootScope) {
    
    $rootScope.slideHeader = false;
    $rootScope.slideHeaderPrevious = 0;
  
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
        
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
    
    $scope.quantity = 1;
    $scope.myquantity = function(type){
       var quantity = 1;
        if(type == 1){
            quantity = $scope.quantity + 1;
        }
        
        if(type == 0){
            quantity = $scope.quantity - 1;
        }
        
        if(quantity < 1){
            quantity = 1;
        }
        return $scope.quantity = quantity;
    }
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('InquiryCtrl', function($scope, $stateParams, EmailComposer) { 
    $scope.meetingtime = "Metting Time";
    
    $scope.showSelectValue = function(meetingtime) {
        $scope.meetingtime = meetingtime;
    }

    $scope.submitForm = function(){ console.log($scope);
        var name = $scope.name; console.log($scope.name);
        var email = $scope.email;
        var phone = $scope.phone;
        var address = $scope.address;
        var meetingtime = $scope.meetingtime;
        
        if(!name){
            var msg = document.getElementById('msg');
            msg.innerHTML = "Please Enter your name.";
               setTimeout(function() {
                    msg.innerHTML = ''
                }, 3000);
                return;
        } else if(email){
             var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
             if(!re.test(email)){
               var msg = document.getElementById('msg');
                msg.innerHTML = "Email is not correct.";
                   setTimeout(function() {
                        msg.innerHTML = ''
                    }, 3000);
               return;
             }
        } else if(!phone){
            var msg = document.getElementById('msg');
            msg.innerHTML = "Please Enter your phone number.";
               setTimeout(function() {
                    msg.innerHTML = ''
                }, 3000);
                return;
        } 
        
        
        
        
        //alert("ddd");
        
        var str='';
        str = str + 'Dear Admin, <br/>';
        str = str + 'A Inquiry Request is received with information below..<br/>';
        str = str + 'Name: '+name+'<br/>';
        str = str + 'Email: '+email+'<br/>';
        str = str + 'Phone: '+phone+'<br/>';
        str = str + 'Address: '+address+'<br/>';
        str = str + 'Meeting Time: '+meetingtime;
        
        
        EmailComposer.isAvailable().then(function() {// alert("is available");
           // is available
         }, function () { //alert("not available");
           // not available
         });
        
          var email = {
            to: 'suresh.kumar@netsolutions.in',
            cc: 'utkarsh.puri@netsolutionsindia.com',
          //  bcc: [''],
            attachments: [
              //'file://img/logo.png',
             // 'res://icon.png',
              //'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
              //'file://README.pdf'
            ],
            subject: 'A New Inquiry Request..',
            body: str,
            isHtml: true
          };
        console.log(email);
         EmailComposer.open(email).then(null, function () { //alert("success");
           // user cancelled email
         });
        
        
        
        
        
        
        
    }
})


.controller('MapCtrl', function($scope, $stateParams) {
    
    var map = null;
    
    var distance = null; // km
    var service = null;
    var gmarkers = [];
    
    var infowindow = new google.maps.InfoWindow();

    var myLatlng12; var myLatLng; var officeLatLng;
    
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    
    var marker = new google.maps.Marker();   
    
    var start; var destination;
    
  
      function initialize() {
        
        myLatlng12 = new google.maps.LatLng(30.731212, 76.830220);
                        
        var mapOptions = {
            center: myLatlng12,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            streetViewControl: false
          //  navigationControlOptions: {
          //      style: google.maps.NavigationControlStyle.SMALL
          //  }
        };
 
        map = new google.maps.Map(document.getElementById("map"), mapOptions);  
        
        navigator.geolocation.getCurrentPosition(function(pos) {    console.log(pos);    

        myLatlng12 = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        
        //map.setCenter(myLatlng12);        
        
        marker = new google.maps.Marker({
            position: myLatlng12,
            map: map,
            icon: 'img/mapmarker.png',
            animation: google.maps.Animation.DROP,
            title: 'My Location'
          });
          
          
          
        $scope.map = map;
        
        });
        
        
        officeLatLng = new google.maps.LatLng(30.694209, 76.860565);
        
        map.setCenter(officeLatLng); 
        
        marker = new google.maps.Marker({
            position: officeLatLng,
            map: map,
            icon: 'img/store_32x32.png',
            title: 'My Office'
          });
          
          var contentStr = '<h5>Panchkula Eco City,</h5><p>Sector 12, Adjoining HSIIDC</p><p>NH 73, Panchkula Ext. 11.</p>';
                    
                    
        contentStr += '<p>+91-9216590011, 22, 33</p>';
        contentStr += '<p><a target="_blank" href="http://www.idyllicgroup.in/">http://www.idyllicgroup.in/</a></p>';
        
        contentStr += '<br/><b>Click on marker to show route.</b>';
        
        var infowindowp = new google.maps.InfoWindow();
        infowindowp.setContent(contentStr);
        infowindowp.open(map,marker);
        
        marker.addListener('click', function (event) {
            drawRoute(myLatlng12, this.position);
        });
        
    }
      

     $scope.$on('$ionicView.afterEnter', function(){
          initialize(); 
     });  
     
     
     
     
     
     
     function drawRoute(start, destination){
            
       var travelMode = 'DRIVING';
                     
        var request = {
            origin : start,
            destination : destination,
            travelMode : google.maps.DirectionsTravelMode[travelMode]
        };  console.log("98"); console.log(request);
        
        service = new google.maps.places.PlacesService(map);

        
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                
                directionsDisplay.setDirections(response); console.log("Route Response"); console.log(response);
            
                directionsDisplay.setDirections(response); console.log("Route Response"); console.log(response);
                
                RouteString = response;
                
                //Routes//
                
                route = RouteString.routes[0];
                  var summaryPanel = document.getElementById('directions-panel');
                  summaryPanel = ''; console.log("legs"); console.log(route.legs);
                  // For each route, display summary information.
                  for (var i = 0; i < route.legs.length; i++) { 
                    
                    console.log(route.legs[i].steps);
                   
                    var lmlShowDirectionIs = 0;
                  // $scope.totalText = " @@@@Distance " + route.legs[0].distance.text + " And Durations is  " + route.legs[0].duration.text;
                    for(var j = 0; j < route.legs[i].steps.length; j++){
                        
                        rroute = route.legs[i].steps[j]; //console.log(rroute); console.log("hello route latlong"); console.log(rroute.)
                       console.log("hello computing hard calculations :-C");
                      
                        console.log("My Current Location");                      
                        
                    }
                    
                    
                    
                    
                    
                    var routeSegment = i + 1;
                    summaryPanel += '<b>Route Segment: ' + routeSegment + '</b><br>';
                    summaryPanel += route.legs[i].start_address + ' to ';
                    summaryPanel += route.legs[i].end_address + '<br>';
                    summaryPanel += route.legs[i].distance.text + '<br><br>';
                  }
      
                    console.log(summaryPanel);
                     launchNavi(start, destination);
   
            }  
        });
        directionsDisplay.setPanel(document.getElementById('right-panel'));
        directionsDisplay.setMap(map);  console.log("Right Panel ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        
        
        // var navigatorIcon = angular.element( document.querySelector( '#navigator' ) );
        // navigatorIcon.html('<a class="tab-item" ng-click="launchNavi('+start+','+destination+')">  <i class="icon ion-navigate" ></i> Navigation </a> ');
         
         
            
      }
      
      
      function launchNavi(start, destination){ //alert("navigatoin");
                var dlat = destination.lat();
                var dlng = destination.lng();
                var slat = destination.lat();
                var slng = destination.lng();
                
                launchnavigator.navigate(
                  [dlat, dlng],
                  //[slat, slng],
                  function(success){ console.log(success);
                     // alert("Plugin success");
                  },
                  function(error){
                    //alert("Please choose destination point on map");
                     // alert("Plugin error: "+ error);
                  },
                  {
                    navigationMode: "turn-by-turn",
                    transportMode: "DRIVING",
                    disableAutoGeolocation: false
                  });  //alert("Hello");
               }

})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
