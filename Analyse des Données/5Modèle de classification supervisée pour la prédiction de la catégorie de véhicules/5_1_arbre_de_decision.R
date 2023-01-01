## Arbre de décision

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
clientsImmatriculations <- read.csv(
    dec = ".",
    file = "ClientsImmatriculations.csv",
    header = TRUE,
    sep = ",",
    stringsAsFactors = FALSE,
    fileEncoding = "UTF-8"
)

# Suppression des colonnes liées à la voiture (autre que la catégorie)
sauvegardeClientsImmatriculations <- clientsImmatriculations

clientsImmatriculations <- subset(clientsImmatriculations, select = -immatriculation)
clientsImmatriculations <- subset(clientsImmatriculations, select = -marque)
clientsImmatriculations <- subset(clientsImmatriculations, select = -nom)
clientsImmatriculations <- subset(clientsImmatriculations, select = -puissance)
clientsImmatriculations <- subset(clientsImmatriculations, select = -longueur)
clientsImmatriculations <- subset(clientsImmatriculations, select = -nbPlaces)
clientsImmatriculations <- subset(clientsImmatriculations, select = -nbPortes)
clientsImmatriculations <- subset(clientsImmatriculations, select = -couleur)
clientsImmatriculations <- subset(clientsImmatriculations, select = -occasion)
clientsImmatriculations <- subset(clientsImmatriculations, select = -prix)

#--------------------------------#
# APPRENTISSAGE DE L'ARBRE RPART #
#--------------------------------#
# Construction de l'arbre de decision
tree <- rpart(catégorie ~ ., clientsImmatriculations)

# Affichage de l'arbre par les fonctions de base de R
plot(tree)
text(tree, pretty = 0)

#-------------------------------------------#
# GENERATION DES PROBABILITES DE PREDICTION #
#-------------------------------------------#
# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'tree1'
clientsImmatriculationsTree <- predict(tree, clientsImmatriculations, type = "class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
clientsImmatriculationsProbTree <- data.frame(predict(tree, clientsImmatriculations, type = "prob"))

clientsImmatriculations <- sauvegardeClientsImmatriculations

clientsImmatriculations$catégoriePrédite <- (colnames(clientsImmatriculationsProbTree)[max.col(clientsImmatriculationsProbTree)])
View(clientsImmatriculations)

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
tauxSucces <- nrow(clientsImmatriculations[clientsImmatriculations$catégorie == clientsImmatriculations$catégoriePrédite, ]) / nrow(clientsImmatriculations)
View(tauxSucces)
