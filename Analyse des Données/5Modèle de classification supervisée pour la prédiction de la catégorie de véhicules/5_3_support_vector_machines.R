## Support vector machines

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("caret")
install.packages("e1071")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(caret)
library(e1071)

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

#-------------------------#
# SUPPORT VECTOR MACHINES #
#-------------------------#
svmLinear <- svm(as.factor(categorie) ~ ., train, probability = TRUE, kernel = "linear")
svmPolynomial <- svm(as.factor(categorie) ~ ., train, probability = TRUE, kernel = "polynomial")
svmRadial <- svm(as.factor(categorie) ~ ., train, probability = TRUE, kernel = "radial")
svmSigmoid <- svm(as.factor(categorie) ~ ., train, probability = TRUE, kernel = "sigmoid")

# Test du classifeur : classe predite
svmLinearClass <- predict(svmLinear, test, type = "response")
svmPolynomialClass <- predict(svmPolynomial, test, type = "response")
svmRadialClass <- predict(svmRadial, test, type = "response")
svmSigmoidClass <- predict(svmSigmoid, test, type = "response")

# Matrice de confusion
print(table(test$categorie, svmLinearClass))
print(table(test$categorie, svmPolynomialClass))
print(table(test$categorie, svmRadialClass))
print(table(test$categorie, svmSigmoidClass))

# Test du classifeur : probabilites pour chaque prediction
svmLinearProb <- predict(svmLinear, test, probability = TRUE)
svmPolynomialProb <- predict(svmPolynomial, test, probability = TRUE)
svmRadialProb <- predict(svmRadial, test, probability = TRUE)
svmSigmoidProb <- predict(svmSigmoid, test, probability = TRUE)

# Recuperation des probabilites associees aux predictions
svmLinearProb <- attr(svmLinearProb, "probabilities")
svmPolynomialProb <- attr(svmPolynomialProb, "probabilities")
svmRadialProb <- attr(svmRadialProb, "probabilities")
svmSigmoidProb <- attr(svmSigmoidProb, "probabilities")

test$catégoriePréditeLinear <- (colnames(svmLinearProb)[max.col(svmLinearProb)])
test$catégoriePréditePolynomial <- (colnames(svmPolynomialProb)[max.col(svmPolynomialProb)])
test$catégoriePréditeRadial <- (colnames(svmRadialProb)[max.col(svmRadialProb)])
test$catégoriePréditeSigmoid <- (colnames(svmSigmoidProb)[max.col(svmSigmoidProb)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
tauxSuccesLinear <- nrow(test[test$categorie == test$catégoriePréditeLinear, ]) / nrow(test)
tauxSuccesPolynomial <- nrow(test[test$categorie == test$catégoriePréditePolynomial, ]) / nrow(test)
tauxSuccesRadial <- nrow(test[test$categorie == test$catégoriePréditeRadial, ]) / nrow(test)
tauxSuccesSigmoid <- nrow(test[test$categorie == test$catégoriePréditeSigmoid, ]) / nrow(test)

#----------------------#
# MATRICE DE CONFUSION #
#----------------------#
prediction <- predict(svmRadial, test)
confusionMatrix(prediction, as.factor(test$categorie))
