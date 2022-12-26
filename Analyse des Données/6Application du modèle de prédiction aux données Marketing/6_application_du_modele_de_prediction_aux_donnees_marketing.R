## Application du modèle de prédiction aux données Marketing

# Chargement des données


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
marketing <- read.csv(dec = ".", file = "marketing.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

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

#--------------------------------#
# APPRENTISSAGE DE L'ARBRE RPART #
#--------------------------------#
# Construction de l'arbre de decision
tree <- rpart(categorie~., clients_immatriculations)

# Affichage de l'arbre par les fonctions de base de R
plot(tree)
text(tree, pretty = 0)

#-------------------------------------------#
# GENERATION DES PROBABILITES DE PREDICTION #
#-------------------------------------------#
# Generation de la classe prédite pour chaque exemple de test pour l'arbre 'tree1'
test_tree <- predict(tree, marketing, type="class")

# Generation des probabilites pour chaque exemple de test pour l'arbre 'tree1'
prob_tree <- data.frame(predict(tree, marketing, type="prob"))

marketing$categorie <- (colnames(prob_tree)[max.col(prob_tree)])

# Enregistrement du fichier de resultats au format csv
write.table(marketing, file="Marketing_prédit.csv", sep=",", dec=".", row.names = F)
