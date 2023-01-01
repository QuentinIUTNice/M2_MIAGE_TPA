## Random forests

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("caret")
install.packages("randomForest")


#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(caret)
library(randomForest)

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

#----------------#
# DATA PARTITION #
# -------------- #
set.seed(222)
ind <- sample(2, nrow(clientsImmatriculations), replace = TRUE, prob = c(0.3, 0.7))
train <- clientsImmatriculations[ind == 1, ]
test <- clientsImmatriculations[ind == 2, ]

#---------------#
# RANDOM FOREST #
#---------------#
randomForest <- randomForest(as.factor(categorie) ~ ., data = train, proximity = FALSE)
randomForestClass <- predict(randomForest, test, type = "response")

print(table(test$categorie, randomForestClass))

randomForestProb <- predict(randomForest, test, type = "prob")

test$catégoriePrédite <- (colnames(randomForestProb)[max.col(randomForestProb)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes <- nrow(test[test$categorie == test$catégoriePrédite, ]) / nrow(test)
taux_succes

#----------------------#
# MATRICE DE CONFUSION #
#----------------------#
prediction <- predict(randomForest, test)
confusionMatrix(prediction, as.factor(test$categorie))
