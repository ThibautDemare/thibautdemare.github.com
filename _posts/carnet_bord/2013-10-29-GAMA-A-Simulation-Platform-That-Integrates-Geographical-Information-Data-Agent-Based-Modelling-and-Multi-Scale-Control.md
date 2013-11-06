---
layout: blogPost
title: GAMA &#58; A simulation Platform That Integrates Geographical Information Data, Agent-Based Modelling and Multi-Scale Control
abstract: Quelques prises de notes sur mes lectures du moment. 
type: carnet
tag: notes
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## GAMA : A simulation Platform That Integrates Geographical Information Data, Agent-Based Modelling and Multi-Scale Control

### L'article

Cet article écrit par Patrick Taillandier, Duc-An Vo, Edouard Amouroux et Alexis Drogoul est paru en 2012 dans "Principles and Practice of Multi-Agent Systems" vol. 7057 de Lecture Notes in Computer Science, pp. 242–258, Springer Berlin Heidelberg.

### Mots clés 


<blockquote cite="http://link.springer.com/chapter/10.1007%2F978-3-642-25920-3_17">

Simulation platform, Agent-based modeling, Geographical vector data, Multi-level control

</blockquote>
[Source](http://link.springer.com/chapter/10.1007%2F978-3-642-25920-3_17)

### Résumé 



<blockquote cite="http://link.springer.com/chapter/10.1007%2F978-3-642-25920-3_17">

<p>
	The agent-based modeling is now widely used to study complex systems. Its ability to represent several levels of interaction along a detailed (complex) environment representation favored such a development.
	However, in many models, these capabilities are not fully used. Indeed, only simple, usually discrete, environment representation and one level of interaction (rarely two or three) are considered in most 
	of the agent-based models. The major reason behind this fact is the lack of simulation platforms assisting the work of modelers in these domains. To tackle this problem, we developed a new simulation 
	platform, GAMA. This platform allows modelers to define spatially explicit and multi-levels models. In particular, it integrates powerful tools coming from Geographic Information Systems (GIS) and Data 
	Mining easing the modeling and analysis efforts. In this paper, we present how this platform addresses these issues and how such tools are available right out of the box to modelers.
</p>

</blockquote>
[Source](http://link.springer.com/chapter/10.1007%2F978-3-642-25920-3_17)

### Les notes

Les auteurs commencent par rappeler l'intérêt des modèles agents dans le cas des systèmes complexes (on peut prendre en compte plusieurs niveau du micro au macro).

Ensuite, ils expliquent que beaucoup de modèles sont développés de zéros car il n'existe pas de plateforme appropriée pour l'utilisation de données géographiques vectorielles. C'est donc ici que réside l'intérêt majeur de GAMA par rapport à ses concurrents.

Après cette première partie introductive, les auteurs montrent comment peuvent être utilisées les données géographique :
- Soit on lit des données géographiques, on se sert d'elles pour des usages spécifiques, puis on enregistre de nouvelles données géographiques en sortie.
- Soit on fait correspondre les données vectorielles à des formes au sein de la plateforme que les agents peuvent observer ou sur lesquelles ils peuvent se déplacer... Cela implique la création d'algorithme de plus courts chemins (entre autres).
- Soit  on considère que chaque objet géographique est en fait un agent. Avec cette méthode, on peut d'ailleurs faire le raisonnement inverse : un agent peut devenir un objet géographique pour peu qu'il soit géoréférencé et/ou qu'il ait une forme.

Ensuite, ils décrivent différentes plateformes concurrentes qui fournissent des opérations sur les données géographique ne plus de la simulation agent. Pourtant ces plateformes ne fournissent pas d'opérations complexes et sont bien souvent limités quant à l'utilisations des données GIS.

Ainsi, GAMA a été développé pour palier à ces problèmes. Les agents peuvent soit être créer manuellement en leur donnant une forme et des coordonnées, soit directement à partir d'un shapefile (dans ce cas la forme et les coordonnées sont extraites du fichier).
Ils listent ensuite plusieurs fonctionnalité du langage GAML mais ce n'est plus du tout valable dans les nouvelles versions de la plateforme bien que les concepts existent encore quant à eux.

La troisième partie s'intitule "modélisation multi-échelle". Les auteurs expliquent qu'il est souvent intéressant d'avoir des représentation sur plusieurs échelle (spatial ou temporelle par exemple). Les agents doivent donc pouvoir représenter aussi bien des individus que des agrégations.
On peut également détecter la formation de structures émergentes correspondant à un niveau d'abstraction supérieur. La plateforme GAMA propose donc de créer des agents correspondant à ce concept. Il faut alors définir des fonctions "creation" "update" et "merge". GAMA propose d'ailleurs plusieurs algorithmes de clustering parmis : hierarchical clustering, X-Means ou encore Cobweb.

La 4ème partie décrit le couplage des données géographiques vectorielles avec la modélisation multi-échelle. Ils montrent que les formes géométriques sont constitué (potentiellement?) de plusieurs agents : des arêtes pour une graphe, des triangles pour un polygone,... afin de pouvoir effectuer une réoptimisation local plutôt qu'un recalcul complet.

La dernière partie conclut l'article et décrit les futurs avancées de la plateforme.

