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

#--------------------#
# Réseau de neurones #
#--------------------#
nn <- nnet(as.factor(categorie)~., train, size = 50, decay = 0.01, maxit=100)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_1 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 50, decay = 0.01, maxit=300)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_2 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 25, decay = 0.01, maxit=100)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_3 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 25, decay = 0.01, maxit=300)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_4 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 50, decay = 0.001, maxit=100)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_5 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 50, decay = 0.001, maxit=300)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_6 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 25, decay = 0.001, maxit=100)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_7 <- (colnames(nn_prob)[max.col(nn_prob)])

nn <- nnet(as.factor(categorie)~., train, size = 25, decay = 0.001, maxit=300)
nn_class <- predict(nn, test, type="class")
print(table(test$categorie, nn_class))
nn_prob <- predict(nn, test, type="raw")
test$categorie_predite_8 <- (colnames(nn_prob)[max.col(nn_prob)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes_1 <- nrow(test[test$categorie==test$categorie_predite_1,])/nrow(test)
taux_succes_2 <- nrow(test[test$categorie==test$categorie_predite_2,])/nrow(test)
taux_succes_3 <- nrow(test[test$categorie==test$categorie_predite_3,])/nrow(test)
taux_succes_4 <- nrow(test[test$categorie==test$categorie_predite_4,])/nrow(test)
taux_succes_5 <- nrow(test[test$categorie==test$categorie_predite_5,])/nrow(test)
taux_succes_6 <- nrow(test[test$categorie==test$categorie_predite_6,])/nrow(test)
taux_succes_7 <- nrow(test[test$categorie==test$categorie_predite_7,])/nrow(test)
taux_succes_8 <- nrow(test[test$categorie==test$categorie_predite_8,])/nrow(test)
