## Fusion des données clients et immatriculations

#--------------------------------------------#
# INSTALLATION/MAJ DES LIRAIRIES NECESSAIRES #
#--------------------------------------------#
install.packages("dplyr")

#--------------------------------------#
# ACTIVATION DES LIRAIRIES NECESSAIRES #
#--------------------------------------#
library(dplyr)

#-------------------------#
# PREPARATION DES DONNEES #
#-------------------------#
# Chargement des données
clients1 <- read.csv(
    dec = ".",
    file = "Clients_2.csv",
    header = TRUE,
    sep = ",",
    stringsAsFactors = FALSE,
    fileEncoding = "CP1252"
)
clients2 <- read.csv(
    dec = ".",
    file = "Clients_10.csv",
    header = TRUE,
    sep = ",",
    stringsAsFactors = FALSE,
    fileEncoding = "CP1252"
)
immatriculations <- read.csv(
    dec = ".",
    file = "Immatriculations.csv",
    header = TRUE,
    sep = ",",
    stringsAsFactors = FALSE,
    fileEncoding = "UTF-8"
)

#----------------------------#
# FUSION DES DONNÉES CLIENTS #
#----------------------------#
clients <- rbind(clients1, clients2)

# Enregistrement du fichier de resultats au format csv
write.table(clients, file = "Clients.csv", sep = ",", dec = ".", row.names = F)

clients <- read.csv(
  dec = ".",
  file = "Clients.csv",
  header = TRUE,
  sep = ",",
  stringsAsFactors = FALSE,
  fileEncoding = "UTF-8"
)

#------------------------------------------------#
# FUSION DES DONNÉES CLIENTS ET IMMATRICULATIONS #
#------------------------------------------------#
# Jointure des dataframe clients et immatriculations en ne considérant que les modalités communes de la variable de jointure
# https://delladata.fr/fusionner-deux-tableaux-de-donnees-par-leurs-colonnes-les-jointures/
clientsImmatriculations <- inner_join(clients, immatriculations, by = "immatriculation")

# Suppression des duplicates
clientsImmatriculations <- clientsImmatriculations[!duplicated(clientsImmatriculations), ]

# Enregistrement du fichier de resultats au format csv
write.table(clientsImmatriculations, file = "ClientsImmatriculations.csv", sep = ",", dec = ".", row.names = F)
