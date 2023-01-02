## Naive Bayes

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("naivebayes")
install.packages("caret")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(naivebayes)
library(caret)

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

# Suppression des colonnes liées à la voiture (autre que la categorie)
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

#-------------#
# NAIVE BAYES #
#-------------#
nb <- naive_bayes(categorie ~ ., train, laplace = 0, usekernel = FALSE)
nbClass <- predict(nb, test, type = "class")
print(table(test$categorie, nbClass))
nbProb <- predict(nb, test, type = "prob")
test$catégoriePrédite1 <- (colnames(nbProb)[max.col(nbProb)])

nb <- naive_bayes(categorie ~ ., train, laplace = 20, usekernel = FALSE)
nbClass <- predict(nb, test, type = "class")
print(table(test$categorie, nbClass))
nbProb <- predict(nb, test, type = "prob")
test$catégoriePrédite2 <- (colnames(nbProb)[max.col(nbProb)])

nb <- naive_bayes(categorie ~ ., train, laplace = 0, usekernel = TRUE)
nbClass <- predict(nb, test, type = "class")
print(table(test$categorie, nbClass))
nbProb <- predict(nb, test, type = "prob")
test$catégoriePrédite3 <- (colnames(nbProb)[max.col(nbProb)])

nb <- naive_bayes(categorie ~ ., train, laplace = 20, usekernel = TRUE)
nbClass <- predict(nb, test, type = "class")
print(table(test$categorie, nbClass))
nbProb <- predict(nb, test, type = "prob")
test$catégoriePrédite4 <- (colnames(nbProb)[max.col(nbProb)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes_1 <- nrow(test[test$categorie == test$catégoriePrédite1, ]) / nrow(test)
taux_succes_2 <- nrow(test[test$categorie == test$catégoriePrédite2, ]) / nrow(test)
taux_succes_3 <- nrow(test[test$categorie == test$catégoriePrédite3, ]) / nrow(test)
taux_succes_4 <- nrow(test[test$categorie == test$catégoriePrédite4, ]) / nrow(test)

#----------------------#
# MATRICE DE CONFUSION #
#----------------------#
prediction <- predict(nb, test)
confusionMatrix(prediction, as.factor(test$categorie))
