/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(a){a("a[data-reveal-id]").live("click",function(b){b.preventDefault();var c=a(this).attr("data-reveal-id");a("#"+c).reveal(a(this).data())}),a.fn.reveal=function(b){var c={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:!0,dismissModalClass:"close-reveal-modal"},b=a.extend({},c,b);return this.each(function(){function h(){g.unbind("click.modalEvent"),a("."+b.dismissModalClass).unbind("click.modalEvent"),f||(l(),b.animation=="fadeAndPop"&&(c.css({top:a(document).scrollTop()-e,opacity:0,visibility:"visible"}),g.fadeIn(b.animationSpeed/2),c.delay(b.animationSpeed/2).animate({top:a(document).scrollTop()+d+"px",opacity:1},b.animationSpeed,k)),b.animation=="fade"&&(c.css({opacity:0,visibility:"visible",top:a(document).scrollTop()+d}),g.fadeIn(b.animationSpeed/2),c.delay(b.animationSpeed/2).animate({opacity:1},b.animationSpeed,k)),b.animation=="none"&&(c.css({visibility:"visible",top:a(document).scrollTop()+d}),g.css({display:"block"}),k())),c.unbind("reveal:open",h)}function i(){f||(l(),b.animation=="fadeAndPop"&&(g.delay(b.animationSpeed).fadeOut(b.animationSpeed),c.animate({top:a(document).scrollTop()-e+"px",opacity:0},b.animationSpeed/2,function(){c.css({top:d,opacity:1,visibility:"hidden"}),k()})),b.animation=="fade"&&(g.delay(b.animationSpeed).fadeOut(b.animationSpeed),c.animate({opacity:0},b.animationSpeed,function(){c.css({opacity:1,visibility:"hidden",top:d}),k()})),b.animation=="none"&&(c.css({visibility:"hidden",top:d}),g.css({display:"none"}))),c.unbind("reveal:close",i)}function k(){f=!1}function l(){f=!0}var c=a(this),d=parseInt(c.css("top")),e=c.height()+d,f=!1,g=a(".reveal-modal-bg");g.length==0&&(g=a('<div class="reveal-modal-bg" />').insertAfter(c),g.fadeTo("fast",.8)),c.bind("reveal:open",h),c.bind("reveal:close",i),c.trigger("reveal:open");var j=a("."+b.dismissModalClass).bind("click.modalEvent",function(){c.trigger("reveal:close")});b.closeOnBackgroundClick&&(g.css({cursor:"pointer"}),g.bind("click.modalEvent",function(){c.trigger("reveal:close")})),a("body").keyup(function(a){a.which===27&&c.trigger("reveal:close")})})}})(jQuery)