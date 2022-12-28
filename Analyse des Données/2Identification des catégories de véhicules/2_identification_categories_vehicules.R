## Identification des catégories de véhicules

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("dplyr")
install.packages("rpart")
install.packages("rpart.plot")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(dplyr)
library(rpart)
library(rpart.plot)

#-------------------------#
# PREPARATION DES DONNEES #
#-------------------------#
# Chargement des données
catalogue <- read.csv(
    dec = ".",
    file = "Catalogue.csv",
    header = TRUE,
    sep = ",",
    stringsAsFactors = FALSE,
    fileEncoding = "UTF-8"
)

# Manipulations de base
str(catalogue)
names(catalogue)
summary(catalogue)

#---------------#
# VISUALISATION #
#---------------#
modelesCategories <- catalogue %>% distinct(nom, catégorie)

#------------------------------------------------------#
# Enregistrement du fichier de resultats au format csv #
#------------------------------------------------------#
write.table(modelesCategories, file = "Catégories.csv", sep = ",", dec = ".", row.names = F)

#-----------------------------------------------------------------------#
# Suppression des variables marque et nom de l'ensemble d'apprentissage #
#-----------------------------------------------------------------------#
sauvegardeCatalogue <- catalogue

catalogue <- subset(catalogue, select = -marque)
catalogue <- subset(catalogue, select = -nom)
catalogue <- subset(catalogue, select = -couleur)
catalogue <- subset(catalogue, select = -occasion)

#-----------------------------------------#
# APPRENTISSAGE ARBRE DE DECISION 'rpart' #
#-----------------------------------------#
treeCatalogue <- rpart(catégorie ~ ., catalogue)

plot(treeCatalogue)
text(treeCatalogue, pretty = 0)

#----------------------------------------------#
# APPRENTISSAGE ARBRE DE DECISION 'rpart.plot' #
#----------------------------------------------#
prp(treeCatalogue)

# Valeurs sur les arcs, classe en couleur et proportion de la classe majoritaire dans chaque noeud
prp(treeCatalogue, type = 4, extra = 8, box.col = c("tomato", "darkturquoise")[treeCatalogue$frame$yval])

#---------------------------------------------#
# APPLICATION DE L'ARBRE À L'ENSEMBLE DE TEST #
#---------------------------------------------#
# Génération de la classe prédite pour chaque exemple de test pour l'arbre 'treeCatalogue'
testTreeCatalogue <- predict(treeCatalogue, catalogue, type = "class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
probTreeCatalogue <- data.frame(predict(treeCatalogue, catalogue, type = "prob"))

catalogue <- sauvegardeCatalogue
catalogue$catégoriePrédite <- (colnames(probTreeCatalogue)[max.col(probTreeCatalogue)])
View(catalogue)

#--------------------------#
# CALCUL DU TAUX DE SUCCÈS #
#--------------------------#
tauxSucces <- nrow(catalogue[catalogue$catégorie == catalogue$catégoriePrédite, ]) / nrow(catalogue)
View(tauxSucces)

echecs <- catalogue %>% filter(catalogue$catégorie != catalogue$catégoriePrédite)
View(echecs)
