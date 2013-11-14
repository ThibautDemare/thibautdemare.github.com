---
layout: blogPost
title: L'analyse structurelle des réseaux techniques modélisation, propriétés, vulnérabilités
abstract: "<blockquote cite='http://halshs.archives-ouvertes.fr/halshs-00664023'>
	L'objectif de ce papier du groupe fmr (flux, matrices, réseaux) est de synthétiser les développements concernant l'analyse structurelle des réseaux techniques. Ces analyses s'appuient sur un 
	postulat important : l'étude structurelle des réseaux techniques permet de faire émerger des éléments de compréhension concernant le fonctionnement, les forces et les faiblesses de ces réseaux. 
	Cette synthèse présente les différentes modélisations de ces réseaux sous forme de graphe, les principaux indicateurs d'étude des propriétés structurelles et les principes d'étude de leur vulnérabilité.
</blockquote>
<a href='http://halshs.archives-ouvertes.fr/halshs-00664023'>Source</a>"
type: carnet
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## L'analyse structurelle des réseaux techniques : modélisation, propriétés, vulnérabilités

### L'auteur

Ce papier a été écrit en 2012 par Serge Lhomme.

### Les mots clés

<blockquote cite="http://halshs.archives-ouvertes.fr/halshs-00664023">
	groupe fmr – réseau technique – vulnérabilité – propriétés structurelles
</blockquote>
[Source](http://halshs.archives-ouvertes.fr/halshs-00664023)

### Le résumé

<blockquote cite="http://halshs.archives-ouvertes.fr/halshs-00664023">
	L'objectif de ce papier du groupe fmr (flux, matrices, réseaux) est de synthétiser les développements concernant l'analyse structurelle des réseaux techniques. Ces analyses s'appuient sur un 
	postulat important : l'étude structurelle des réseaux techniques permet de faire émerger des éléments de compréhension concernant le fonctionnement, les forces et les faiblesses de ces réseaux. 
	Cette synthèse présente les différentes modélisations de ces réseaux sous forme de graphe, les principaux indicateurs d'étude des propriétés structurelles et les principes d'étude de leur vulnérabilité.
</blockquote>
[Source](http://halshs.archives-ouvertes.fr/halshs-00664023)

### Les notes

#### Introduction

L'auteur définit les réseaux techniques comme "des réseaux d'ingénierie, fournissant des services primordiaux pour le bon fonctionnement des sociétés modernes". Il prend donc en compte les réseaux viaires,
les réseaux d'électricité ou encore le réseau internet mais n'inclut pas les réseaux de téléphonie mobile ou les réseaux de transport aériens.

Selon lui, l'analyse des réseaux est principalement effectué selon des approches fonctionnelles : on étudie les propriétés du réseaux au niveau des flux. Pourtant les physiciens ont permit l'essor de 
l'analyse structurelle. Celle-ci nous permet de mieux appréhender le fonctionnement du réseau.


#### La modélisation des réseaux techniques sous forme de graphe

La manière de modéliser un réseau viaire est souvent celle la plus naturelle : 
- Les éléments linéaires comme les routes, les canalisations, les câbles correspondent aux arcs/arrêtes du graphe.
- Les éléments ponctuelles comme les intersections, les embranchements ou les switchs correspondent aux nœuds.

On peut également pondérer les liens en fonction des propriétés du réseau modélisé : la longueur d'une route ou son flux maximale par exemple.

Il faut noter que nous pouvons représenter le réseau sous forme d'un multigraphe. Par exemple : si une route comporte trois voies, il peut être utile de la modéliser avec trois liens 
distincts mais reliant les deux même nœuds. Ce type de graphe est plus délicat à manipuler mais sera plus fidèle à la réalité.

Il est parfois utile d'utiliser une représentation multiniveaux afin de facilité la modélisation et les traitements qui pourront alors être distribué sur les zones porteuses d'intérêt.

L'auteur montre que différents chercheurs ont également tenté de modéliser les réseaux d'une façon moins intuitive : les rues sont les nœuds et les intersections sont les liens. Cette 
méthode peut séduire mais introduit, selon l'auteur, des biais et il est ensuite difficile d'inclure les distances.


#### L'étude des propriétés structurelles des réseaux techniques

Cette étude se fait à l'aide d'indicateurs provenant notamment de l'étude des réseaux viaires où on considère les distances.

L'auteur liste différentes mesures d'éloignement qui rendent compte de l'accessibilité des nœuds du graphe. Toutefois, il précise qu'un seul indicateur ne peut être suffisant pour définir 
cette efficacité.
L'auteur explique alors l'utilité de comparer les mesures faites sur le graphe de départ avec un graphe de "référence". Il s'agit d'un graphe complet, dont les distances sur les liens 
correspondent aux distances à vol d'oiseau. Le manque de réalisme de ce graphe amène également à considérer un graphe de référence issu du graphe de Voronoi. Il est même possible 
(et parfois recommandé) d'utiliser des arbres couvrant ou des triangulations pour faciliter la comparaison.

Les indices de centralité sont également très utilisés mais ils ne mettent pas forcément en valeur les même propriétés. Il existe (de façon non-exhaustive) :
- La centralité de degré.
- La centralité de proximité.
- La centralité d'intermédiarité.
- La centralité de rectitude.
- La centralité d'information (mesure la perte d'efficacité du réseau lorsqu'un nœud est supprimé).

Pour le calcul des différentes centralité utilisant les plus courts chemins, l'auteur indique qu'il est possible de considérer les chemins les plus directes (dans le sens qui 
nécessitent le moins de changement de directions).

De plus, l'auteur expliquent clairement qu'en géographie il est difficile de ne pas utiliser les indicateurs alpha, beta et gamma qui donnent une idée globale du réseau de transport.
Il s'agit d'indicateurs "classiques" mais qui ont fait leur preuve.


#### Les réseaux techniques et les réseaux théoriques : scale-free et/ou small-world?

L'auteur explique que les réseaux techniques ne sont pas souvent des scale-free ou des small-world. Selon lui, c'est à cause de leur nature profondément encré dans la géographie. 
Ces réseaux n'ont pas une liberté importante en terme de variance de degré.

Pourtant, des études montrent l'existence d'une certaines hiérarchies des nœuds similaires à des comportements scale-free comme en témoigne les mesures de centralité.

Les réseaux techniques, bien qu'ils ne soient pas complètement des scale-free ou des small-world, leurs empruntent tout même certaines propriétés.


#### L'analyse structurelle des réseaux techniques dans un contexte de risques


La méthode la plus souvent utilisé pour analyser la structure d'un graphe dans un contexte de risque est de comparer les résultats obtenus sur le réseau "normal" et de les 
comparer sur une réseau dont on aura supprimer des nœuds et/ou des liens.

On peut prendre l'exemple de la centralité d'information dont on a fait allusion ci-dessus :

$$
V(i) = \frac{L(G) - L(G')}{L(G)}
$$
G' est le graphe privé de i, L(G) est l'éloignement moyen du graphe G.

En plus de la centralité d'intermédiarité, on peut s'intéresser à la perte de connectivité. Bien que les réseaux techniques sont souvent redondant, la perte de plusieurs composants 
du réseau permet d'étudier des scénarios de défaillance ou d'attaques.

Le choix des nœuds a supprimé peut être par l'aléatoire mais il s'agit des cas les moins critiques. On préférera alors choisir les nœuds les degré ou les centralité les plus fortes.




