---
layout: blogPost
title: Les mesures locales d'un réseau
abstract: Quelques prises de notes sur mes lectures du moment. L'article liste de façon non-exhaustive les principales mesures locales d'un réseau.
type: carnet
---

Attention : la suite de ce texte est une prise de notes sur un article que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Les mesures locales d'un réseau

### L'auteur

Ce papier a été écrit en 2010 par César Ducruet.

### Les mots clés

<blockquote cite="http://halshs.archives-ouvertes.fr/view_by_stamp.php?&halsid=d7rie9d0pmdaffnpd30npn4pr7&label=SHS&langue=fr&action_todo=view&id=halshs-00546814&version=2&view=extended_view">
	degré – graphe – groupe fmr – mesures locales
</blockquote>
[Source](http://halshs.archives-ouvertes.fr/view_by_stamp.php?&halsid=d7rie9d0pmdaffnpd30npn4pr7&label=SHS&langue=fr&action_todo=view&id=halshs-00546814&version=2&view=extended_view)

### Le résumé

<blockquote cite="http://halshs.archives-ouvertes.fr/view_by_stamp.php?&halsid=d7rie9d0pmdaffnpd30npn4pr7&label=SHS&langue=fr&action_todo=view&id=halshs-00546814&version=2&view=extended_view">
	Ce document du groupe f.m.r. (flux, matrices, réseaux) présente différents mesures locales utilisées pour l'analyse des réseaux.
</blockquote>
[Source](http://halshs.archives-ouvertes.fr/view_by_stamp.php?&halsid=d7rie9d0pmdaffnpd30npn4pr7&label=SHS&langue=fr&action_todo=view&id=halshs-00546814&version=2&view=extended_view)

### Les notes

#### Introduction

Une mesure locale permet de mettre en évidence l'importance d'un élément du graphe par rapport à d'autres. Cette importance est bien sûr en fonction de la sémantique associé au graphe étudié.
Certaines mesures peuvent être associée à d'autre afin de vérifier certaines lois d'organisation.

L'auteur se propose d'en étudier certaines et ils les classent selon les mesures locales de voisinages et les mesures locales d'ensembles.


#### Les mesures locales de voisinages

Le degré d'incidence (ou simplement degré) : il s'agit du nombre de sommets adjacents.
$k_i = C_D(i) = \sum_{j}^{N} x_{ij}$

Le degré pondéré (weighted degree) : il s'agit de la somme des poids des liens adjacents.
$s_i = C_D^w(i) = \sum_{i}^{N} w_{ij}$

La centralité combinée (combined centality) : il s'agit du degré pondéré sur le degré d'incidence à l'exposant $\alpha$
$C_D^{w\alpha}(i) = k_i \times (\frac{s_i}{k_i})^\alpha = k_i^{(1-\alpha} \times s_i^\alpha$

Le degré moyen des voisins les plus proches (average nearest neighbours degree) :
$k_{nm, i} = \frac{1}{k_i}\sum_j a_{ij}k_j$

La centralité des vecteurs propres (eigenvector centrality) :
$x_i = \frac{1}{\Lambda}\sum_{j=1}^{n}A_{ij}x_j$

La vulnérabilité (hub dependence) : il s'agit de la part du lien le plus fort dans le degré pondéré et en pourcentage.

La transitivité (transitivity, clustering coefficient) : il s'agit du nombre de triades fermées (un cycle de trois nœuds) sur le nombre de triades possibles :
$C_i = \frac{2 |\{e_{jk}\}|}{k_i(k_i-1)}$

L'indice de force (strength index) : il s'agit de la probabilité que les liens adjacents appartiennent à des cycles 3 et 4 :
w_s(u) = \frac{\sum_{e \in \text{adj}(u)}w_s(e)}{\text{deg}(u)}$

L'indice de Strahler (Strahler index, Horton-Strahler number) : il s'agit du nombre d'embranchement en aval du sommet.


#### Les mesures locales d'ensembles

L'auteur explique qu'il s'agit bien souvent de mesures d'accessibilité. La plupart de ces mesures se basent sur la longueur des chemins, mais on peut également 
comparer les sommets en fonction de caractéristiques plus particulières. L'idée est d'établir un classement des nœuds les uns par rapport aux autres.

L'auteur reprend certaines mesures pour expliquer leur intérêt dans un contexte de géographie. Il donne notamment certains exemples d'études faites avec l'accessibilité potentielle 
ou avec la centralité d'intermédiarité.

Le nombre de Koenig (Koenig number, associated number, eccentricity, dag lvel, excentricité) : il s'agit du nombre de liens servant à connecter le sommet le plus distant.
$e(x) = \text{max}_{y \in X}d(x, y)$

L'indice de Shimbel (Shimbel index, Shimbel distance, nodal accessibility, nodality) : C'est la somme des longueurs des plus courts chemins permettant de relier tous les autres sommets.
$A_i = \sum_{j=1}^{n} d_{ij}$

L'accessibilité géographique (geographic accessibility) : c'est la distance minimale divisée par le nombre de sommets du graphe.
$A(G) = \frac{\sum_i^n(\sum_j^n d_{ij})}{n}$

L'accessibilité potentielle (potential accessibility) : c'est l'accessibilité géographique divisée par un attribut du sommet choisi en fonction de la thématique traitée.
$A(P) = \frac{\sum_i^ P_i + \sum_j^n P_j}{d_{ij}}$

La centralité de proximité (closeness centrality, distance centrality) : il s'agit de l'inverse de l'indice de Shinbel :
$D_c (v) = \frac{1}{\sum_{t\in G} d_G(v, t)}$

La centralité d'intermédiarité (betweenness entrality, shortest-path betweenness) : c'est le nombre de plus courts chemins du graphe passant par chaque sommet.
$C_B (i) = \frac{g_{jk}(i)}{g_{jk}}$

La centralité d'intermédiarité pondérée (weighted betweenness centrality, flow betweenness) : c'est le trafic passant par le sommet i entre les sommets j et k par rapport au trafic maximum entre j et k.
$C_i^F = \frac{ \sum_{j < k\in G} m_{jk} (i)}{\sum_{j < k \in G}m_{jk}}$>


#### Des mesures locales aux mesures globales

Dans cette section, l'auteur montre les relations existantes entre les mesures locales et les mesures/propriétés globales du réseau.

Le premier point qu'il met en évidence est la distribution des degrés qui permet de déterminer la structure du graphe dans certains cas (notamment avec les scale free graph).

Par la suite, l'auteur montre la corrélation entre le degré et la centralité d'intermédiarité. Il explique que cette corrélation n'existe pas toujours lors de cas particulier : un sommet prenant le rôle de 
pont entre deux communautés par exemple.

Il existe d'autres corrélation entre les le locale et le global mais elles sont trop nombreuses pour être lister de façon exhaustive.





