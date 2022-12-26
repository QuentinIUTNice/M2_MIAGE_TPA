## Support vector machines

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("e1071")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(e1071)

#-------------------------#
# PREPARATION DES DONNEES #
#-------------------------#
clients_immatriculations <- read.csv(dec = ".", file = "Clients_immatriculations.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

clients_immatriculations <- subset(clients_immatriculations, select=-X2eme.voiture)
clients_immatriculations <- subset(clients_immatriculations, select=-immatriculation)
clients_immatriculations <- subset(clients_immatriculations, select=-marque)
clients_immatriculations <- subset(clients_immatriculations, select=-nom)
clients_immatriculations <- subset(clients_immatriculations, select=-puissance)
clients_immatriculations <- subset(clients_immatriculations, select=-longueur)
clients_immatriculations <- subset(clients_immatriculations, select=-nbPlaces)
clients_immatriculations <- subset(clients_immatriculations, select=-nbPortes)
clients_immatriculations <- subset(clients_immatriculations, select=-couleur)
clients_immatriculations <- subset(clients_immatriculations, select=-occasion)
clients_immatriculations <- subset(clients_immatriculations, select=-prix)

#----------------#
# DATA PARTITION #
# -------------- #
set.seed(222)
ind <- sample(2, nrow(clients_immatriculations), replace = TRUE, prob = c(0.3, 0.7))
train <- clients_immatriculations[ind==1,]
test <- clients_immatriculations[ind==2,]

#-------------------------#
# SUPPORT VECTOR MACHINES #
#-------------------------#
svm_linear <- svm(as.factor(categorie)~., train, probability=TRUE, kernel = "linear")
svm_polynomial <- svm(as.factor(categorie)~., train, probability=TRUE, kernel = "polynomial")
svm_radial <- svm(as.factor(categorie)~., train, probability=TRUE, kernel = "radial")
svm_sigmoid <- svm(as.factor(categorie)~., train, probability=TRUE, kernel = "sigmoid")

# Test du classifeur : classe predite
svm_linear_class <- predict(svm_linear, test, type="response")
svm_polynomial_class <- predict(svm_polynomial, test, type="response")
svm_radial_class <- predict(svm_radial, test, type="response")
svm_sigmoid_class <- predict(svm_sigmoid, test, type="response")

# Matrice de confusion
print(table(test$categorie, svm_linear_class))
print(table(test$categorie, svm_polynomial_class))
print(table(test$categorie, svm_radial_class))
print(table(test$categorie, svm_sigmoid_class))

# Test du classifeur : probabilites pour chaque prediction
svm_linear_prob <- predict(svm_linear, test, probability=TRUE)
svm_polynomial_prob <- predict(svm_polynomial, test, probability=TRUE)
svm_radial_prob <- predict(svm_radial, test, probability=TRUE)
svm_sigmoid_prob <- predict(svm_sigmoid, test, probability=TRUE)

# Recuperation des probabilites associees aux predictions
svm_linear_prob <- attr(svm_linear_prob, "probabilities")
svm_polynomial_prob <- attr(svm_polynomial_prob, "probabilities")
svm_radial_prob <- attr(svm_radial_prob, "probabilities")
svm_sigmoid_prob <- attr(svm_sigmoid_prob, "probabilities")

test$categorie_predite_linear <- (colnames(svm_linear_prob)[max.col(svm_linear_prob)])
test$categorie_predite_polynomial <- (colnames(svm_polynomial_prob)[max.col(svm_polynomial_prob)])
test$categorie_predite_radial <- (colnames(svm_radial_prob)[max.col(svm_radial_prob)])
test$categorie_predite_sigmoid <- (colnames(svm_sigmoid_prob)[max.col(svm_sigmoid_prob)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes_linear <- nrow(test[test$categorie==test$categorie_predite_linear,])/nrow(test)
taux_succes_polynomial <- nrow(test[test$categorie==test$categorie_predite_polynomial,])/nrow(test)
taux_succes_radial <- nrow(test[test$categorie==test$categorie_predite_radial,])/nrow(test)
taux_succes_sigmoid <- nrow(test[test$categorie==test$categorie_predite_sigmoid,])/nrow(test)

#----------------------#
# MATRICE DE CONFUSION #
#----------------------#
prediction <- predict(svm_radial, test)
confusionMatrix(prediction, as.factor(test$categorie))
