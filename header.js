<svg width="100%" height="100%" style="position: absolute;">
 <defs>
  <filter id="wavy" filterUnits="userSpaceOnUse" x="0" y="0">
   <feTurbulence id="wave-animation" numOctaves="1" seed="1" baseFrequency="0 0.0645034">
   </feTurbulence>
   <feDisplacementMap scale="10" in="SourceGraphic"></feDisplacementMap>
  </filter>
  <animate xlink:href="#wave-animation" 
    attributeName="baseFrequency" 
    dur="3s" 
    keyTimes="0;0.5;1" 
    values="0.0 0.04;0.0 0.07;0.0 0.04"    
    repeatCount="indefinite"></animate>
</defs>
</svg>

<li class="item-collectif"><a active="false" type="button" title="Collectif Féministe" class="hasIcon"><i class="icon fas fa-star Button-icon"></i><div class="Button-label">Collectif Féministe</div></a></li>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>

 var oldLocation = location.href;
 setInterval(function() {
      if(location.href != oldLocation) {
       if(!$('.item-nav .item-collectif').length){
         $(".item-collectif").clone().prependTo(".item-nav ul.Dropdown-menu.dropdown-menu");
         $(".item-nav .item-collectif").show();
       }
      }
  }, 1000); 



setTimeout(function(){
  $(".item-collectif").clone().prependTo(".item-nav ul.Dropdown-menu.dropdown-menu");
  $(".item-nav .item-collectif").show();
}, 500);

$(".item-collectif").click(function() {
  $(".item-collectif").remove();
  $("li.TagCategory.ParentCategory:not(.TagCategory-collectif-feministe)").hide(); 
  $("li.active").removeClass("active");
  $(".item-collectif").addClass("active");
});

</script>
