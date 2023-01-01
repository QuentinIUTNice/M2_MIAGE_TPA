## Application des catégories de véhicules définies aux données des Immatriculations

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("rpart")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(rpart)

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

#-------------------------------------------------------#
# Suppression des variables inutiles pour créer l'arbre #
#-------------------------------------------------------#
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

#---------------------------------------------#
# APPLICATION DE L'ARBRE AUX IMMATRICULATIONS #
#---------------------------------------------#
# Chargement des donnees a prédire dans un data frame 'immatriculations'
immatriculations <- read.csv(
    dec = ".",
    file = "oImmatriculations.csv",
    header = TRUE,
    sep = ",",
    stringsAsFactors = FALSE,
    fileEncoding = "CP1252"
)

immatriculations <- unique(immatriculations)

# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'treeCatalogue'
testTreeImmatriculations <- predict(treeCatalogue, immatriculations, type = "class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'treeCatalogue'
probTreeImmatriculations <- data.frame(predict(treeCatalogue, immatriculations, type = "prob"))

#---------------------------------#
# ENREGISTREMENT DES PRÉDICTIONS  #
#---------------------------------#
# Ajout d'une colonne categorie aux données de immatriculations
immatriculations$catégorie <- (colnames(probTreeImmatriculations)[max.col(probTreeImmatriculations)])
View(immatriculations)

# Enregistrement du fichier de resultats au format csv
write.table(immatriculations, file = "Immatriculations.csv", sep = ",", dec = ".", row.names = F)
