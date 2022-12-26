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

#---------------------#
# K-NEAREST NEIGHBORS #
#---------------------#
knn <- kknn(as.factor(categorie)~., train, test, k = 10, distance = 1)
knn_prob <- data.frame(predict(knn, test, type="prob"))
test$categorie_predite_1 <- (colnames(knn_prob)[max.col(knn_prob)])

knn <- kknn(as.factor(categorie)~., train, test, k = 10, distance = 2)
knn_prob <- data.frame(predict(knn, test, type="prob"))
test$categorie_predite_2 <- (colnames(knn_prob)[max.col(knn_prob)])

knn <- kknn(as.factor(categorie)~., train, test, k = 20, distance = 1)
knn_prob <- data.frame(predict(knn, test, type="prob"))
test$categorie_predite_3 <- (colnames(knn_prob)[max.col(knn_prob)])

knn <- kknn(as.factor(categorie)~., train, test, k = 20, distance = 2)
knn_prob <- data.frame(predict(knn, test, type="prob"))
test$categorie_predite_4 <- (colnames(knn_prob)[max.col(knn_prob)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes_1 <- nrow(test[test$categorie==test$categorie_predite_1,])/nrow(test)
taux_succes_2 <- nrow(test[test$categorie==test$categorie_predite_2,])/nrow(test)
taux_succes_3 <- nrow(test[test$categorie==test$categorie_predite_3,])/nrow(test)
taux_succes_4 <- nrow(test[test$categorie==test$categorie_predite_4,])/nrow(test)
