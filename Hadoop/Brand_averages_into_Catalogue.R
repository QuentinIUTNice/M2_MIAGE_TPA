# Use first row as columns name
header.true <- function(df) {
  names(df) <- as.character(unlist(df[1,]))
  df[-1,]
}
averages_per_brand <- header.true(averages_per_brand)

#Create new columns
empty_cols <- c("Moyenne cout energie", "Moyenne Rejet CO2", "Moyenne Bonus Malus")
Catalogue[ , empty_cols] <- NA

for(i in 1:nrow(Catalogue)) {
  #Get row
  row <- Catalogue[i,]

  #Add value from averages_per_brand file to the good column id field
  row[10] <- averages_per_brand$"Moyenne cout energie"[averages_per_brand$"Marque"==toupper(row[1])]
  row[11] <- averages_per_brand$"Moyenne rejet CO2"[averages_per_brand$"Marque"==toupper(row[1])]
  row[12] <- averages_per_brand$"Moyenne Bonus Malus"[averages_per_brand$"Marque"==toupper(row[1])]
  
  #Replace modified row into Catalogue dataframe
  Catalogue[i,] <- row
}

write.csv(Catalogue,"D:\\Users\\Anthony\\Desktop\\M2_miage\\S1\\tpa\\Catalogue_with_averages.csv", row.names = FALSE, quote=FALSE)




