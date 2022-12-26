## Random forests

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("randomForest")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(randomForest)

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

#---------------#
# RANDOM FOREST #
#---------------#
randomForest <- randomForest(as.factor(categorie)~., data = train, proximity = TRUE)
randomForest_class <- predict(randomForest, test, type="response")

print(table(test$categorie, randomForest_class))

randomForest_prob <- predict(randomForest, test, type="prob")

test$categorie_predite <- (colnames(randomForest_prob)[max.col(randomForest_prob)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes <- nrow(test[test$categorie==test$categorie_predite,])/nrow(test)
taux_succes

#----------------------#
# MATRICE DE CONFUSION #
#----------------------#
prediction <- predict(randomForest, test)
confusionMatrix(prediction, as.factor(test$categorie))
