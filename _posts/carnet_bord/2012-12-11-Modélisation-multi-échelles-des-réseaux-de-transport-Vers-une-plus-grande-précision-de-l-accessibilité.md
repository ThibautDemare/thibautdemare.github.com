---
layout: blogPost
title: Modélisation multi-échelles des réseaux de transport - Vers une plus grande précision de l'accessibilité
abstract: <blockquote cite="http://www.mgm.fr/PUB/Mappemonde/Mappe396R.html">
	Afin d'étudier les répercussions spatiales d'un projet d'aménagement des transports un processus de modélisation multi-échelles a été développé dans le cadre du logiciel NOD. 
	Outre une description fine de la chaîne complète de déplacement, intégrant les trajets terminaux, les connexions entre modes, les horaires des transports en commun…, ce 
	processus permet de déterminer les interactions existant entre niveaux d'organisation, locaux, départementaux, régionaux, nationaux et internationaux.
</blockquote>
<a href='http://www.mgm.fr/PUB/Mappemonde/Mappe396R.html'>Source</a>
type: carnet
tag: notes
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Modélisation multi-échelles des réseaux de transport : Vers une plus grande précision de l'accessibilité

### L'article

Cet article a été publié en 1996 dans Mappemonde et a été écrit par Laurent Chapelon.

### Les mots clés

<blockquote cite="http://www.mgm.fr/PUB/Mappemonde/Mappe396R.html">
	Aménagement des transports, réseaux, espace, graphes, échelles, accessibilité, zoom, horaires.
</blockquote>
[Source](http://www.mgm.fr/PUB/Mappemonde/Mappe396R.html)

### Le résumé

<blockquote cite="http://www.mgm.fr/PUB/Mappemonde/Mappe396R.html">
	Afin d'étudier les répercussions spatiales d'un projet d'aménagement des transports un processus de modélisation multi-échelles a été développé dans le cadre du logiciel NOD. 
	Outre une description fine de la chaîne complète de déplacement, intégrant les trajets terminaux, les connexions entre modes, les horaires des transports en commun…, ce 
	processus permet de déterminer les interactions existant entre niveaux d'organisation, locaux, départementaux, régionaux, nationaux et internationaux.
</blockquote>
[Source](http://www.mgm.fr/PUB/Mappemonde/Mappe396R.html)

### Les notes

Afin de modéliser le plus précisément les différentes étapes de transports (et ses modes : piétons, transport en commun, voiture,...), l'auteur propose une manière de représenter 
le réseau grâce à l'imbrication de graphes (d'échelle réduite) dans des nœuds de plus grande échelle.

Le fait d'utiliser une représentation multi-échelles permet d'obtenir différents niveaux de précision. La finesse des résultats peut requérir une importante quantité de ressource de calcul,
ce qui n'est pas toujours souhaitable. Ainsi cette méthode permet d'ajuster le rapport précision/performance requise.

Il est toutefois nécessaire d'adapter certains algorithmes (comme le calcul de plus courts chemins). De plus, l'auteur possède une degrés de précision vraiment très fin : il est capable d'inclure
dans son modèle des objets spatiaux comme des tapis roulants. Pourtant, il n'est pas toujours possible de posséder une telle base de données. Il en est de même pour les temps de trajet et les horaires
des différents modes de transport.

Le modèle en lui-même reste très intéressant et pourra être une source d'inspiration dans le cadre de ma thèse.
