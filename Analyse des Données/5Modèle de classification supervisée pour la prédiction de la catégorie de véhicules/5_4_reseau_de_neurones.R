## Réseau de neurones

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("nnet")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(nnet)

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

#--------------------#
# Réseau de neurones #
#--------------------#
nn <- nnet(as.factor(categorie) ~ ., train, size = 50, decay = 0.01, maxit = 100)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite1 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 50, decay = 0.01, maxit = 300)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite2 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 25, decay = 0.01, maxit = 100)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite3 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 25, decay = 0.01, maxit = 300)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite4 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 50, decay = 0.001, maxit = 100)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite5 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 50, decay = 0.001, maxit = 300)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite6 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 25, decay = 0.001, maxit = 100)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite7 <- (colnames(nnProb)[max.col(nnProb)])

nn <- nnet(as.factor(categorie) ~ ., train, size = 25, decay = 0.001, maxit = 300)
nnClass <- predict(nn, test, type = "class")
print(table(test$categorie, nnClass))
nnProb <- predict(nn, test, type = "raw")
test$catégoriePrédite8 <- (colnames(nnProb)[max.col(nnProb)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
tauxSucces1 <- nrow(test[test$categorie == test$catégoriePrédite1, ]) / nrow(test)
tauxSucces2 <- nrow(test[test$categorie == test$catégoriePrédite2, ]) / nrow(test)
tauxSucces3 <- nrow(test[test$categorie == test$catégoriePrédite3, ]) / nrow(test)
tauxSucces4 <- nrow(test[test$categorie == test$catégoriePrédite4, ]) / nrow(test)
tauxSucces5 <- nrow(test[test$categorie == test$catégoriePrédite5, ]) / nrow(test)
tauxSucces6 <- nrow(test[test$categorie == test$catégoriePrédite6, ]) / nrow(test)
tauxSucces7 <- nrow(test[test$categorie == test$catégoriePrédite7, ]) / nrow(test)
tauxSucces8 <- nrow(test[test$categorie == test$catégoriePrédite8, ]) / nrow(test)
