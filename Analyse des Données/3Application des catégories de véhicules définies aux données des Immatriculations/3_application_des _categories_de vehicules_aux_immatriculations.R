## Application des catégories de véhicules définies aux données des Immatriculations

#-------------------------#
# PREPARATION DES DONNEES #
#-------------------------#
# Chargement des données
catalogue <- read.csv(dec = ".", file = "catalogue.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

# Suppression des variables marque et nom de l'ensemble d'apprentissage
catalogue <- subset(catalogue, select=-marque)
catalogue <- subset(catalogue, select=-nom)

# Creation des ensembles d'apprentissage et de test
catalogue_A <- catalogue
catalogue_T <- catalogue

catalogue_T <- subset(catalogue_T, select=-categorie)

#-----------------------------------------#
# APPRENTISSAGE ARBRE DE DECISION 'rpart' #
#-----------------------------------------#
install.packages("rpart")
library(rpart)

# Arbres d'apprentissage
treeCatalogue <- rpart(categorie~., catalogue)

#-------------------------------------------#
# GENERATION DES PROBABILITES DE PREDICTION #
#-------------------------------------------#
catalogue_T <- catalogue

# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'tree1'
test_treeCatalogue <- predict(treeCatalogue, catalogue, type="class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
prob_treeCatalogue <- data.frame(predict(treeCatalogue, catalogue_T, type="prob"))

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
catalogue_T$categorie_predite <- (colnames(prob_treeCatalogue)[max.col(prob_treeCatalogue)])

# Affichage de la classe reelle et des classes predites 
View(catalogue_T)

# Calcul du taux de succes
taux_succes <- nrow(catalogue_T[catalogue_T$categorie==catalogue_T$categorie_predite,])/nrow(catalogue_T)
taux_succes

#----------------------------------------#
# PREDICTIONS DU CLASSIFIEUR SELECTIONNE #
#----------------------------------------#
# Chargement des donnees a predire dans un data frame 'immatriculations'
immatriculations <- read.csv(dec = ".", file = "Immatriculations.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

# Arbres d'apprentissage
treeCatalogue <- rpart(categorie~., catalogue)

# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'tree1'
test_treeCatalogue <- predict(treeCatalogue, immatriculations, type="class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
prob_treeCatalogue <- data.frame(predict(treeCatalogue, immatriculations, type="prob"))

#---------------------------------#
# ENREGISTREMENT DES PREDICTIONS  #
#---------------------------------#
# Ajout d'une colonne categorie aux données de immatriculations
immatriculations$categorie <- (colnames(prob_treeCatalogue)[max.col(prob_treeCatalogue)])

View(immatriculations)

# Enregistrement du fichier de resultats au format csv
write.table(immatriculations, file="Immatriculations_predites.csv", sep=",", dec=".", row.names = F)

immatriculations_predites <- read.csv(dec = ".", file = "Immatriculations_predites.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)
