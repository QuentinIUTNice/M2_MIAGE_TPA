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
catalogue_EA <- catalogue[1:90,]
catalogue_ET <- catalogue[91:270,]

catalogue_ET <- subset(catalogue_ET, select=-categorie)

#-----------------------------------------#
# APPRENTISSAGE ARBRE DE DECISION 'rpart' #
#-----------------------------------------#
install.packages("rpart")
library(rpart)

# Arbres d'apprentissage
treeCatalogue_EA <- rpart(categorie~., catalogue_EA)

#-------------------------------------------#
# GENERATION DES PROBABILITES DE PREDICTION #
#-------------------------------------------#
# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'tree1'
test_treeCatalogue_ET <- predict(treeCatalogue_EA, catalogue_ET, type="class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
prob_treeCatalogue_ET <- data.frame(predict(treeCatalogue_EA, catalogue_ET, type="prob"))

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
catalogue_ET <- catalogue[91:270,]

catalogue_ET$categorie_predite <- (colnames(prob_treeCatalogue_ET)[max.col(prob_treeCatalogue_ET)])

# Affichage de la classe reelle et des classes predites 
View(catalogue_ET)

# Calcul du taux de succes
taux_succes <- nrow(catalogue_ET[catalogue_ET$categorie==catalogue_ET$categorie_predite,])/nrow(catalogue_ET)
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
write.table(immatriculations, file='Immatriculations_predites.csv', sep=",", dec=".", row.names = F)

immatriculations_predites <- read.csv(dec = ".", file = "Immatriculations_predites.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)
