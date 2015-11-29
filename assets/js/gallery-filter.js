/*
* Copyright (c) 2015
* Tabitha Kennedy && Tim Kennedy II (github: @tktechie)
* MIT License.
*/

$(document).ready(function(){
    $("button#filter_video").click(function(){
        if ($(".f_ui").hasClass("opacity") === false) { // adds "opacity" class if elements with "f_ui" class don't already have "opacity"
            $(".f_ui").addClass("opacity");
        }
        if ($(".f_art").hasClass("opacity") === false) { // adds "opacity" class if elements with "f_art" class don't already have "opacity"
            $(".f_art").addClass("opacity");
        }
        if ($(".f_vid").hasClass("opacity")) { // toggles off "opacity" class if elements with "f_vid" class have "opacity"
            $(".f_vid").toggleClass("opacity");
        }
        // the next few lines are purely for clicking a filter button again.
        // they will *unfilter* the currently filtered elements and leave the elements that *were* in focus alone
        $(".f_ui").removeClass("focus"); // straight up removes the focus class from "f_ui" class elements
        $(".f_art").removeClass("focus"); // straight up removes the focus class from "f_art" class elements
        // for the following if statment: if "f_vid" class elements were in focus, class "opacity" is toggled off from elements with classes "f_ui" & "f_art" & remove *focus* from "f_vid" class elements
        if ($(".f_vid").hasClass("focus")) {
            if ($(".f_ui").hasClass("opacity")) {
                $(".f_ui").toggleClass("opacity");
            }
            if ($(".f_art").hasClass("opacity")) {
                $(".f_art").toggleClass("opacity");
            }
            $(".f_vid").removeClass("focus");
          } else {  // if class "f_vid" elements did not have *focus* when checked a couple lines ago, give them *focus*
            $(".f_vid").addClass("focus");
            }
    });

    $("button#filter_ui").click(function(){
        if ($(".f_vid").hasClass("opacity") === false) {
            $(".f_vid").addClass("opacity");
        }
        if ($(".f_art").hasClass("opacity") === false) {
            $(".f_art").addClass("opacity");
        }
        if ($(".f_ui").hasClass("opacity")) {
            $(".f_ui").toggleClass("opacity");
        }
        $(".f_vid").removeClass("focus");
        $(".f_art").removeClass("focus");
        if ($(".f_ui").hasClass("focus")) {
            if ($(".f_vid").hasClass("opacity")) {
                $(".f_vid").toggleClass("opacity");
            }
            if ($(".f_art").hasClass("opacity")) {
                $(".f_art").toggleClass("opacity");
            }
            $(".f_ui").removeClass("focus");
        } else {$(".f_ui").addClass("focus");}
    });

    $("button#filter_art").click(function(){
        if ($(".f_ui").hasClass("opacity") === false) {
            $(".f_ui").addClass("opacity");
        }
        if ($(".f_vid").hasClass("opacity") === false) {
            $(".f_vid").addClass("opacity");
        }
        if ($(".f_art").hasClass("opacity")) {
            $(".f_art").toggleClass("opacity");
        }
        $(".f_ui").removeClass("focus");
        $(".f_vid").removeClass("focus");
        if ($(".f_art").hasClass("focus")) {
            if ($(".f_ui").hasClass("opacity")) {
                $(".f_ui").toggleClass("opacity");
            }
            if ($(".f_vid").hasClass("opacity")) {
                $(".f_vid").toggleClass("opacity");
            }
            $(".f_art").removeClass("focus");
        } else {$(".f_art").addClass("focus");}
    });

    $("button#filter_all").click(function(){
      if ($(".f_vid").hasClass("focus")) {
          if ($(".f_ui").hasClass("opacity")) {
              $(".f_ui").toggleClass("opacity");
          }
          if ($(".f_art").hasClass("opacity")) {
              $(".f_art").toggleClass("opacity");
          }
          $(".f_vid").removeClass("focus");
      }
      if ($(".f_ui").hasClass("focus")) {
          if ($(".f_vid").hasClass("opacity")) {
              $(".f_vid").toggleClass("opacity");
          }
          if ($(".f_art").hasClass("opacity")) {
              $(".f_art").toggleClass("opacity");
          }
          $(".f_ui").removeClass("focus");
      }
      if ($(".f_art").hasClass("focus")) {
          if ($(".f_ui").hasClass("opacity")) {
              $(".f_ui").toggleClass("opacity");
          }
          if ($(".f_vid").hasClass("opacity")) {
              $(".f_vid").toggleClass("opacity");
          }
          $(".f_art").removeClass("focus");
      }
    });
});
