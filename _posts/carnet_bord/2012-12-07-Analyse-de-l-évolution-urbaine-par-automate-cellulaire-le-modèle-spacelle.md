---
layout: blogPost
title: Analyse de l'évolution urbaine par automate cellulaire - le modèle Spacelle
abstract: Quelques prises de notes sur mes lectures du moment. Les auteurs présentent "Spacelle" qui permet de modéliser l'évolution d'une région urbaine à l'aide d'automate cellulaire.
type: carnet
tag: notes
---

Attention : la suite de ce texte est une prise de notes sur un article que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Analyse de l'évolution urbaine par automate cellulaire : le modèle Spacelle

### L'article

Cet article a été publié en 2003 dans L'Espace géographique et a été écrit par Edwige Dubos-Paillard, Yves Guermond et Patrice Langlois.

### Les mots clés

<blockquote cite="http://www.citeulike.org/user/MBrasebin/article/10288333">
	Automate cellulaire, système dynamique, connaissances spatiales, règles de transition, évolution urbaine.
</blockquote>
[Source](http://www.citeulike.org/user/MBrasebin/article/10288333)


### Le résumé

<blockquote cite="http://www.citeulike.org/user/MBrasebin/article/10288333">
	Le travail que nous présentons repose sur l’idée selon laquelle la croissance urbaine, mais aussi de nombreux autres processus géographiques, peuvent s’expliquer par des 
	règles spatiales simples, formulées à partir de nos connaissances empiriques mais néanmoins explicatives de la dynamique spatiale si elles résultent de la pratique sociale. 
	L’automate cellulaire SpaCelle, est construit sur un paradigme très général, qui déborde du cadre de la modélisation urbaine, celui de la concurrence spatiale entre 
	diverses sous-populations cellulaires en interaction avec leur environnement. Chaque individu cellulaire utilise sa force vitale qui varie de sa naissance à sa mort pour 
	résister aux forces environnementales résultant des individus voisins agissant dans des auréoles de plus en plus larges autour de lui. Le logiciel, basé sur ce principe 
	général (son méta-modèle), doit être alimenté par l’utilisateur à travers une base de connaissances, constituée des différentes classes d’états cellulaires, des règles de 
	vie et de mort des individus, ainsi que des règles de transition. La disposition des cellules peut être importée depuis un grid ArcView ou saisi directement. La pertinence 
	géographique de ce modèle a été testée à travers une expérimentation concernant les règles d’évolution de l’espace urbain de Rouen pendant les cinquante dernières années. 
	Les résultats sont très proches de la situation observée, validant ainsi le modèle général et la base de règles pour l’agglomération rouennaise.
</blockquote>
[Source](http://www.citeulike.org/user/MBrasebin/article/10288333)

### Les notes

Les auteurs présentent un outil de modélisation répondant au nom de Spacelle. Celui-ci permet de simuler l'évolution urbaine.

Les auteurs valident leur modèle en s'appuyant sur la simulation de l'évolution de la région rouennaise qu'ils comparent avec la réalité.

Le modèle utilise en interne un réseau d'automate cellulaire, et propose aux utilisateur un langage leur permettant d'indiquer les règles régissant l'évolution urbaine. Il ne 
s'agit donc pas d'un modèle d'auto-émergence puisque c'est l'utilisateur qui fixe les règles et fournit la base de connaissance.

Les résultats sont quant à eux plutôt concluant. On constate une corrélation assez forte entre le modèle Spacelle et la réalité sur la région de Rouen. Pourtant, les auteurs eux même
émettent une critique : il est difficile voir impossible de fixer certaines règles particulères comme des décisions politiques qui irait à l'encontre d'une décision plus rationnelle.

Ainsi, comme tout outil, le modèle est limité par son utilisateur (qui doit être présent et fournir les "bonnes" règles) et sa capacité à communiquer avec lui (le langage Spacelle ne 
permet pas tout). 
