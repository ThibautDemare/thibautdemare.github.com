---
layout: blogPost
title: An analysis of agent-based approaches to transport logistics
abstract: "<blockquote cite='http://www.sciencedirect.com/science/article/pii/S0968090X05000318'>
<p>
	This paper provides a survey of existing research on agent-based approaches to transportation and traffic management. A framework for describing and assessing this work will be presented and systematically applied. We are mainly adopting a logistical perspective, thus focusing on freight transportation. However, when relevant, work of traffic and transport of people will be considered. A general conclusion from our study is that agent-based approaches seem very suitable for this domain, but that this still needs to be verified by more deployed system.
</p>

</blockquote>
<a href='http://www.sciencedirect.com/science/article/pii/S0968090X05000318'>Source</a>"
type: carnet
tag: notes
---

Attention &#58; la suite de ce texte est une prise de notes sur un article/livre/... que je n'ai pas écrit moi-même. Ainsi, les idées présentées ici sont la propriété de leur(s) auteur(s).

## An analysis of agent-based approaches to transport logistics

### L'article

Cet article, écrit par P. Davidsson, L. Henesey, L. Ramstedt, J. Törnquist, F. Wernstedt, est paru en 2005 dans "Transportation Research Part C: Emerging Technologies" (volume 13, numéro 4).

### Les mots clés 


<blockquote cite="http://www.sciencedirect.com/science/article/pii/S0968090X05000318">
Multi-agent systems, Decentralized systems, Survey, Traffic and transportation management</blockquote>
[Source](http://www.sciencedirect.com/science/article/pii/S0968090X05000318)

### Le résumé 

<blockquote cite='http://www.sciencedirect.com/science/article/pii/S0968090X05000318'>
<p>
	This paper provides a survey of existing research on agent-based approaches to transportation and traffic management. A framework for describing and assessing this work will be presented and systematically applied. We are mainly adopting a logistical perspective, thus focusing on freight transportation. However, when relevant, work of traffic and transport of people will be considered. A general conclusion from our study is that agent-based approaches seem very suitable for this domain, but that this still needs to be verified by more deployed system.
</p>

</blockquote>
[Source](http://www.sciencedirect.com/science/article/pii/S0968090X05000318)

### Les notes

Les auteurs souhaitent analyser un ensemble de travaux de recherches utilisant les approches agents pour modéliser des problèmes de logistiques. Ils vont donc décrire et utiliser une méthode de comparaison.

Ils commencent par décrire le contexte : la logistique et les approches agents. Ils reprennent la règle des 7 "R" proposée par Shapiro pour décrire les bases de la logistique : "ensuring the avaibility of the right product, in the right quality, and in the right condition, at the right place, at the right time, for the right customer, at the right cost".

Selon les auteurs, une application agent possède les caractéristiques suivantes :

- Modulaire.
- Décentralisé.
- Modifiable.
- Structurellement pas optimisé.
- Complexe.

Dans la partie qui suit, les auteurs décrivent leur méthode d'évaluation qui se décompose en plusieurs sous-partie.

La description du problème :

- Le "domaine" peut être transport (mouvements de véhicules d'un point à un autre), trafic (flot de plusieurs transports dans un réseau), et terminal (structure logistique où la marchandise est manipulé).
- Le "mode de transport" peut être classiquement par route, air, mer, ferroviaire, et pipeline mais les auteurs ne souhaitent pas inclure le mode pipeline dans leur étude. Par contre, ils intègrent l'intermodal.
- "L'échelle de temps" inclus les niveau opérationnel (court terme : jours ou heures), tactique (moyen terme : mois ou semaines), et stratégique (long terme : années).

L'approche utilisée :

- "L'usage" : on veut ici répondre à quoi va servir la modélisation/simulation. Les auteurs parlent de système d'aide à la décision (DSS dans le texte) et d'automatisation (qui peut être étudié, mais n'a pas d'impact, au moins direct, sur la réalité).
- "L'architecture agent" : les agents peuvent être réactif (comportement très simple basé sur des règles d'actions-réaction), délibératif (la prise de décision provient systématiquement d'un processus de raisonnement), ou enfin hybride (la décision peut parfois être réactif ou parfois être issu d'un raisonnement).
- Le "contrôle" peut être centralisé ou décentralisé.
- La "structure" peut être statique (l'ensemble des agents ou de leurs rôles ne varient pas au cours de la simulation) ou dynamique (de nouveaux agents peuvent apparaître au cours de la simulation).
- "L'attitude des agents" peut être bienveillante (coopérative) ou égoïste (compétitive).

Les résultats :

- La "maturité" : indique à quel niveau de travail, le modèle se trouve.
    1. Proposition de conception
    2. Expérimentation par simulation
        1. Données artificielles
            1. Limitées ou partielles
            2. Complètes
        2. Données réelles
            1. Limitées ou partielles
            2. Complètes
    3. Expérimentation dans le monde réel
        1. dans un monde restreint
        2. à grand échelle
    4. Système déployé et utilisé
- Évaluation comparative : si le problème a déjà été résolu grâce à d'autres approches, il est nécessaire de comparer les méthodes afin de déterminer s'il y a un réel intérêt. La méthode peut être qualitative ou quantitative (ou aucune s'il n'y pas lieu de comparer ou si ça n'a pas encore été fait).

Selon cette catégorisation, notre propre modèle serait classé ainsi :

- Domaine : transport et terminal.
- Mode de transport : route, mer, ferroviaire, intermodal.
- Échelle de temps : toutes.
- Usage : pour le moment "automatisation" mais à terme devrait aider à la décision.
- Contrôle : distribuer.
- Structure : statique.
- Attitude des agents : les deux.
- Architecture : plutôt réactif pour le moment mais devrait devenir hybride sur certains aspect.
- Maturité : 2.2.1 (Simulation experiment/Real data/limited or partial).
- Évaluation : aucune.

Les auteurs fournissent un tableau en annexe dans lequel chaque article étudié est catégorisé.
