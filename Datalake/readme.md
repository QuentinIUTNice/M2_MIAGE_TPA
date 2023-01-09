 
# ARCHITECTURE OF OUR PROJET
 Afin de traiter ces données de quantité massive, nons avons choisi de les répartir sur ces trois sources données complétement indépendantes notamment:
 
- **Oracle NoSQL**:contient les tables **clients** et **immatriculations**
- **MongoDB**: contient la table **catalogue**
- **HDFS**: contient les fichiers **co2** et **marketing**

Rgerouper ces différentes données réparties sur différents SGBD en un seul est le role de **Hive**. Nous avons ainsi créer des tables externes qui pointent respectivement sur chaque table en fonction de son emplacement( sur Oracle NoSQL avec KV, sur Mongo ou sur HDFS). 

Pour ce faire nous avons procédé comme suit:

# Data source_1: Oracle NoSQL Database (KVStore)

Pour placer les données clients et immatriculations dans le serveur Oracle NOSQL, nous avons developpé le programme java se trouvant dans le fichier Tpa.java présent dans ce dossier. Pour l'utiliser, veuillez suivre les instructions suivantes:

**Launch vagrant:**

 ``` vagrant up ```

**Connect to the VM:**

  ``` vagrant ssh ```

**Access to vagrant directory:**

  ``` cd /vagrant ```

**Start kv:** 

  ``` nohup java -Xmx64m -Xms64m -jar $KVHOME/lib/kvstore.jar kvlite -secure-config disable -root $KVROOT & ```

**Ping kv:**

  ``` java -Xmx64m -Xms64m -jar $KVHOME/lib/kvstore.jar ping -host localhost -port 5000 ```


**Compile the file Tpa.java:**

  ``` javac -g -cp $KVHOME/lib/kvclient.jar:. Tpa.java ```

**Execute the file Tpa.java:**

 ``` java -Xmx256m -Xms256m  -cp $KVHOME/lib/kvclient.jar:. Tpa ```


**Check if the tables have been created with success:**

 ``` java -Xmx64m -Xms64m -jar $KVHOME/lib/sql.jar -helper-hosts localhost:5000 -store kvstore ```



 ``` select * from clients; ```


 ```select * from immatriculations; ```



 **Start hive:**
```bash
nohup hive --service metastore > /dev/null &
nohup hiveserver2 > /dev/null &
beeline -u jdbc:hive2://localhost:10000 vagrant
```
**Query KVStore from Hive**

**_External table CLIENT_**

```bash
CREATE EXTERNAL TABLE IF NOT EXISTS CLIENT_EXT  (
CLIENTID INTEGER,
AGE INTEGER,
SEXE STRING,
TAUX INTEGER,
SITUATION_FAMILIALE STRING,
NB_ENFANTS  INTEGER,
VOITURE BOOLEAN,
IMMATRICULATION STRING)
STORED BY 'oracle.kv.hadoop.hive.table.TableStorageHandler'
TBLPROPERTIES (
    "oracle.kv.kvstore" = "kvstore",
    "oracle.kv.hosts" = "localhost:5000",
    "oracle.kv.tableName" = "clients"
);
```



**_External table Immatriculation_**

```bash
CREATE EXTERNAL TABLE IF NOT EXISTS IMMATRICULATION_EXT  (
IMMATRICULATIONID INTEGER,
IMMATRICULATION STRING,
MARQUE STRING,
NOM STRING,
PUISSANCE INTEGER,
LONGUEUR STRING,
NB_PLACES  INTEGER,
NB_PORTES INTEGER,
COULEUR STRING,
OCCASION BOOLEAN,
PRIX FLOAT
)
STORED BY 'oracle.kv.hadoop.hive.table.TableStorageHandler'
TBLPROPERTIES (
    "oracle.kv.kvstore" = "kvstore",
    "oracle.kv.hosts" = "localhost:5000",
    "oracle.kv.tableName" = "immatriculations"
);
```
 **Check the data on Hive:**

  ```bash
  SELECT * FROM CLIENT_EXT;
  SELECT * FROM IMMATRICULATION_EXT;
  ```

# Data source_2: Mongo
**Importing the data into mongo**

