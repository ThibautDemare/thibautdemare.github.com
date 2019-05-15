---
layout: default
title:  "L’intérêt des containers Docker dans la recherche scientifique"
---

# L’intérêt des containers Docker dans la recherche scientifique

## Introduction

### Problématiques

Comme la plupart des outils informatiques, Docker est né d'un besoin que les développeurs ont ressenti peu à peu. Faisons le tour de ces besoins avec notamment le point de vue d'un chercheur.

- Premier problème : on travail avec des gens !

Dans le cadre de notre travail, on élabore des modèles. Et on le fait sur nos machines avec des environnements de travail très spécifiques : sous Windows, Linux, Mac, ou autre, mais aussi avec des logiciels particuliers, dans des versions précises.

Sauf qu'on ne travail pas tout seul ! Et il est difficile de maintenir un environnement homogène sur l'ensemble des machines de tous nos collègues. Et c'est également le cas, si d'autres chercheurs (les reviewers d'un papier fraîchement soumis par exemple) veulent reproduire nos résultats.

- Deuxième problème : paralléliser, c'est compliquer

Lorsqu'on parallélise l’exécution de nos modèles, il faut souvent faire un gros travail supplémentaire pour rendre ça opérable. Il faut par exemple faire en sorte que les simulations n'interfèrent pas entre elles. Et quid de l’utilisation d'un modèle dont on n'a pas la main et qui n'est pas prévu pour être paralléliser?

- Troisième problème : la sécurité informatique.

Un peu moins le cas dans notre équipe de recherche, il est néanmoins nécessaire de s'en préoccuper un minimum. Il faut par exemple éviter d’exécuter le premier code source venu sans prendre la moindre précaution.

- Quatrième problème : tester des modèles ou des programmes, c'est chronophage

On peut être tenté de tester des programmes découvert ici ou là sans vouloir perdre de temps à tout installer et configurer.

Docker est donc un outils qui essaye de répondre à ces problèmes en nous facilitant la vie. Allons voir comment !

### Les containers Docker, c'est quoi ?

C'est un peu comme une machine virtuelle, mais pas vraiment non plus.

![VM vs Docker][vmvsdocker]

Docker utilise les containers Linux qui existent depuis longtemps. Mais Docker rajoute une surcouche à ces containers Linux pour les rendre facile à utiliser.

Dans un container Docker, on n'embarque pas un OS complet ce qui est plus léger par rapport à une VM. Par contre, les applications contenues dans le container sont séparées du système. Elles n'ont pas un accès complet à celui-ci (en tout cas par défaut).

### Les images et les containers Docker

Avec Docker, il faut distinguer les images et les conteneurs :

Une image c'est un fichier décrivant un système et qui est organisé en plusieurs couches : une image de base et des couches qui s'accumulent successivement correspondant à des images intermédiaires. L'image finale est donc la somme de ces couches successives.

Un conteneur, c'est une instance d'une image. Et on peut avoir plusieurs instances d'une même image.

Le moyen le plus simple d'utiliser Docker est de récupérer une image déjà créée. Et on en trouve plein sur [Dockerhub](https://hub.docker.com/) !

On peut le faire grâce à la commande [`docker pull nom_image`](https://docs.docker.com/v17.09/engine/reference/commandline/pull/).

Par exemple : 

{% highlight console %}
[user@localhost]$ docker pull jess/hollywood
{% endhighlight %}

Cette image est une image de démo. Elle ne sert pas à grand chose mais on peut la démarrer avec la commande [`docker run`](https://docs.docker.com/v17.09/engine/reference/commandline/run/) de cette façon :

{% highlight console %}
[user@localhost]$ docker run -it --rm jess/hollywood
{% endhighlight %}

En lançant cette commande, vous devriez voir apparaître à l'écran différents monitorings inutiles qui défilent et évoluent ;-) 

### Les Dockerfile

Mais l'intérêt de Docker c'est aussi de pouvoir créer sa propre image. De pouvoir en créer une personnalisée, au plus proche de nos propres besoins. Et pour cela, le moyen le plus répandu est de passer par [Dockerfile](https://docs.docker.com/v17.09/engine/reference/builder/).

Voici à quoi ressemble le Dockerfile de l'image précédente : 

{% highlight docker %}
# Ici l'auteur indique depuis quelle image on doit baser ce conteneur
FROM ubuntu:16.04

# Totalement optionnelle, la commande ci-dessous est juste pour indiquer le/la/les auteur(s)/autrice(s)
LABEL maintainer "Jessie Frazelle <jess@linux.com>"

# Là on exécute des commandes pour configurer convenablement le système 
RUN apt-get update && apt-get install -y \
    software-properties-common \
    --no-install-recommends && \
    add-apt-repository ppa:hollywood/ppa && \
    apt-get update && \
    apt-get install -y \
    byobu \
    hollywood \
    locate \
    mlocate \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && updatedb

# On définit une varaible d'environnement
ENV HOME /home/user
# et on crée un utilisateur
RUN useradd --create-home --home-dir $HOME user \
    && chown -R user:user $HOME

# On se place dans le home
WORKDIR $HOME
USER user

# et enfin on indique qu'on lancera, par défaut, la commande 'hollywood' au démarrage du conteneur
CMD [ "hollywood" ]
{% endhighlight %}

Une fois qu'on a créé un Dockerfile on utilise [`docker build`](https://docs.docker.com/v17.09/engine/reference/commandline/build/) pour créer une image Docker. Par exemple :

{% highlight console %}
[user@localhost]$ docker build -t monimage .
{% endhighlight %}

Si on doit construire l'image sur une autre machine que celle où on exécutera [`docker run`](https://docs.docker.com/v17.09/engine/reference/commandline/run/), alors plusieurs options s'offrent à nous. D'abord on peut publier l'image générée localement sur DockerHub (voir [`docker pull`](https://docs.docker.com/v17.09/engine/reference/commandline/push/)). Ou alors on peut aussi générer localement un fichier correspondant à l'image du build via [`docker save`](https://docs.docker.com/engine/reference/commandline/save/), et on transmet ce fichier sur l'autre machine (via ssh, clé USB ou n'importe quel autre moyen). Sur la machine distante, on pourra alors charger l'image avec [`docker load`](https://docs.docker.com/engine/reference/commandline/load/).

Pour aller plus loin, vous pouvez vous rendre sur [la doc de Docker](https://docs.docker.com/) qui est très complète. Par exemple, vous pouvez jeter un œil du côté de [`docker compose`](https://docs.docker.com/compose/overview/) qui permet de créer des containers plus complexes en combinant plusieurs containers.

## Et la science dans tout ça ?

Comme je le disais dans les problématiques, quand on développe des modèles, ils fonctionnent bien (on l'espère en tout cas) sur nos machines en local mais dès qu'on doit les partager avec nos collègues ça devient difficile de maintenir des environnements homogènes. Or il est important de pouvoir répéter les simulations, de pouvoir paralléliser leurs exécutions sur des serveurs dont on n'a pas le contrôle de leur administration système,...

Et c'est là que Docker nous facilite la tâche. Il nous suffit de créer une image Docker qui regroupe tout le nécessaire à l’exécution de nos modèles. Et ensuite on peut partager notre modèle et son image Docker auprès de toute personne souhaitant l’exécuter.

### 1er cas d'utilisation : GAMA et la simulation serveur

Afin de lancer des simulations de mon modèle qui peuvent être assez longue, je devais le lancer sur l'un des serveurs du [LITIS](http://www.litislab.fr/). Mais il a d'abords fallu que je lance des tests depuis ma machine Windows avec le mode "headless". Docker m'a donc aidé sur ce premier point. En plus, cela permet de faciliter le lancement de plusieurs simulations en parallèle.

D'abord, le Dockerfile :

{% highlight docker %}
# On part d'une ubuntu 18.04
FROM ubuntu:18.04 

# Et on installe java 8
RUN apt update && apt install -y openjdk-8-jdk

# On intègre à l'image le logiciel GAMA présent sur la machine locale
COPY ./gama /gama

# On crée les différents dossiers dont GAMA et la simulation auront besoin
RUN mkdir /bd && mkdir /DALSim && mkdir /simulation_configs && mkdir /output && mkdir /CSV && chmod -R +x /gama

# On se place dans le bon répertaire
WORKDIR /gama/headless 

# Et on définit quel script doit être lancé au démarrage d'un container
ENTRYPOINT ["./gama-headless.sh"]
# Et enfin on définit les arguments par défaut à transmettre à la commande précédente
CMD ["/simulation_configs/simulation_config.xml /output/"]
{% endhighlight %}

Ensuite on construit l'image :

{% highlight console %}
[user@localhost]$ docker build -t gama .
{% endhighlight %}

Et enfin on peut lancer le conteneur :

{% highlight console %}
[user@localhost]$ docker run --name gamacontainer \    # ici on donne un nom à notre conteneur
    -v $(pwd)/simulation_configs:/simulation_configs \ # Ces lignes indiquent des points de montage
    -v $(pwd)/output:/output -v $(pwd)/CSV:/CSV \      # entre les dossiers de la machine locale 
    -v $(pwd)/DALSim:/DALSim \                         # et les dossiers du conteneur
    -v $(pwd)/bd:/bd \
    gama                                               # là il s'agit d'indiquer quelle image on souhaite démarrer
{% endhighlight %}

### 2ème cas d'utilisation : analyse de sensibilité

Dans le cadre d'une collaboration avec le [LMAH](http://lmah.univ-lehavre.fr/), j'ai travaillé sur un programme capable de faire l’analyse de sensibilité d'un algorithme d'évolution différentielle implémenté sous Scilab. Le modèle développé sous Scilab doit s’exécuter sur une version bien précise de Scilab qui est disponible (facilement) uniquement sur une version bien précise d'Ubuntu. Travaillant moi-même sous Windows, l'utilisation de Docker a largement facilité notre collaboration.

Ensuite, le programme que j'ai développé lit un fichier CSV dont chaque ligne propose un jeu de paramètre de l'algorithme. Le fichier CSV contient 4 000 jeux de paramètres, et chacun devait être exécuter 20 fois pour obtenir un résultat moyen, soit 80 000 simulations à exécuter. On a donc tiré profit que les containers Docker puissent s’exécuter en parallèle et sans interférence pour les lancer sur un serveur du LITIS.

## Conclusion, limites et perspectives

Docker est un outils très puissant qui permet de faciliter grandement le travail d'équipe en garantissant un environnement d’exécution homogène.

De plus, il permet la répétabilité des expériences. Il pourrait être judicieux de fournir l'image Docker en même temps que le code source d'un modèle auprès de la communauté scientifique afin qu'il puisse être éprouvé et tester dans les bonnes conditions.

Cela demande juste un effort pour apprendre à s'en servir, mais c'est relativement rapide.

Un peu de sécurité quand même : ne lancer pas un container Docker provenant de n'importe où ! 

[vmvsdocker]: images/vm-vs-docker.jpg "VM vs Docker"