---
title: 巴扎黑
date: 2019-05-03 18:51:56
tags:
---
大约在90年代，在某所学校的女生宿舍，曾发生过这样一段故事······
<!-- more -->
<style>
 body{
        padding: 0;
        margin: 0;
        }
    .content{
        z-index:999999;
        position:fixed;
        top:0;left:0;right:0;bottom:0;
        color:#000;
        
        padding:1rem .8rem 0 1rem ;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background: linear-gradient(180deg, rgba(0,0,255,1) 0%, rgba(255,0,0,1) 100%); 

    }
    .story {
        margin-top: -1rem;

        font-size:.7rem;
    }
    .next {
        width: 1.6rem;
        height: 1.6rem;
        background:radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 100%); /* w3c */
        border-radius: 50%;
        float: right;
        margin-right: 0rem;

    }
    .face{
        position: fixed;
        background: black;
        top: 0;left: 0;right: 0;bottom: 0;
        display: none;
        align-items:center;
    }
    .face img{
        object-fit:contain;
        width: 100%;
    }
</style>


<script>
 !function(a,b){function c(){var b=f.getBoundingClientRect().width;b/i>540&&(b=540*i);var c=b/10;f.style.fontSize=c+"px",k.rem=a.rem=c}var d,e=a.document,f=e.documentElement,g=e.querySelector('meta[name="viewport"]'),h=e.querySelector('meta[name="flexible"]'),i=0,j=0,k=b.flexible||(b.flexible={});if(g){var l=g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);l&&(j=parseFloat(l[1]),i=parseInt(1/j))}else if(h){var m=h.getAttribute("content");if(m){var n=m.match(/initial\-dpr=([\d\.]+)/),o=m.match(/maximum\-dpr=([\d\.]+)/);n&&(i=parseFloat(n[1]),j=parseFloat((1/i).toFixed(2))),o&&(i=parseFloat(o[1]),j=parseFloat((1/i).toFixed(2)))}}if(!i&&!j){var p=(a.navigator.appVersion.match(/android/gi),a.navigator.appVersion.match(/iphone/gi)),q=a.devicePixelRatio;i=p?q>=3&&(!i||i>=3)?3:q>=2&&(!i||i>=2)?2:1:1,j=1/i}if(f.setAttribute("data-dpr",i),!g)if(g=e.createElement("meta"),g.setAttribute("name","viewport"),g.setAttribute("content","initial-scale="+j+", maximum-scale="+j+", minimum-scale="+j+", user-scalable=no"),f.firstElementChild)f.firstElementChild.appendChild(g);else{var r=e.createElement("div");r.appendChild(g),e.write(r.innerHTML)}a.addEventListener("resize",function(){clearTimeout(d),d=setTimeout(c,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(d),d=setTimeout(c,300))},!1),"complete"===e.readyState?e.body.style.fontSize=12*i+"px":e.addEventListener("DOMContentLoaded",function(){e.body.style.fontSize=12*i+"px"},!1),c(),k.dpr=a.dpr=i,k.refreshRem=c,k.rem2px=function(a){var b=parseFloat(a)*this.rem;return"string"==typeof a&&a.match(/rem$/)&&(b+="px"),b},k.px2rem=function(a){var b=parseFloat(a)/this.rem;return"string"==typeof a&&a.match(/px$/)&&(b+="rem"),b}}(window,window.lib||(window.lib={}));


var bodyDom = document.querySelector("body")
h =  '   <div class="content"><div class="story">             <p></p> <div class="next"></div><div class="face"><img src="/js/1.jpg" alt=""><audio id="myAudio" src="/js/1.mp3" type="audio/mpeg"></audio></div></div></div>'
$("body").append(h)

var story = {
    0:"大约在90年代，在某所学校的女生宿舍，曾发生过这样一段故事······",
    1:"一个女同学,因不知受了何种创伤,竟然跳楼自杀,BUT这种自杀方式,跟别人不同。因她是头先落地,从此在女一舍走廊xxxx室,经常听到类似以头撞地的声音.....<br />碰..碰......碰.........<br />从走廊遥远的那一头,慢慢的靠近、慢慢的靠近...............<br />突然...声音停止,不再跳动,原来所停的地方是她生前所住的寝室。",
    2:"她就以凄凉的声音说:某某某在吗?她的室友都知道,这是她回了................<br />但没有人敢去开门...这样的情形,一直维持了好几个礼拜。但久而久之,这种情况也就愈来愈少................",
    3:"过了不久,暑假到了,随着假期的来临,宿舍的学生也都纷纷的回去了。而这种可怕的事情,却未曾停止..................",
    4:"一天晚上,女生宿舍的管理员在清理宿舍(由于大家急着回来,没有好好的整理寝室,所以可怜的管理员,只好一间一间的清理了),清理到这间传闻颇多的放间。心也就毛了起来,「但传言归传言,没有根据的事情.....唉!不要去想它。」管理员心中想着。于是便大胆的开了房门,只感觉阴气阵阵....",
    5:"注意一看,原来是北边的窗户没有关上,这时心中便安了起来。于是想上前去关上那个窗户,就在他关上的那一刹那,突然听到'碰'一声。他回头一看,门已经自动关上了。",
    6:"这时他的心中,那种不祥的预兆又产生了。就在他旁彷不知所措的时候,这个可怕的声音<br>碰....碰....碰...<br>又从遥远的走廊尽头,由远而近,慢慢的、慢慢的靠了过来「这时不管有没有这个传闻,已是无关紧要了。」他心中想着。",
    7:"他非常害怕,但又能如何呢?总不能坐以待弊,于是他想暂时躲在2号床位的书桌底下,等她过去了再出来,这样或许能逃过一劫。",
    8:"但人生不如意;十之八九,这句话活生生的证明在他身上。她停在门囗,没有在跳动了,以凄凉的囗气缓缓的说:「你..不..用..再..躲..了..我..已..经..看..到..你..了。」管理员心想说:「我躲在桌下,而你也没有开门,怎么可能看得到我呢?」",
    9:"于是管理员,走到门前,弯下身子,将脸贴近地面,想看看那一个女鬼。当他从底下门隙一看,居然看到两个血淋淋的眼睛,以哀怨的眼神看着他說............",
    10:"你躲也沒有用的......"
}

!(function (){
    // ------ init page ------
    var pDom = document.querySelector(".content")
    pDom.style.height = window.innerHeight+"px";
    var x = document.getElementById("myAudio"); 

    var index = 0;
    // ------ init story ------
    var storyDom = document.querySelector(".story p")
    storyDom.innerText = story[0]
    var nextButton = document.querySelector(".next")
    function c(){
        if(index==9){
        nextButton.style.display="none"
        setTimeout(function(){
            x.play(); 

            var f =document.querySelector(".face")
            f.style.display="flex"
            storyDom.innerHTML = story[10]
            setTimeout(()=>{
                f.style.display="none"

            },3000)
        },2000)

        }else{
            nextButton.onclick = function(){
            index++
            storyDom.innerHTML = story[index]
            c()
            }
        }
    }

    c()

   
})()
</script>
