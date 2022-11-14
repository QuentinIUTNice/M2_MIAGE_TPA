## Analyse exploratoire des données

# Problèmes dans les données :
#   - Hyundaï -> Hyundai
#   - très longue -> tres longue

#-------------------------#
# PREPARATION DES DONNEES #
#-------------------------#
# Chargement des données
catalogue <- read.csv(dec = ".", file = "catalogue.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

# Manipulations de base
str(catalogue)
names(catalogue)
summary(catalogue)

#--------------------------#
# AFFICHAGES DES EFFECTIFS #
#--------------------------#
## Marques
# Table d'effectif
table(catalogue$marque)
# Graphique sectoriel des marques
pie(table(catalogue$marque), main = "Répartition des marques")

## Puissances
# Table d'effectif
table(catalogue$puissance)
# Graphique sectoriel des puissances
pie(table(catalogue$puissance), main = "Répartition des puissances")

## Longueurs
# Table d'effectif
table(catalogue$longueur)
# Graphique sectoriel des longueurs
pie(table(catalogue$longueur), main = "Répartition des longueurs")

## Nombre de places
# Table d'effectif
table(catalogue$nbPlaces)
# Graphique sectoriel du nombre de places
pie(table(catalogue$nbPlaces), main = "Répartition du nombre de places")

## Nombre de portes
# Table d'effectif
table(catalogue$nbPortes)
# Graphique sectoriel du nombre de portes
pie(table(catalogue$nbPortes), main = "Répartition du nombre de portes")

## Occasions
# Table d'effectif
table(catalogue$occasion)
# Graphique sectoriel des occasions
pie(table(catalogue$occasion), main = "Répartition des occasions")

## Prix
# Table d'effectif
table(catalogue$prix)
# Graphique sectoriel des prix
pie(table(catalogue$prix), main = "Répartition des prix")

#----------------------------------------#
# HISTOGRAMMES D'EFFECTIFS DES VARIABLES #
#----------------------------------------#
install.packages("ggplot2")
library("ggplot2")

# Histogramme d'effectifs de variables qualitatives
qplot(marque, data=catalogue)
qplot(nom, data=catalogue)
qplot(puissance, data=catalogue)
qplot(longueur, data=catalogue)
qplot(nbPlaces, data=catalogue)
qplot(nbPortes, data=catalogue)
qplot(occasion, data=catalogue)
qplot(prix, data=catalogue)

# Marques
## -> longueur
qplot(marque, data=catalogue, main="Distibution des marques", xlab="Marques", ylab="Nombre d'instances", fill=longueur) + theme(text = element_text(size=16))
## -> nbPlaces
qplot(marque, data=catalogue, main="Distibution des marques", xlab="Marques", ylab="Nombre d'instances", fill=nbPlaces) + theme(text = element_text(size=16))
## -> nbPortes
qplot(marque, data=catalogue, main="Distibution des marques", xlab="Marques", ylab="Nombre d'instances", fill=nbPortes) + theme(text = element_text(size=16))
## -> occasion
qplot(marque, data=catalogue, main="Distibution des marques", xlab="Marques", ylab="Nombre d'instances", fill=occasion) + theme(text = element_text(size=16))

# Nom
## -> puissance
qplot(nom, data=catalogue, main="Distibution des modeles", xlab="Modeles", ylab="Nombre d'instances", fill=puissance) + theme(text = element_text(size=16))
## -> longueur
qplot(nom, data=catalogue, main="Distibution des modeles", xlab="Modeles", ylab="Nombre d'instances", fill=longueur) + theme(text = element_text(size=16))
## -> nbPlaces
qplot(nom, data=catalogue, main="Distibution des modeles", xlab="Modeles", ylab="Nombre d'instances", fill=nbPlaces) + theme(text = element_text(size=16))
## -> nbPortes
qplot(nom, data=catalogue, main="Distibution des modeles", xlab="Modeles", ylab="Nombre d'instances", fill=nbPortes) + theme(text = element_text(size=16))
## -> occasion
qplot(nom, data=catalogue, main="Distibution des modeles", xlab="Modeles", ylab="Nombre d'instances", fill=occasion) + theme(text = element_text(size=16))

# Puissance
## -> longueur
qplot(puissance, data=catalogue, main="Distibution des puissances", xlab="Puissances", ylab="Nombre d'instances", fill=longueur) + theme(text = element_text(size=16))
## -> nbPlaces
qplot(puissance, data=catalogue, main="Distibution des puissances", xlab="Puissances", ylab="Nombre d'instances", fill=nbPlaces) + theme(text = element_text(size=16))
## -> nbPortes
qplot(puissance, data=catalogue, main="Distibution des puissances", xlab="Puissances", ylab="Nombre d'instances", fill=nbPortes) + theme(text = element_text(size=16))
## -> occasion
qplot(puissance, data=catalogue, main="Distibution des puissances", xlab="Puissances", ylab="Nombre d'instances", fill=occasion) + theme(text = element_text(size=16))

# NbPlaces
## -> puissance
qplot(nbPlaces, data=catalogue, main="Distibution du nombre de places", xlab="Nombre de places", ylab="Nombre d'instances", fill=longueur) + theme(text = element_text(size=16))
## -> occasion
qplot(nbPlaces, data=catalogue, main="Distibution du nombre de places", xlab="Nombre de places", ylab="Nombre d'instances", fill=occasion) + theme(text = element_text(size=16))

# NbPortes
## -> puissance
qplot(nbPortes, data=catalogue, main="Distibution du nombre de portes", xlab="Nombre de portes", ylab="Nombre d'instances", fill=longueur) + theme(text = element_text(size=16))
## -> occasion
qplot(nbPortes, data=catalogue, main="Distibution du nombre de portes", xlab="Nombre de portes", ylab="Nombre d'instances", fill=occasion) + theme(text = element_text(size=16))

# Prix
## -> marque
qplot(prix, data=catalogue, main="Distibution des prix", xlab="Prix", ylab="Nombre d'instances", fill=marque) + theme(text = element_text(size=16))
## -> modele
qplot(prix, data=catalogue, main="Distibution des prix", xlab="Prix", ylab="Nombre d'instances", fill=nom) + theme(text = element_text(size=16))
## -> longueur
qplot(prix, data=catalogue, main="Distibution des prix", xlab="Prix", ylab="Nombre d'instances", fill=longueur) + theme(text = element_text(size=16))
## -> occasion
qplot(prix, data=catalogue, main="Distibution des prix", xlab="Prix", ylab="Nombre d'instances", fill=occasion) + theme(text = element_text(size=16))

#------------------#
# NUAGES DE POINTS #
#------------------#
# Marque
# -> nom
qplot(marque, nom, data=catalogue, main="Nuage de point de Marque et Modele", xlab="Marques", ylab="Modeles")
# -> puissance
qplot(marque, puissance, data=catalogue, main="Nuage de point de Marque et Puissance", xlab="Marques", ylab="Puissances")
# -> longueur
qplot(marque, longueur, data=catalogue, main="Nuage de point de Marque et Longueur", xlab="Marques", ylab="Longueurs")
# -> nbPlaces
qplot(marque, nbPlaces, data=catalogue, main="Nuage de point de Marque et Nombre de place", xlab="Marques", ylab="Nombre de places")
# -> nbPortes
qplot(marque, nbPortes, data=catalogue, main="Nuage de point de Marque et Nombre de portes", xlab="Marques", ylab="Nombre de portes")
# -> occasion
qplot(marque, occasion, data=catalogue, main="Nuage de point de Marque et Occasion", xlab="Marques", ylab="Occasions")
# -> prix
qplot(marque, prix, data=catalogue, main="Nuage de point de Marque et Prix", xlab="Marques", ylab="Occasions")

# Modele
# -> marque
qplot(nom, marque, data=catalogue, main="Nuage de point de Modele et Marque", xlab="Modeles", ylab="Marques")
# -> puissance
qplot(nom, puissance, data=catalogue, main="Nuage de point de Modele et Puissance", xlab="Modeles", ylab="Puissances")
# -> longueur
qplot(nom, longueur, data=catalogue, main="Nuage de point de Modele et Longueur", xlab="Modeles", ylab="Longueurs")
# -> nbPlaces
qplot(nom, nbPlaces, data=catalogue, main="Nuage de point de Modele et Nombre de places", xlab="Modeles", ylab="Nombre de places")
# -> nbPortes
qplot(nom, nbPortes, data=catalogue, main="Nuage de point de Modele et Nombre de portes", xlab="Modeles", ylab="Nombre de portes")
# -> occasion
qplot(nom, occasion, data=catalogue, main="Nuage de point de Modele et Occasion", xlab="Modeles", ylab="Occasions")
# -> prix
qplot(nom, prix, data=catalogue, main="Nuage de point de Modele et Prix", xlab="Modeles", ylab="Occasions")

# Puissance
# -> marque
qplot(puissance, marque, data=catalogue, main="Nuage de point de Puissance et Marque", xlab="Puissances", ylab="Marques")
# -> modele
qplot(puissance, nom, data=catalogue, main="Nuage de point de Puissance et Modeles", xlab="Puissances", ylab="Modeles")
# -> longueur
qplot(puissance, longueur, data=catalogue, main="Nuage de point de Puissance et Longueur", xlab="Puissances", ylab="Longueurs")
# -> nbPlaces
qplot(puissance, nbPlaces, data=catalogue, main="Nuage de point de Puissance et Nombre de places", xlab="Puissances", ylab="Nombre de places")
# -> nbPortes
qplot(puissance, nbPortes, data=catalogue, main="Nuage de point de Puissance et Nombre de portes", xlab="Puissances", ylab="Nombre de portes")
# -> occasion
qplot(puissance, occasion, data=catalogue, main="Nuage de point de Puissance et Occasion", xlab="Puissances", ylab="Occasions")
# -> prix
qplot(puissance, prix, data=catalogue, main="Nuage de point de Puissance et Prix", xlab="Puissances", ylab="Occasions")

# Longueur
# -> marque
qplot(longueur, marque, data=catalogue, main="Nuage de point de Longueur et Marque", xlab="Longueurs", ylab="Marques")
# -> modele
qplot(longueur, nom, data=catalogue, main="Nuage de point de Longueur et Modeles", xlab="Longueurs", ylab="Modeles")
# -> puissance
qplot(longueur, puissance, data=catalogue, main="Nuage de point de Longueur et Longueur", xlab="Longueurs", ylab="Puissances")
# -> nbPlaces
qplot(longueur, nbPlaces, data=catalogue, main="Nuage de point de Longueur et Nombre de places", xlab="Longueurs", ylab="Nombre de places")
# -> nbPortes
qplot(longueur, nbPortes, data=catalogue, main="Nuage de point de Longueur et Nombre de portes", xlab="Longueurs", ylab="Nombre de portes")
# -> occasion
qplot(longueur, occasion, data=catalogue, main="Nuage de point de Longueur et Occasion", xlab="Longueurs", ylab="Occasions")
# -> prix
qplot(longueur, prix, data=catalogue, main="Nuage de point de Longueur et Prix", xlab="Longueurs", ylab="Prix")

# Nombre de places
# -> marque
qplot(nbPlaces, marque, data=catalogue, main="Nuage de point de Nombre de places et Marque", xlab="Nombre de places", ylab="Marques")
# -> modele
qplot(nbPlaces, nom, data=catalogue, main="Nuage de point de Nombre de places et Modele", xlab="Nombre de places", ylab="Modeles")
# -> puissance
qplot(nbPlaces, puissance, data=catalogue, main="Nuage de point de Nombre de places et Puissance", xlab="Nombre de places", ylab="Puissances")
# -> nbPlaces
qplot(nbPlaces, longueur, data=catalogue, main="Nuage de point de Nombre de places et Longueur", xlab="Nombre de places", ylab="Longueurs")
# -> nbPortes
qplot(nbPlaces, nbPortes, data=catalogue, main="Nuage de point de Nombre de places et Nombre de portes", xlab="Nombre de places", ylab="Nombre de portes")
# -> occasion
qplot(nbPlaces, occasion, data=catalogue, main="Nuage de point de Nombre de places et Occasion", xlab="Nombre de places", ylab="Occasions")
# -> prix
qplot(nbPlaces, prix, data=catalogue, main="Nuage de point de Nombre de places et Prix", xlab="Nombre de places", ylab="Prix")

# Nombre de portes
# -> marque
qplot(nbPortes, marque, data=catalogue, main="Nuage de point de Nombre de portes et Marque", xlab="Nombre de portes", ylab="Marques")
# -> modele
qplot(nbPortes, nom, data=catalogue, main="Nuage de point de Nombre de portes et Modele", xlab="Nombre de portes", ylab="Modeles")
# -> puissance
qplot(nbPortes, puissance, data=catalogue, main="Nuage de point de Nombre de portes et Puissance", xlab="Nombre de portes", ylab="Puissances")
# -> nbPlaces
qplot(nbPortes, longueur, data=catalogue, main="Nuage de point de Nombre de portes et Longueur", xlab="Nombre de portes", ylab="Longueurs")
# -> nbPortes
qplot(nbPortes, nbPlaces, data=catalogue, main="Nuage de point de Nombre de portes et Nombre de places", xlab="Nombre de portes", ylab="Nombre de places")
# -> occasion
qplot(nbPortes, occasion, data=catalogue, main="Nuage de point de Nombre de portes et Occasion", xlab="Nombre de portes", ylab="Occasions")
# -> prix
qplot(nbPortes, prix, data=catalogue, main="Nuage de point de Nombre de portes et Prix", xlab="Nombre de portes", ylab="Prix")

# Nombre de occasion
# -> marque
qplot(occasion, marque, data=catalogue, main="Nuage de point de Occasions et Marque", xlab="Occasions", ylab="Marques")
# -> modele
qplot(occasion, nom, data=catalogue, main="Nuage de point de Occasions et Modele", xlab="Occasions", ylab="Modeles")
# -> puissance
qplot(occasion, puissance, data=catalogue, main="Nuage de point de Occasions et Puissance", xlab="Occasions", ylab="Puissances")
# -> nbPlaces
qplot(occasion, longueur, data=catalogue, main="Nuage de point de Occasions et Longueur", xlab="Occasions", ylab="Longueurs")
# -> nbPortes
qplot(occasion, nbPlaces, data=catalogue, main="Nuage de point de Occasions et Nombre de places", xlab="Occasions", ylab="Nombre de places")
# -> occasion
qplot(occasion, nbPortes, data=catalogue, main="Nuage de point de Occasions et Nombre de portes", xlab="Occasions", ylab="Nombre de portes")
# -> prix
qplot(occasion, prix, data=catalogue, main="Nuage de point de Occasions et Prix", xlab="Occasions", ylab="Prix")

# Prix
# -> marque
qplot(prix, marque, data=catalogue, main="Nuage de point de Prix et Marque", xlab="Prix", ylab="Marques")
# -> modele
qplot(prix, nom, data=catalogue, main="Nuage de point de Prix et Modele", xlab="Prix", ylab="Modeles")
# -> puissance
qplot(prix, puissance, data=catalogue, main="Nuage de point de Prix et Puissance", xlab="Prix", ylab="Puissances")
# -> nbPlaces
qplot(prix, longueur, data=catalogue, main="Nuage de point de Prix et Longueur", xlab="Prix", ylab="Longueurs")
# -> nbPortes
qplot(prix, nbPlaces, data=catalogue, main="Nuage de point de Prix et Nombre de places", xlab="Prix", ylab="Nombre de places")
# -> occasion
qplot(prix, nbPortes, data=catalogue, main="Nuage de point de Prix et Nombre de portes", xlab="Prix", ylab="Nombre de portes")
# -> prix
qplot(prix, occasion, data=catalogue, main="Nuage de point de Prix et Occasions", xlab="Prix", ylab="Occasion")

#--------------------#
# BOITES A MOUSTACHE #
#--------------------#
# Puissance
# -> boxplot de puissance dans catalogue
boxplot(catalogue$puissance, data=catalogue, main="Distibution des Puissances", ylab="Valeur de puissance")
summary(catalogue$puissance)

# Nombre de places
# -> boxplot du nombre de places dans catalogue
boxplot(catalogue$nbPlaces, data=catalogue, main="Distibution des Nombre de Places", ylab="Valeur de nbPlaces")
summary(catalogue$nbPlaces)

# Nombre de portes
# -> boxplot du nombre de portes dans catalogue
boxplot(catalogue$nbPortes, data=catalogue, main="Distibution des Nombre de Portes", ylab="Valeur de nbPortes")
summary(catalogue$nbPortes)

# Nombre de portes
# -> boxplot du nombre de portes dans catalogue
boxplot(catalogue$nbPortes, data=catalogue, main="Distibution des Nombre de Portes", ylab="Valeur de nbPortes")
summary(catalogue$nbPortes)

# Prix
# -> boxplot du prix dans catalogue
boxplot(catalogue$prix, data=catalogue, main="Distibution des Prix", ylab="Valeur de prix")
summary(catalogue$prix)

#-----------------------#
# TABLES DE CONTINGENCE #
#-----------------------#
install.packages("regclass")
library(regclass)

# Définition du nimbre max de lignes affichées dans la console
options(max.print=10000)

# Définition du nombre de décimales affichées
options(digits=2)

# Table de contingence de la puissance en fonction de la marque
table(catalogue$puissance, catalogue$marque)

# Table de contingence de la longueur en fonction de la marque
table(catalogue$longueur, catalogue$marque)

# Table de contingence du nombre de places en fonction de la marque
table(catalogue$nbPlaces, catalogue$marque)

# Table de contingence du nombre de portes en fonction de la marque
table(catalogue$nbPortes, catalogue$marque)

# Table de contingence des occasions en fonction de la marque
table(catalogue$occasion, catalogue$marque)

# Table de contingence de la marque en fonction de la marque
table(catalogue$prix, catalogue$marque)

# 
mosaic(puissance~marque, data=catalogue, color=TRUE)
mosaic(longueur~marque, data=catalogue, color=TRUE)
mosaic(nbPlaces~marque, data=catalogue, color=TRUE)
mosaic(nbPortes~marque, data=catalogue, color=TRUE)
mosaic(prix~marque, data=catalogue, color=TRUE)

# Table de contingence de la longueur en fonction de la puissance
table(catalogue$longueur, catalogue$puissance)

# Table de contingence du nombre de places en fonction de la puissance
table(catalogue$nbPlaces, catalogue$puissance)

# Table de contingence du nombre de portes en fonction de la puissance
table(catalogue$nbPortes, catalogue$puissance)

# Table de contingence des occasions en fonction de la puissance
table(catalogue$occasion, catalogue$puissance)

# Table de contingence de la marque en fonction de la puissance
table(catalogue$prix, catalogue$puissance)

# 
mosaic(longueur~puissance, data=catalogue, color=TRUE)
mosaic(nbPlaces~puissance, data=catalogue, color=TRUE)
mosaic(nbPortes~puissance, data=catalogue, color=TRUE)
mosaic(occasion~puissance, data=catalogue, color=TRUE)
mosaic(prix~puissance, data=catalogue, color=TRUE)

# Table de contingence de la longueur en fonction du prix
table(catalogue$longueur, catalogue$prix)

# Table de contingence du nombre de places en fonction du prix
table(catalogue$nbPlaces, catalogue$prix)

# Table de contingence du nombre de portes en fonction du prix
table(catalogue$nbPortes, catalogue$prix)

# Table de contingence des occasions en fonction du prix
table(catalogue$occasion, catalogue$prix)

# 
mosaic(longueur~prix, data=catalogue, color=TRUE)
mosaic(nbPlaces~prix, data=catalogue, color=TRUE)
mosaic(nbPortes~prix, data=catalogue, color=TRUE)
mosaic(occasion~prix, data=catalogue, color=TRUE)
