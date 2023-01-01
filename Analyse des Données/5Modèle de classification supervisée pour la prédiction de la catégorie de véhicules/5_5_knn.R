## K Nearest Neighbors

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("kknn")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(kknn)

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

#---------------------#
# K-NEAREST NEIGHBORS #
#---------------------#
knn <- kknn(as.factor(categorie) ~ ., train, test, k = 10, distance = 1)
knnProb <- data.frame(predict(knn, test, type = "prob"))
test$catégoriePrédite1 <- (colnames(knnProb)[max.col(knnProb)])

knn <- kknn(as.factor(categorie) ~ ., train, test, k = 10, distance = 2)
knnProb <- data.frame(predict(knn, test, type = "prob"))
test$catégoriePrédite2 <- (colnames(knnProb)[max.col(knnProb)])

knn <- kknn(as.factor(categorie) ~ ., train, test, k = 20, distance = 1)
knnProb <- data.frame(predict(knn, test, type = "prob"))
test$catégoriePrédite3 <- (colnames(knnProb)[max.col(knnProb)])

knn <- kknn(as.factor(categorie) ~ ., train, test, k = 20, distance = 2)
knnProb <- data.frame(predict(knn, test, type = "prob"))
test$catégoriePrédite4 <- (colnames(knnProb)[max.col(knnProb)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
tauxSucces1 <- nrow(test[test$categorie == test$catégoriePrédite1, ]) / nrow(test)
tauxSucces2 <- nrow(test[test$categorie == test$catégoriePrédite2, ]) / nrow(test)
tauxSucces3 <- nrow(test[test$categorie == test$catégoriePrédite3, ]) / nrow(test)
tauxSucces4 <- nrow(test[test$categorie == test$catégoriePrédite4, ]) / nrow(test)
