/*
 * Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function($) {

    'use strict';

    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();

        $('.popover-dismiss').popover({
            trigger: 'focus'
        })
    });


    function bottomPos(element) {
        return element.offset().top + element.outerHeight();
    }

    // Bootstrap Fixed Header
    $(function() {
        var promo = $(".js-td-cover");
        if (!promo.length) {
            return
        }

        var promoOffset = bottomPos(promo);
        var navbarOffset = $('.js-navbar-scroll').offset().top;

        var threshold = Math.ceil($('.js-navbar-scroll').outerHeight());
        if ((promoOffset - navbarOffset) < threshold) {
            $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
        }


        $(window).on('scroll', function() {
            var navtop = $('.js-navbar-scroll').offset().top - $(window).scrollTop();
            var promoOffset = bottomPos($('.js-td-cover'));
            var navbarOffset = $('.js-navbar-scroll').offset().top;
            if ((promoOffset - navbarOffset) < threshold) {
                $('.js-navbar-scroll').addClass('navbar-bg-onscroll');
            } else {
                $('.js-navbar-scroll').removeClass('navbar-bg-onscroll');
                $('.js-navbar-scroll').addClass('navbar-bg-onscroll--fade');
            }
        });
    });

    $(document).ready(function () {

      $('.tab-content').find('.tab-pane').each(function (idx, item) {
          var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
              title = $(this).attr('title');
          navTabs.append('<li><a href="#">' + title + '</a></li');
      });
  
      updateCurrentTab()
  
  
      $('.nav-tabs a').click(function (e) {
          e.preventDefault();
          var tab = $(this).parent(),
                    tabIndex = tab.index(),
                    tabPanel = $(this).closest('.code-tabs'),
                    tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
          tabPanel.find('.active').removeClass('active');
          tab.addClass('active');
          tabPane.addClass('active');
  
          // Store the number of config language selected in users' localStorage
           if(window.localStorage) {
              window.localStorage.setItem("configLangPref", tabIndex + 1)
           }
  
           // After click update here not only selected part of code but others
           updateCurrentTab()
  
      });
  
      function updateCurrentTab() {
          var holder = '.nav-tabs a'
  
          // By default current tab number is 1
          var tabNumber = 1
  
          // Get saved tab number
          if (window.localStorage.getItem('configLangPref')) {
             tabNumber = window.localStorage.getItem('configLangPref')
          }
  
          // Remove 'active' code to avoid multiple examples of code
          $('.nav-tabs a').closest('.code-tabs').find('.active').removeClass('active');
  
          // Set 'active' state to current li(language) and div(code) by tabNumber
          $('.code-tabs ul.nav-tabs').find("li:nth-of-type(" + tabNumber + ")" ).addClass('active');
          $('.code-tabs .tab-content').find("div:nth-of-type(" + tabNumber + ")").addClass('active');
  
      }
  });
  


}(jQuery));
