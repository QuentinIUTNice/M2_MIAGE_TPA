## Identification des catégories de véhicules

#-------------------------#
# PREPARATION DES DONNEES #
#-------------------------#
# Chargement des données
catalogue <- read.csv(dec = ".", file = "catalogue.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

# Manipulations de base
str(catalogue)
names(catalogue)
summary(catalogue)

# Suppression des variables marque et nom de l'ensemble d'apprentissage
catalogue <- subset(catalogue, select=-marque)
catalogue <- subset(catalogue, select=-nom)

#-----------------------------------------#
# APPRENTISSAGE ARBRE DE DECISION 'rpart' #
#-----------------------------------------#
install.packages("rpart")
library(rpart)

# Arbres d'apprentissage
treeCatalogue <- rpart(categorie~., catalogue)

plot(treeCatalogue)
text(treeCatalogue, pretty = 0)

#----------------------------------------------#
# APPRENTISSAGE ARBRE DE DECISION 'rpart.plot' #
#----------------------------------------------#
install.packages("rpart.plot")
library(rpart.plot)

# Affichage par défaut d'un arbre rpart par la fonction prp()
prp(treeCatalogue)

# Valeurs sur les arcs, classe en couleur et proportion de la classe majoritaire dans chaque noeud
prp(treeCatalogue, type=4, extra=8, box.col=c("tomato", "darkturquoise")[treeCatalogue$frame$yval])
