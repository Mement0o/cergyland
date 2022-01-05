<li class="item-collectif"><a href="/p/2-collectif" active="false" type="button" title="Collectif Féministe" class="hasIcon"><i class="icon fas fa-star Button-icon"></i><div class="Button-label">Collectif Féministe</div></a></li>

<div class="ouverture" id="privee">Privée: visible par les étudiant·e·s</div>
<div class="ouverture" id="public">Public: visible par tout le monde</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>

var firstLocation = window.location.href;

function change(){
  
  console.log("ok");
  
 var location = window.location.href;

  $("#privee").clone().insertBefore(".TagCategory-reunions");
  $("#public").clone().insertBefore(".TagCategory-accueil");
  $(".TagCategoryList li.ParentCategory").prepend("<div class=\"title\"></div>");
  $(".fa-map").addClass("fa-envelope");
  $(".fa-map").removeClass("fa-map");
  $("i.icon.fas.fa-caret-up").addClass("fa-caret-down");
  $("i.icon.fas.fa-caret-up").removeClass("fa-caret-up");
//   $(".item-collectif").clone().prependTo(".item-nav ul.Dropdown-menu.dropdown-menu");
//   $(".item-nav .item-collectif").show();

  $(".title").click(function(){
   $(this).toggleClass("closed");
   if($(this).hasClass("closed")){
    $(this).parent().find("ol").hide();
   } else {
    $(this).parent().find("ol").show();
   }
  });
  // call end
 }
  
change.call();
  
setInterval (function(){
 var location = window.location.href;
 if(firstLocation != location){  
	change.call();
 }
}, 100);


</script>
