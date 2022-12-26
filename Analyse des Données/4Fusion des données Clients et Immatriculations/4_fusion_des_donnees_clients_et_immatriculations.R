## Fusion des données clients et immatriculations

# Chargement des données
clients1 <- read.csv(dec = ".", file = "Clients_2.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)
clients2 <- read.csv(dec = ".", file = "Clients_10.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)
immatriculations <- read.csv(dec = ".", file = "Immatriculations_predites.csv", header = TRUE, sep = ",", stringsAsFactors = FALSE)

# Fusion des dataframes clients
clients <- rbind(clients1, clients2)

# Jointure des dataframe clients et immatriculations
# en ne considérant que les modalités communes de la variable de jointure
# https://delladata.fr/fusionner-deux-tableaux-de-donnees-par-leurs-colonnes-les-jointures/
install.packages("dplyr")
library(dplyr)

df_ij <- inner_join(clients, immatriculations, by="immatriculation")

# Suppression des duplicates
df_clients_immatriculations <- unique(df_ij)

# Enregistrement du fichier de resultats au format csv
write.table(df_ij, file="Clients_immatriculations.csv", sep=",", dec=".", row.names = F)
