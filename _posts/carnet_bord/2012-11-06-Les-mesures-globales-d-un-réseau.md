---
layout: blogPost
title: Les mesures globales d'un reseau
abstract: Quelques prises de notes sur mes lectures du moment. L'article liste de façon non-exhaustive les principales mesures globales d'un réseau.
type: carnet
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Les mesures globales d'un réseau

### L'auteur

Ce papier a été écrit en 2010 par César Ducruet.

### Les mots clés

<blockquote cite='http://halshs.archives-ouvertes.fr/view_by_stamp.php?&amp;halsid=eqc3irp3r54j1fgmkpgvd8eq44&amp;label=SHS&amp;langue=fr&amp;action_todo=view&amp;id=halshs-00541902&amp;version=1&amp;view=extended_view'>
	groupe fmr – réseau – graphe planaire – indices – mesures globales
</blockquote>
[Source](http://halshs.archives-ouvertes.fr/view_by_stamp.php?&amp;halsid=eqc3irp3r54j1fgmkpgvd8eq44&amp;label=SHS&amp;langue=fr&amp;action_todo=view&amp;id=halshs-00541902&amp;version=1&amp;view=extended_view)

### Le résumé

<blockquote cite='http://halshs.archives-ouvertes.fr/view_by_stamp.php?&amp;halsid=eqc3irp3r54j1fgmkpgvd8eq44&amp;label=SHS&amp;langue=fr&amp;action_todo=view&amp;id=halshs-00541902&amp;version=1&amp;view=extended_view'>
	Ce document du groupe f.m.r. (flux, matrices, réseaux) propose une synthèse des mesures globales d'un réseau, qu'il s'agisse d'un réseau planaire ou non. 
	Les mesures récentes proposées par les physiciens sont détaillées.
</blockquote>
[Source](http://halshs.archives-ouvertes.fr/view_by_stamp.php?&amp;halsid=eqc3irp3r54j1fgmkpgvd8eq44&amp;label=SHS&amp;langue=fr&amp;action_todo=view&amp;id=halshs-00541902&amp;version=1&amp;view=extended_view)

### Les notes

#### Introduction

L'auteur s'attaque cette fois aux mesures globales des réseaux. Il en existe une multitude, dont certaines proviennent d'autres disciplines.

#### Pourquoi et comment mesurer la structure d'un réseau?

Chaque mesure traduit une partie de la structure du réseau mais il semble qu'aucune mesure ne permette de mettre en évidence l'ensemble des propriétés du réseau. 
Il devient donc nécessaire de choisir celles appropriées. Il faut néanmoins faire attention : certaines mesures sont critiquées car jugées non robustes.

#### Les propriétés d'un graphe


Ducruet commence par présenter des mesures "classiques" qui concernent la taille et la répartition du graphe.

L'évolution de mesures telle que le diamètre, le nombre de sommets et de liens va nous permettre de savoir si le réseau est en phase de croissance (augmentation du nombre de sommets et liens) ou 
si son utilisation progresse (augmentation du trafic).

L'indice de détour est un ratio entre la distance total du graphe (ou distance à vol d'oiseau) et la distance totale "réelle". L'auteur explique que cette mesure souligne le degré de simplification 
de la première en fonction de la seconde. Afin de montrer l'intérêt de cette mesure il prend l'exemple d'un terrain en relief : la distance à vol d'oiseau sera particulièrement plus courtes que la 
distance réelle.

La longueur moyenne des liens va mettre en évidence des phénomènes de contraction ou d'expansion du réseau.

L'auteur enchaîne ensuite sur des mesures de la structure même du graphe. Encore une fois il s'agit de mesures classiques, et Ducruet montre rapidement leur limite avec un exemple assez simple : l'étude 
d'un graphe en étoile et une structure chaînée indique que les deux graphes ont des mesures identique alors qu'ils sont tout deux particulièrement différents. 

Ces mesures peuvent cependant rester utile dans certaines circonstances à conditions de rester prudent sur les conclusions fournies par leurs résultats.

Finalement, l'auteur présente des mesures plus robustes issues de la physique et de la théorie de la complexité. Il introduit les mesures de distribution des degré et de transitivité en parlant des réseaux 
petit monde et des réseaux invariant d'échelle. L'auteur parle ensuite de la longueur moyenne des plus courts chemins : moins la valeur sera élevé, plus les flux transiteront efficacement.

En plus de ces trois mesures principales, il est possible de pondérer la transitivité par la valeur des liens. L'indice oligopolistique va permettre de déterminer la force d'association entre deux sommets.
Quant aux autres mesures, il s'agit bien souvent d'une comparaison des mesures locales.

L'auteur conclu la partie en expliquant qu'il est difficile de déterminer un seuil à partir duquel on pourra dire qu'un réseau est de type "scale free" ou de type "small wolrd". Les deux concepts peuvent 
d'ailleurs coexister dans certains réseaux.


#### Conclusion

L'auteur est conscient que la liste de ces mesures n'est pas exhaustive. Toutefois, il tient à souligner le fait qu'en géographie, il est nécessaire d'étudier plus en détails les relations entre la structure 
du réseau, les caractéristiques socio-économique changeantes des territoires pris en compte, et les stratégies des acteurs.








