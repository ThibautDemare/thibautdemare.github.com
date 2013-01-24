/*
 * This script manage the animation of the presentation.
 * Author : Thibaut Démare
 */
var numActu=2;
var pause=false;
var opacite=false;
var timing = 4000;

$(document).ready(function() {
	nbActu = $("#actus").children().length;
	if(nbActu > 1){
		$(".vers_actu > button").each(
			function(){
				$(this).bind("click", function(){
					boutonActu($(this).attr("data-idActu"));
					return false;
				});
			}
		);
		setTimeout("slide()", 10000);
	}
});

function slide(){
	if(!pause){
		var from = numActu;
		if(numActu<nbActu)
			numActu=numActu+1;
		else
			numActu=1;
		//We do a transition every 6 secondes
		transitionActu(from, numActu);
		setTimeout("slide()", 10000);
	}
	else{
		//When someone clicks on a button, we freeze the animation for 30 secondes
		pause=false;
		setTimeout("slide()", 30000);
	}
}

function transitionActu(from, to){
	//firstly we hide the current article
	$("#actu-"+from).hide("slide", { direction: "right" }, timing);
	//Secondly  we show the next article
	$("#actu-"+to).show("slide", { direction: "left" }, timing);

}

function boutonActu(num){
	pause=true;
	transitionActu(numActu, num);
	numActu = num;
}
