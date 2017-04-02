'use strict';

/**
 * @ngdoc overview
 * @name d3ProjectApp
 * @description
 * # d3ProjectApp
 *
 * Main module of the application.
 */
var app = angular.module('d3ProjectApp', [
    'ui.router'
  ])


.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 
    function ($stateProvider, $locationProvider, $urlRouterProvider) {


    $stateProvider

      .state('/', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
      })

      .state('home', {
          url: '',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
      })

      .state('chart', {
          url: 'chart',
          templateUrl: 'views/chart.html',
          controller: 'ChartCtrl',
          directive: 'd3Bars'
      })

      .state('about', {
          url: 'about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })

      .state('contact', {
          url: 'contact',
          templateUrl: 'views/contact.html'
      })



      // use the HTML5 History API
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('');
}]);




app.run(function() {
    console.log('App Run');
});

   
