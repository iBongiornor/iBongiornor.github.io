+function(i,e){var n=function(i,e,n){var r;return function t(){var u=this,f=arguments;function s(){if(!n){i.apply(u,f)}r=null}if(r){clearTimeout(r)}else if(n){i.apply(u,f)}r=setTimeout(s,e||100)}};jQuery.fn[e]=function(i){return i?this.bind("resize",n(i)):this.trigger(e)}}(jQuery,"smartresize");