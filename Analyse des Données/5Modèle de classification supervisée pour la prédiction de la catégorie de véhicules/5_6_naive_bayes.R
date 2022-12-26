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
clients_immatriculations <- read.csv(dec = ".", file = "Clients_immatriculations.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

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

#-------------#
# NAIVE BAYES #
#-------------#
nb <- naive_bayes(categorie~., train, laplace = 0, usekernel = FALSE)
nb_class <- predict(nb, test, type="class")
print(table(test$categorie, nb_class))
nb_prob <- predict(nb, test, type="prob")
test$categorie_predite_1 <- (colnames(nb_prob)[max.col(nb_prob)])

nb <- naive_bayes(categorie~., train, laplace = 20, usekernel = FALSE)
nb_class <- predict(nb, test, type="class")
print(table(test$categorie, nb_class))
nb_prob <- predict(nb, test, type="prob")
test$categorie_predite_2 <- (colnames(nb_prob)[max.col(nb_prob)])

nb <- naive_bayes(categorie~., train, laplace = 0, usekernel = TRUE)
nb_class <- predict(nb, test, type="class")
print(table(test$categorie, nb_class))
nb_prob <- predict(nb, test, type="prob")
test$categorie_predite_3 <- (colnames(nb_prob)[max.col(nb_prob)])

nb <- naive_bayes(categorie~., train, laplace = 20, usekernel = TRUE)
nb_class <- predict(nb, test, type="class")
print(table(test$categorie, nb_class))
nb_prob <- predict(nb, test, type="prob")
test$categorie_predite_4 <- (colnames(nb_prob)[max.col(nb_prob)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes_1 <- nrow(test[test$categorie==test$categorie_predite_1,])/nrow(test)
taux_succes_2 <- nrow(test[test$categorie==test$categorie_predite_2,])/nrow(test)
taux_succes_3 <- nrow(test[test$categorie==test$categorie_predite_3,])/nrow(test)
taux_succes_4 <- nrow(test[test$categorie==test$categorie_predite_4,])/nrow(test)

#----------------------#
# MATRICE DE CONFUSION #
#----------------------#
prediction <- predict(nb, test)
confusionMatrix(prediction, as.factor(test$categorie))
