<li class="item-collectif"><a active="false" type="button" title="Collectif Féministe" class="hasIcon"><i class="icon fas fa-star Button-icon"></i><div class="Button-label">Collectif Féministe</div></a></li>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>



setTimeout(function(){



 setInterval(function(){

  if(!$(".item-nav .item-collectif").length){
   $(".item-collectif").clone().prependTo(".item-nav ul.Dropdown-menu.dropdown-menu");
   $(".item-nav .item-collectif").show();
  }

  $(".item-nav .item-collectif").click(function() {
   $("li.TagCategory.ParentCategory:not(.TagCategory-collectif-feministe)").hide(); 
   $("li.active").removeClass("active");
   $(".item-collectif").addClass("active");
  });

 }, 1000);
}, 500);




</script>
