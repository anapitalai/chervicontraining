angular.module('chervicon', ['ui.bootstrap','ui.router','ngAnimate', 'ngSanitize'])
     

       .config(function($stateProvider){
       	$stateProvider
       	.state('about',{
            url:'/about',
            templateUrl:'components/chervicontemplates/about.tpl.html'
       	})
       
       	.state('contact',{
            url:'/contact',
            templateUrl:'components/chervicontemplates/contact.tpl.html'}
            )

            .state('slideshow',{
            url:'/slideshow',
            templateUrl:'components/chervicontemplates/courousel.tpl.html'}
            )


            ;




       });

