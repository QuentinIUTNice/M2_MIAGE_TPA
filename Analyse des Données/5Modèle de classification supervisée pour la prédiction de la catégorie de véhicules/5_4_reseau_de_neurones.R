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
# Definition de la fonction d'apprentissage, test et evaluation par courbe ROC
test_nnet <- function(arg1, arg2, arg3){
  # Redirection de l'affichage des messages intermédiaires vers un fichier texte
  sink('output.txt', append=T)
  
  # Apprentissage du classifeur 
  nn <- nnet(as.factor(categorie)~., train, size = arg1, decay = arg2, maxit=arg3)
  
  # Réautoriser l'affichage des messages intermédiaires
  sink(file = NULL)
  
  # Test du classifeur : classe predite
  nn_class <- predict(nn, test, type="class")
  
  # Matrice de confusion
  print(table(test$categorie, nn_class))
  
  # Test des classifeurs : probabilites pour chaque prediction
  nn_prob <- predict(nn, test, type="raw")
  
  # Return ans affichage sur la console
  invisible()
}

#-------------------------------------------------#
# APPRENTISSAGE DES CONFIGURATIONS ALGORITHMIQUES #
#-------------------------------------------------#
# Réseaux de neurones nnet()
test_nnet(50, 0.01, 100)
test$categorie_predite_1 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(50, 0.01, 300)
test$categorie_predite_2 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(25, 0.01, 100)
test$categorie_predite_3 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(25, 0.01, 300)
test$categorie_predite_4 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(50, 0.001, 100)
test$categorie_predite_5 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(50, 0.001, 300)
test$categorie_predite_6 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(25, 0.001, 100)
test$categorie_predite_7 <- (colnames(nn_prob)[max.col(nn_prob)])
test_nnet(25, 0.001, 300)
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