```bash
vagrant ssh
cd /vagrant
 mongoimport -d mbds_22 -c catalogue --type csv --file Catalogue.csv --headerline
 ```

 **Check if the data has been imported successfully**
 ```bash
sudo systemctl start mongod
mongo
show dbs
use mbds_22
show collections
db.catalogue.find()
```
**Connect to hive:**

```bash
start-dfs.sh
start-yarn.sh
nohup hive --service metastore > /dev/null &
nohup hiveserver2 > /dev/null &
beeline -u jdbc:hive2://localhost:10000 vagrant
```

**In case of error due to MongoStorageHandler:** 

```bash 
ADD JAR /usr/local/mongo-hadoop/core/build/libs/mongo-hadoop-core-2.0.2.jar;
ADD JAR /usr/local/hive/lib/mongo-java-driver-3.2.1.jar;
ADD JAR /usr/local/mongo-hadoop/hive/build/libs/mongo-hadoop-hive-2.0.2.jar;
```

**Create external table: Query Mongo from Hive**

```bash
CREATE EXTERNAL TABLE IF NOT EXISTS CATALOGUE_EXTERNE_MG  (
MARQUE STRING,
NOM STRING,
PUISSANCE INTEGER,
LONGUEUR STRING,
NB_PLACES  INTEGER,
NB_PORTES INTEGER,
COULEUR STRING,
OCCASION STRING,
PRIX FLOAT,
MOYENNE_COUT_ENERGIE FLOAT,
MOYENNE_REJET FLOAT,
MOYENNE_BONUS_MALUS FLOAT
)
STORED BY 'com.mongodb.hadoop.hive.MongoStorageHandler'
WITH SERDEPROPERTIES('mongo.columns.mapping'='{"CATALOGUEID":"_id", "LONGUEUR" : "longueur", "NB_PLACES" : "nbPlaces", "NB_PORTES" : "nbPortes", "COULEUR" : "couleur", "OCCASION" : "occasion", "PRIX" : "prix","MOYENNE_COUT_ENERGIE " : "Moyenne cout energie ", "MOYENNE_REJET" : "Moyenne Rejet  CO2", "MOYENNE_BONUS_MALUS" : "Moyenne Bonus Malus"}')
TBLPROPERTIES('mongo.uri'='mongodb://localhost:27017/mbds_22.catalogue');
```
**SHOW EXTERNAL TABLE**

```SELECT * FROM CATALOGUE_EXTERNE_MG;```

# Data source_3: HDFS
**Start hadoop:**
```bash
start-dfs.sh
start-yarn.sh
```

**Put file Marketing.csv on hadoop et check it:**
```bash 
hadoop fs -put Marketing.csv /secrets
hadoop fs -put co2.csv /secrets
hadoop fs -ls /secrets
```


**Start hive:**
```bash
nohup hive --service metastore > /dev/null &
nohup hiveserver2 > /dev/null &
beeline -u jdbc:hive2://localhost:10000 vagrant
```
**Create external table: Query HDFS from Hive**
**_Marketing_**

```bash
CREATE EXTERNAL TABLE  IF NOT EXISTS MARKETING_EXTERNE_H (
AGE int,
SEXE string,
TAUX int,
SITUATION_FAMILIALE string,
NB_ENFANTS  int,
VOITURE boolean
)
ROW FORMAT DELIMITED 
FIELDS TERMINATED BY ','
STORED AS TEXTFILE
LOCATION '/secrets';
```

```LOAD DATA INPATH '/secrets/Marketing.csv' INTO TABLE MARKETING_EXTERNE_H;```

**Check on the creation of the table**

```SELECT * FROM MARKETING_EXTERNE_H;```


**_CO2_**

```bash
CREATE EXTERNAL TABLE  IF NOT EXISTS CO2_EXTERNE_H (
CO2ID INTEGER, 
MARQUE STRING,
MODELE STRING,
BONUS_MALUS FLOAT,
REJET_CO2 FLOAT,
COUT_ENERGIE FLOAT
)
ROW FORMAT DELIMITED 
FIELDS TERMINATED BY ','
STORED AS TEXTFILE
LOCATION '/secrets';
```

```LOAD DATA INPATH '/secrets/co2.csv' INTO TABLE CO2_EXTERNE_H;```


**Check on the creation of the table**

```SELECT * FROM CO2_EXTERNE_H;```






