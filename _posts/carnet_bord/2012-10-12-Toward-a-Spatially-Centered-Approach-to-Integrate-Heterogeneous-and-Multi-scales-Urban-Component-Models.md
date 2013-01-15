---
layout: blogPost
title: Toward a Spatially-Centered Approach to Integrate Heterogeneous and Multi-scales Urban Component Models
abstract: Quelques prises de notes sur mes lectures du moment. Dans cette article, les auteurs expliquent comment ils ont procédé afin de coupler plusieurs modèles.
type: carnet
---

Attention : la suite de ce texte est une prise de notes sur un article que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Toward a Spatially-Centered Approach to Integrate Heterogeneous and Multi-scales Urban Component Models

### Les auteurs

Ce papier a été écrit en 2012 par Inès Hassoumi, Christophe Lang, Nicolas Marilleau, Moncef Temani, Khaled Ghedira et Jean Daniel Zucker. 

### Les mots clés

<blockquote cite="http://dx.doi.org/10.1007/978-3-642-28786-2_9">
	model coupling based approach, multi-agent systems, complex systems modeling, spatial modeling, urban systems, urban dynamics
</blockquote>
[Source](http://dx.doi.org/10.1007/978-3-642-28786-2_9)

### Le résumé

<blockquote cite="http://dx.doi.org/10.1007/978-3-642-28786-2_9">
	This article addresses a model coupling based approach (i.e reusing and combining spatial models) for modeling and simulating complex systems. 
	Our research is conducted by a land use program of Métouia city (Tunisia) for which administration would study (by simulations) different 
	planning scenarios to identify strategies of industrial development. These simulations should take into account demographic, socio-economic 
	and environmental factors. Many urban models are available but they do not integrate these three aspects. This limitation could be solved by 
	a model coupling based approach. In this paper, from an analysis of models and approaches presented in the literature, we identify key points, 
	needs and the basis of an approach to couple models. Then, we introduce an original approach, based on agent paradigm, in which space is the 
	coupling factor to interconnect heterogeneous models (mathematical models, stochastic models, individual based models, and so on). The pertinence 
	of this coupling approach is also raised by the correlation to observe the impact of models on each other.
</blockquote>
[Source](http://dx.doi.org/10.1007/978-3-642-28786-2_9)

### Les notes

#### Introduction

L'article s'inscrit dans un travail de thèse dont l'objectif est de développer un outil d'aide à la décision pour l'aménagement du territoire.
La ville étudiée (Métouia en Tunisie) est un système complexe composé d'individus mais également de structure ou de service comme des industries, 
des commerces ou des zones d'agriculture. L'outil doit aider les autorités à choisir l'organisations spatiales la mieux adaptée qui respectera 
tout un ensemble de règles (ou de contraintes) fixées au préalable.

Ce travail est donc à la croisée de trois domaines : la modélisation spatial avec des agents multiples, les systèmes complexes urbains et l'aide 
à la décision de l'aménagement du territoire.

Le papier est donc une introduction à l'approche utilisée qui se base sur le paradigme agent.

Plan :

- Présentation de différents modèles (démographique, socio-économic, et dynamique urbaine). Ceux-ci permettent de représenter le système complexe 
de la ville.
- Présentation de méthodes de couplage et leur limites.
- Présentation de principe de base de leur méthode de couplage basé sur les systèmes multi-agent.

#### Components of an Urban System

Un système urbain se compose de 8 sous systèmes : la population, les emplois, les bâtiments, les terres utilisées, les transports, l'environnement, 
les finances publiques et les services publiques.

Les auteurs se proposent d'utiliser quatre modèles différents afin de retrouver les 8 sous systèmes décrient ci-dessus : un modèle économique, un 
modèle démographique, un modèle de transport et enfin un modèle d'utilisation des terres.

#### Coupling methods

Puisqu'aucun modèle ne permet de regrouper simultanément les 8 sous systèmes composant la ville, il est nécessaire de coupler entre eux les modèles 
proposés. Les auteurs distinguent trois principales techniques de couplage :
- Le facteur de couplage : par exemple le modèle DEVS.
- L'intermédiaire : utilisation d'une interface entre deux modèle à coupler.
- L'intégration : les modèles sont agrégés entre eux pour en constituer un nouveau.

#### Introduce Space in Coupling Based Approach

Les auteurs expliquent que les techniques classiques ne sont pas nécessairement pertinentes car on peut observer dans certains cas que les modèles 
ne sont pas entièrement compatible entre eux.

C'est ainsi qu'ils proposent un metamodèle basé sur les systèmes multi agent. Les auteurs montrent que ce type de modèle est bien adapté à la 
modélisation de la dynamique des villes.

L'environnement sur lequel vont évoluer les agents correspond à l'espace géographique. Les agents sont regroupés en organisation, chacune 
correspondante à un modèle théorique. Ces organisations sont basées sur la structure AGR. Les organisations, ou groupes, sont composées de :
- Un agent modèle : il représente le modèle théorique. Il reçoit des données de l'agent collecteur afin de faire fonctionner le mécanisme du modèle puis fournit sont résultat à l'agnet collecteur.
- Un agent collecteur : il collecte les informations de l'environnement (donc de l'espace) et il retransmet ses informations à l'agent modèle et à l'agent interpréteur.
- Un agent interpréteur : il traduit les données de l'agent collecteur et il les spatialise sur l'environnement.











