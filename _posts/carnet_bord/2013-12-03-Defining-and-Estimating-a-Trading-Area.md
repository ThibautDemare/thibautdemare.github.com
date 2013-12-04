---
layout: blogPost
title: Defining a Trading Area
abstract: "<blockquote cite='http://www.jstor.org/stable/info/1249154'>

<p>
	What are the conceptual properties of a trading area? What is the definition of the term? What testable propositions are currently available to validate its properties and thus give precision to the definition? This article gives answers to these questions.
</p>

</blockquote>
<a href='http://www.jstor.org/stable/info/1249154'>Source</a>"
type: carnet
tag: notes
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Defining a Trading Area

### L'article

Cet article, écrit par David L. Huff, est paru en 1964 dans le "Journal of Marketing" Vol. 28, No. 3 (Jul., 1964) (pp. 34-38).


### Le résumé 



<blockquote cite="http://www.jstor.org/stable/info/1249154">

<p>
	What are the conceptual properties of a trading area? What is the definition of the term? What testable propositions are currently available to validate its properties and thus give precision to the definition? This article gives answers to these questions.
</p>

</blockquote>
[Source](http://www.jstor.org/stable/info/1249154)

### Les notes

L'auteur commence par expliquer qu'il n'existe pas de techniques complétement appropriées pour mesurer ou analyser une aire de marché. L'une des première technique consiste à interroger des personnes habitant ou travaillant dans l'aire d'étude. Toutefois, les réponses sont forcément subjectif et peuvent être remise en question. La deuxième technique présentée est mathématiques. Elle apporte donc plus de rigueur scientifique mais échoue lorsqu'il y a plusieurs zones concurrentes.

Pour pallier à ces problèmes, l'auteur propose une solution sous la forme d'une formule mathématique calculant la probabilité $P_{ij}$ d'un client positionné à un endroit donné $i$, de se déplacer vers vers un magasin donné $j$. Soit :

$$
P_{ij} = \frac{\frac{S_j}{T_{ij}^\lambda}}{\sum_{j=1}^{n}\frac{S_j}{T_{ij}^\lambda}}
$$

Avec :
- $S_j$ : la surface de vente du magasin.
- $T_{ij}$ : le temps de trajet qu'un client doit effectuer pour aller de $i$ à $j$.
- $\lambda$ : un paramètre à déterminer qui représente l'impact qu'un type de produit peut avoir sur le temps de trajet (ex: on est potentiellement pret à faire plus de route pour aller acheter des meubles que pour aller acheter à manger).

Ainsi il est donc possible de calculer le nombre de client potentiel du magasin $j$ et provenant de $i$ :

$$
E_{ij} = P_{ij} \times C_i
$$

Avec :
- $E_{ij}$ : le nombre de client attendu provenant de $i$ et allant dans le magasin $j$.
- $C_i$ : le nombre d'individu présent à $i$.

Le nombre total de client potentiel du magasin $j$ est donc :

$$
T_j = \sum_{i=1}^{n} E_{ij}
$$

