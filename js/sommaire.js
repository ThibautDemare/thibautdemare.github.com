/*
 * This script generate the summary of the article
 * Author : Thibaut Démare
 */
var sommaire;
var ancre = 0;

$(document).ready(function() {
	sommaire = '<h5 id="titre_sommaire">Sommaire :<span id="deplier_sommaire"></span></h5>';
	sommaire += '<div class="paragraphe_contenu" id="contenu_sommaire">';
	
	oldTagName = "h1";
	oldLevel = 1;
	
	$("article > h2, h3, h4").each(function(titre1) {
		currentTagName = $(this).get(0).tagName;
		console.log(currentTagName);
		if(currentTagName == "H2")
			currentLevel = 2;
		else if(currentTagName == "H3")
			currentLevel = 3;
		else
			currentLevel = 4;
		
		if(oldLevel < currentLevel)
			sommaire += '<ul>';
		else if(oldLevel > currentLevel)
			sommaire += '</ul>';
		
		oldLevel = currentLevel;
		
		sommaire += "<li class='level-"+currentLevel+"'><a href='#section-"+ancre+"'>" + $(this).html() + "</a>";
		
		$(this).attr("id", 'section-'+ancre);
		ancre++;
	});
	sommaire += '</ul>';
	sommaire += '</div>';
	$("#sommaire").html(sommaire);
});

