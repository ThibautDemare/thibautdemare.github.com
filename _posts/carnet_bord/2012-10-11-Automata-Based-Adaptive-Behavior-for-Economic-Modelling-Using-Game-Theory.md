---
layout: blogPost
title: Automata-Based Adaptive Behavior for Economic Modelling Using Game Theory
abstract: Quelques prises de notes sur mes lectures du moment. Les auteurs de cette article décrivent un modèle d'automate pour résoudre des problèmes issus de la théorie des jeux.
type: carnet
tag: notes
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## Automata-Based Adaptive Behavior for Economic Modelling Using Game Theory

### Les auteurs

Ce papier a été écrit en 2006 par Rawan Ghnemat , Saleh Oqeili , Cyrille Bertelle , et Gérard H.E. Duchamp. 

### Les mots clés

<blockquote cite="http://arxiv.org/abs/cs/0510089">
	adaptive behavior, game theory, genetic automata, prisoner dilemma, emergent systems computing
</blockquote>
[Source](http://arxiv.org/abs/cs/0510089)

### Le résumé

<blockquote cite="http://arxiv.org/abs/cs/0510089">
	In this paper, we deal with some specific domains of applications to game theory. This is one of the major class of models in the new approaches of modelling in the economic domain. 
	For that, we use genetic automata which allow to build adaptive strategies for the players. We explain how the automata-based formalism proposed - matrix representation of automata 
	with multiplicities - allows to define a semi-distance between the strategy behaviors. With that tools, we are able to generate an automatic processus to compute emergent systems 
	of entities whose behaviors are represented by these genetic automata.
</blockquote>
[Source](http://arxiv.org/abs/cs/0510089)

### Les notes

#### Introduction

Les auteurs commencent par présenter la théorie des jeux. Il s'agit d'un outil mathématiques permettant 
d'analyser les interactions stratégique entre les individus. Son importance a toutefois pris de l'ampleur 
avec John Nash en les années 50. Celui ci a proposé une règle d'équilibre par un critère adaptatif (appelé 
l'équilibre de Nash). Il s'agit d'une stratégie optimale d'un jeu où des joueurs atteignent un 
résultat dont les avantages sont mutuels : s'il existe un ensemble de stratégies pour 
un jeu avec la propriété qu'aucun joueur ne peut en bénéficier sans changer sa stratégie 
tant que les autres joueurs ne changent pas leur stratégie, alors cet ensemble de 
stratégies et les récompenses correspondantes constituent un équilibre de Nash.

Le comportement d'un joueur a besoin de propriétés adaptatives. Le modèle de calcul 
correspondant aux automates génétiques est un bon outil pour modéliser de telles 
stratégies adaptatives.

Plan :

- Présentation d'une structure algébrique efficace : l'automate à multiplicités 
permet l'implémentation d'opérateurs performants.
- Présentation de considérations topologiques à propos de la distance entre les 
automate qui induise un théorème de convergence sur le comportement des automates.
- Présentation d'opérateurs génétiques pour ces automates. Le calcul principal est 
effectué par une représentation matricielle.
- Étude de cas du dilemme du prisonnier afin de montrer que le modèle est bien 
adapté au modèle de stratégies adaptatives. Ils y créent un automate de probabilités 
évolutives pour modéliser les stratégies.
- Ils montrent comment il est possible d'utiliser le modèle d'automates génétiques 
pour représenter une agent évoluant dans un système complexe.


#### Automata from boolean to multiplicies theory (Automata with scalars)

Les premiers automates remontent aux années 1950 grâce à Allan Turing.

On s'en sert notamment pour l'étude des langages comme le fait Chomsky.

On se déplace dans un automate d'un état à un autre en effectuant des transitions 
permises par le label sur ces transitions. Les termes "automate fini déterministe" 
et "automate fini non déterministe" imposent des contraintes particulières sur le 
nombre d'état initial et le nombre de transition par état et pour chaque entrée :
 - DFA : chaque état possède exactement une transition pour chaque caractère d'entrée.
 - NFA : chaque état possède aucune ou plusieurs transition(s) pour chaque caractère 
 d'entrée.

Après cette introduction aux automates, les auteurs expliquent les automates avec 
sorties (ou automates pondéré). Après quelques exemples de ce type d'automate, les 
auteurs se concentrent sur les automates à multiplicités. Dans ce type d'automate, 
les données en sortie appartiennent à une structure algébrique particulière : un 
semi-anneau.

Avec ce type d'automate, les auteurs sont capable de construire des opérations efficaces
en utilisant l'algèbre des données de sorties et ils représentent l'automate avec une matrice.

Ils terminent la partie en donnant des définitions plus formelle de leur modèle d'automate à multiplicités.

#### Topological considérations :

Les auteurs définissent comment se calcul la distance séparant deux automates. 

#### Genetic automata as efficient operators

Le chromosome d'un automate est la séquence de toutes les matrices associées à chaque lettre de l'alphabet.
Les allèles des chromosomes sont ainsi les lignes de la matrice.

Les opérateurs génétiques :
- Duplication : l'automate génère un clone de lui même
- Crossing-over : à partir d'un couple d'automate, on permute les lignes de l'une des matrices de la séquence des chromosomes
- Mutation : une ligne de chaque matrice est choisie aléatoirement et une séquence de nouvelles valeurs remplace cette ligne.

L'algorithme :
1. Pour chaque couple d'automate, on génère deux enfants par duplication, crossover et mutation.
2. On calcul la fitness de chacun des automates
3. Pour chaque 4-uple composé des parent et enfants, on supprime les deux moins bons.

#### Applications to competition-cooperation modeling using prisoner dilemma

Dans cette partie les auteurs présentent une étude de cas afin de mettre en évidence l'efficacité de leur modèle. Ils se 
servent ainsi du dilemme du prisonnier.

Les auteurs commencent donc par expliquer le problème puis ils montrent comment ils le modélisent avec des automates classiques. 
Toutefois ce type d'automate montrent vite ses limites : ils sont incapables de proposer une stratégies réellement évolutive. 
C'est donc dans cette optique que les auteurs montrent l'intérêt (et en explique le fonctionnement) d'un automate probabiliste 
à plusieurs stratégies.

Ce modèle d'automate probabiliste est compatible avec le modèle d'automate génétique et ils décrivent comment fusionner ces deux modèles.

Avec la génétique, les chromosomes correspondent à la séquence de toutes les matrices associées à chaque lettre.

Ils définissent ensuite la fitness comme étant la valeur de la récompense.

L'algorithme : 
1. Une population initial est générée.
2. Ces automates jouent contre une stratégie prédéfinie. Chaque automate effectue un ensemble de tour. A chacun d'entre eux, on exécute 
l'automate probabiliste qui fournit les sorties $\(C\)$ ou $\(\bar{C}\)$. Grâce à cette sortie et celle de l'automate prédéfini, on est 
en mesure de calculer la récompense. La fitness correspond ainsi à la somme des récompenses de ces tours.
3. On effectue le processus de sélection et on obtient une nouvelle génération constituée des meilleurs automates.
Cette génération est la base du calcul avec les trois opérateurs génétique.

Il n'est pas précisé comment la fitness est calculée à la prochaine étape : lors de la première itération on se sert de S_0 mais à la 
deuxième itération, il est peut être préférable de prendre l'un des automates généré (le meilleur par exemple)

#### Extension to Emergent Systems Modeling

Les auteurs souhaitent mettre en avant dans cette section le fait que le modèle peut être utilisé pour calculer des systèmes d'émergence 
automatique. On parle ici de système émergent dans le cadre des systèmes complexes.

Un système complexe est composé d'entité en interaction entre elles et interagissant avec l'environnement extérieur. 

Des entités sont en interactions et la modification de l'une agit sur tout le système. Une organisation globale émerge de ces interactions. 
Cette organisation peut posséder ses propres propriétés, qui ne sont pas nécessairement présentent dans les entités constituant le système.

Un agent est une entité qui peut percevoir ou agir sur son environnement. Ses perceptions peuvent provenir du système lui-même mais 
également d'autres agents (par exemple lors de l'envoie de messages). Ce dernier point traduit un caractère social de l'agent.

Le comportement de chaque agent doit être décrit, ou modéliser, afin d'effectuer une simulation. Ce modèle peut notamment utiliser 
un système d'états internes et de transitions entre ces états.

On parle d'autonomie d'un agent lorsque celui-ci cherche à optimiser une fonction de satisfaction. Ces actions seront donc sélectionner 
par son comportement afin d'atteindre l'objectif fixé.

Dans dans la sous partie suivante, les auteurs définissent une fonction e évaluant un agent utilisant un automate probabiliste. Cette fonction 
retourne la matrice M tel que $M_{i, j}$ est la séquence de sorties depuis l'état initial i et vers l'état final j. Les valeurs de cette 
matrice ne sont pas définies en fonction des perceptions de l'agent. Par conséquent, la matrice fournit la probabilité d'atteindre un état final.

La distance $d(x, y)$ entre un agent x et un agent y se mesure ainsi : $||e(x)-e(y)||$. Cette distance permet de définir la fonction f correspondant
 à la fitness d'un agent :

$$
f(x) = \left\\{
\begin{array}{c l}
	\frac{\text{card}(V_x)}{\sum{y_i \in V_x}{d(x, y_i)^2}} & \text{si} \sum{y_i \in V_x}{d(x, y_i)^2} \neq 0 \\\\
	\infty & \text{sinon}
\end{array}\right.
$$

avec $V_x$ le voisinage de l'agent x.



































