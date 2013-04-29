---
layout: blogPost
title: Multiagent System and the Dynamics of a Settlement System
abstract: Quelques prises de notes sur mes lectures du moment. Les auteurs présentent le modèle multiagent "SIMPOP".
type: carnet
tag: notes
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Multiagent System and the Dynamics of a Settlement System

### L'article

Cet article a été publié en 1996 dans "Geographical Analysis" et a été écrit par Stéphane Bura, France Guérin-Pace, Hélène Mathian, Denise Pumain et Lena Sanders.

### Le résumé

<blockquote cite="http://onlinelibrary.wiley.com/doi/10.1111/j.1538-4632.1996.tb00927.x/abstract">
	In order to simulate the evolution of a system of settlements with a dynamic model, many processes must be integrated: the spatial aggregation of population, 
	the complexification of urban activities, and the increasing hierarchical differentiation of settlements. The model must also simulate the progressive structuration 
	of the settlement system through a growing variety and enlarged range of interactions between its elements. “Multiagent systems” provides a flexible modeling method 
	for dealing with the multiple spatial interactions of cooperation and competition and relations that generate and regulate the evolution of a settlement system. 
	Its principles are described and applied to building an evolutionary model, including a simulation tool. The model combines economic and spatial rules to produce 
	birth, growth, decline, and functional diversification of the towns. The “urban transition” from an agrarian settlement system toward a hierarchical system of trade
	- and manufacturing-oriented towns and cities can be simulated
</blockquote>
[Source](http://onlinelibrary.wiley.com/doi/10.1111/j.1538-4632.1996.tb00927.x/abstract)

### Les notes


En souhaitant développer un modèle de simulation (le modèle SIMPOP), les auteurs ont utilisé un modèle multi agent. Les différentes structures spatiales et les interactions qui existent entre leles
se traduise assez bien par ce concept agent.

Les auteurs expliquent donc leurs choix plus en détails et décrivent fidèlement ce modèle d'intelligence artificielle distribuée. L'article propose d'ailleurs une définition très clair de ce qu'est 
un agent :
ses caractéristiques, ses fonctions, ses capacités de communication, et les différentes méthodes de les concevoir (agents réactif ou proactif par exemple).

Ensuite, l'article décrit la structure du modèle avec plus précisément les agents dans ce contexte géographique, leur environnement, leur règles/fonctions...

Afin de valider le modèle, les auteurs proposent ensuite d'étudier un cas d'étude : l'émergence d'une hierarchie urbaine. Ils expliquent ainsi les résultats obtenus qui se montrent en corrélation 
avec le genre de résultats que l'on peut obtenir dans la réalité.

On notera également qu'il s'agit d'un modèle d'auto-émergence.
