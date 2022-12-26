## Arbre de décision

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("rpart")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(rpart)

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

#--------------------------------#
# APPRENTISSAGE DE L'ARBRE RPART #
#--------------------------------#
# Construction de l'arbre de decision
tree <- rpart(categorie~., train)

# Affichage de l'arbre par les fonctions de base de R
plot(tree)
text(tree, pretty = 0)

#-------------------------------------------#
# GENERATION DES PROBABILITES DE PREDICTION #
#-------------------------------------------#
# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'tree1'
test_tree <- predict(tree, test, type="class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
prob_tree <- data.frame(predict(tree, test, type="prob"))

test$categorie_predite <- (colnames(prob_tree)[max.col(prob_tree)])

#---------------------------#
# CALCUL DES TAUX DE SUCCES #
#---------------------------#
taux_succes <- nrow(test[test$categorie==test$categorie_predite,])/nrow(test)
taux_succes
