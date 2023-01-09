
import oracle.kv.KVStore;
import java.util.List;
import java.util.Iterator;
import oracle.kv.KVStoreConfig;
import oracle.kv.KVStoreFactory;
import oracle.kv.FaultException;
import oracle.kv.StatementResult;
import oracle.kv.table.TableAPI;
import oracle.kv.table.Table;
import oracle.kv.table.Row;
import oracle.kv.table.PrimaryKey;
import oracle.kv.ConsistencyException;
import oracle.kv.RequestTimeoutException;
import java.lang.Integer;
import oracle.kv.table.TableIterator;
import oracle.kv.table.EnumValue;
import java.io.File;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;

import java.util.StringTokenizer;
import java.util.ArrayList;
import java.util.List;



/**
 * Cette classe fournit les fonctions nécessaires pour gérer les tables.
 * La fonction void executeDDL(String statement) reçoit en paramètre 
 * une commande ddl et l'applique dans la base nosql.
 * La displayResult affiche l'état de l'exécution de la commande
 * la fonction createTableClient permet de créer une table client>.
 */

 
 public class Tpa {
    private final KVStore store;
	private final String myTpPath="C:/final/vagrant-projects/OracleDatabase/21.3.0"; 
	

	private final String tabCO2="co2";
	private final String tabClients="clients";
	private final String tabImmatriculations="immatriculations";
    private final String tabCatalogue="catalogue";
    private final String tabMarketing="marketing";

	
    /**
     * Runs the DDL command line program.
     */
    public static void main(String args[]) {
        try {
            	Tpa tpa= new Tpa(args);
		tpa.iniTpaTablesAndData(tpa);

		/*tpa.getCO2ByKey(1);
		tpa.getClientByKey(1);
        tpa.getImmatriculationByKey(1);
		tpa.getCatalogueByKey(1);
        tpa.getMarketingByKey(1);*/


		
		tpa.getImmatriculationRows();
		tpa.getClientRows();
    


        } catch (RuntimeException e) {
            e.printStackTrace();
        }
    }
    /**
     * Parses command line args and opens the KVStore.
     */
	Tpa(String[] argv) {

		String storeName = "kvstore";
		String hostName = "localhost";
		String hostPort = "5000";

		final int nArgs = argv.length;
		int argc = 0;
		store = KVStoreFactory.getStore
		    (new KVStoreConfig(storeName, hostName + ":" + hostPort));
	}

	
/**
* Affichage du résultat pour les commandes DDL (CREATE, ALTER, DROP)
*/

	private void displayResult(StatementResult result, String statement) {
		System.out.println("===========================");
		if (result.isSuccessful()) {
			System.out.println("Statement was successful:\n\t" +
			statement);
			System.out.println("Results:\n\t" + result.getInfo());
		} else if (result.isCancelled()) {
			System.out.println("Statement was cancelled:\n\t" +
			statement);
		} else {
			/*
			* statement was not successful: may be in error, or may still
			* be in progress.
			*/
			if (result.isDone()) {
				System.out.println("Statement failed:\n\t" + statement);
				System.out.println("Problem:\n\t" +
				result.getErrorMessage());
			}
			else {

				System.out.println("Statement in progress:\n\t" +
				statement);
				System.out.println("Status:\n\t" + result.getInfo());
			}
		}
	}
	
	/*
		La méthode iniTpaTablesAndData permet :
		- de supprimer les tables si elles existent
		- de créer des tables
		- Insérer des critères
		- et charger les clients et les appréciations
	**/

	public void iniTpaTablesAndData( Tpa tpa) {
		
	
		tpa.dropTableClient();
        tpa.dropTableImmatriculation();
      

		
		tpa.createTableClient();
        tpa.createTableImmatriculations();
     

		tpa.loadClientDataFromFile("./Clients.csv");
		
        tpa.loadImmatriculationsDataFromFile("./Immatriculations.csv");
    


	}

	
	

	/**
		public void dropTableClient()
		M&thode de suppression de la table client.
	*/	
	public void dropTableClient() {
		String statement = null;
		
		statement ="drop table "+tabClients;
		executeDDL(statement);
	}

	
	public void dropTableImmatriculation() {
		String statement = null;
		
		statement ="drop table "+tabImmatriculations;
		executeDDL(statement);
	}


	
	/**
		public void createTableClient()
		M&thode de création de la table client.
	*/

	public void createTableClient() {
		String statement = null;
		statement="create table "+tabClients+" ("
		+"ClIENTID INTEGER,"
		+"AGE INTEGER,"
		+"SEXE STRING,"
		+"TAUX INTEGER,"
		+"SITUATION_FAMILIALE STRING,"
		+"NB_ENFANTS  INTEGER,"
		+"VOITURE BOOLEAN,"
		+"IMMATRICULATION STRING,"
		+"PRIMARY KEY(ClIENTID))";
		executeDDL(statement);
		
	}

	public void createTableImmatriculations() {
		String statement = null;
		statement ="create table " + tabImmatriculations+ "  ("
		+"IMMATRICULATIONID INTEGER,"
		+"IMMATRICULATION STRING,"
		+"MARQUE STRING,"
		+"NOM STRING,"
		+"PUISSANCE INTEGER,"
		+"LONGUEUR STRING,"
		+"NB_PLACES  INTEGER,"
		+"NB_PORTES INTEGER,"
		+"COULEUR STRING,"
		+"OCCASION BOOLEAN,"
		+"PRIX FLOAT,"
		+"PRIMARY KEY(IMMATRICULATIONID))";
		executeDDL(statement);
		
	}



	/**
		public void executeDDL(String statement)
		méthode générique pour executer les commandes DDL
	*/
	public void executeDDL(String statement) {
		TableAPI tableAPI = store.getTableAPI();
		StatementResult result = null;
		
		System.out.println("****** Dans : executeDDL ********" );
		try {
		/*
		* Add a table to the database.
		* Execute this statement asynchronously.
		*/
		
		result = store.executeSync(statement);
		displayResult(result, statement);
		} catch (IllegalArgumentException e) {
		System.out.println("Invalid statement:\n" + e.getMessage());
		} catch (FaultException e) {
		System.out.println("Statement couldn't be executed, please retry: " + e);
		}
	}

	/**	
		private void insertACO2Row(int co2id, String marque, String modele, Float bonus_malus, Float rejet_co2, Float cout_energie)
		Cette méthode insère une nouvelle ligne dans la table CRITERES
	*/

	

	/**
		private void insertAClientRow(int clientid, String nom, String prenom, String codePostal, String ville, 
			String adresse, String telephone, String anneeNaiss)
		Cette méthode insère une nouvelle ligne dans la table CLIENT
	*/

	private void insertAClientRow(Integer clientid, Integer age, String sexe, Integer taux, String situation_familiale, 
			Integer nb_enfants, Boolean voiture, String immatriculation){
		//TableAPI tableAPI = store.getTableAPI();
		StatementResult result = null;
		String statement = null;
		System.out.println("********************************** Dans : insertAClientRow *********************************" );

		try {

			TableAPI tableH = store.getTableAPI();
			// The name you give to getTable() must be identical
			// to the name that you gave the table when you created
			// the table using the CREATE TABLE DDL statement.
			Table tableClient = tableH.getTable(tabClients);
			
			// Get a Row instance
			Row clientRow = tableClient.createRow();
			// Now put all of the cells in the row.
			// This does NOT actually write the data to
			// the store.

			// Create one row
			clientRow.put("clientid", clientid);
			clientRow.put("age", age);
			clientRow.put("sexe", sexe);
			clientRow.put("taux", taux);
			clientRow.put("situation_familiale", situation_familiale);
			clientRow.put("nb_enfants", nb_enfants);
			clientRow.put("voiture", voiture);
			clientRow.put("immatriculation", immatriculation);

			// Now write the table to the store.
			// "item" is the row's primary key. If we had not set that value,
			// this operation will throw an 
			// IllegalArgumentException.
	 
	
			tableH.put(clientRow, null, null);

		} 
		catch (IllegalArgumentException e) {
			System.out.println("Invalid statement:\n" + e.getMessage());
		} 
		catch (FaultException e) {
			System.out.println("Statement couldn't be executed, please retry: " + e);
		}

	}

	


	private void insertImmatriculationRow(Integer immatriculationid, String immatriculation,String marque, String nom, Integer puissance, String longueur, 
	Integer nb_places, Integer nb_portes, String couleur,Boolean occasion,Float prix){
		System.out.println("********************************** Dans : insertImmatriculationRow *********************************" );

		TableAPI tableAPI = store.getTableAPI();
		StatementResult result = null;
		String statement = null;
		
		try {

			
			// The name you give to getTable() must be identical
			// to the name that you gave the table when you created
			// the table using the CREATE TABLE DDL statement.
			Table tableImmatriculation = tableAPI.getTable(tabImmatriculations);
			
			// Get a Row instance
			Row ImmatriculationRow = tableImmatriculation.createRow();
			// Now put all of the cells in the row.
			// This does NOT actually write the data to
			// the store.

			// Create one row
			ImmatriculationRow.put("immatriculationid", immatriculationid);
			ImmatriculationRow.put("immatriculation", immatriculation);
			ImmatriculationRow.put("marque", marque);
			ImmatriculationRow.put("nom", nom);
			ImmatriculationRow.put("puissance", puissance);
			ImmatriculationRow.put("longueur", longueur);
			ImmatriculationRow.put("nb_places", nb_places);
			ImmatriculationRow.put("nb_portes", nb_portes);
			ImmatriculationRow.put("couleur", couleur);
			ImmatriculationRow.put("occasion", occasion);
			ImmatriculationRow.put("prix", prix);
			
			// Now write the table to the store.
			// "item" is the row's primary key. If we had not set that value,
			// this operation will throw an 
			// IllegalArgumentException.
	 
	
			tableAPI.put(ImmatriculationRow, null, null);

		} 
		catch (IllegalArgumentException e) {
			System.out.println("Invalid statement:\n" + e.getMessage());
		} 
		catch (FaultException e) {
			System.out.println("Statement couldn't be executed, please retry: " + e);
		}

		
	}


	/**
		void loadClientDataFromFile(String clientDataFileName)
		cette methodes permet de charger les clients depuis le fichier 
		appelé clientData_txt.txt. 
		Pour chaque client chargé, la
		méthide insertAClientRow sera appélée
	*/
	void loadClientDataFromFile(String clientDataFileName){
		InputStreamReader 	ipsr;
		BufferedReader 		br=null;
		InputStream 		ips;
		
		// Variables pour stocker les données lues d'un fichier. 
		String 		ligne; 
		System.out.println("********************************** Dans : loadClientDataFromFile *********************************" );
		
		/* parcourir les lignes du fichier texte et découper chaque ligne */
		try {
			ips  = new FileInputStream(clientDataFileName); 
			ipsr = new InputStreamReader(ips); 
			br   = new BufferedReader(ipsr); 
			boolean firstLine = true;
			/* open text file to read data */

			//parcourir le fichier ligne par ligne et découper chaque ligne en 
			//morceau séparés par le symbole ;  
			int i=0;
			while ((ligne = br.readLine()) != null) { 
				//int clientid; 
				//String nom, prenom, codePostal, ville, adresse, telephone, anneeNaiss;
				if(!firstLine)
				{
				ArrayList<String> clientRecord= new ArrayList<String>();	
				StringTokenizer val = new StringTokenizer(ligne,",");

				while(val.hasMoreTokens()) { 
						clientRecord.add(val.nextToken().toString()); 
				}
				//Integer clientid = Integer.parseInt(clientRecord.get(0));
				Integer clientid = i+1;
				Integer age		=  Integer.parseInt(clientRecord.get(0));
				String sexe		= clientRecord.get(1);
				Integer taux	=  Integer.parseInt(clientRecord.get(2));
				String situation_familiale		= clientRecord.get(3);
				Integer nb_enfants		=  Integer.parseInt(clientRecord.get(4));
				Boolean voiture	= Boolean.parseBoolean(clientRecord.get(5));
				String immatriculation	=  clientRecord.get(6);
				i++;
				System.out.println("clientid="+clientid+" age="+age+" sexe="+sexe
				+" taux="+taux+" situation_familiale="+situation_familiale+" nb_enfants="+nb_enfants
				+" voiture="+voiture+" immatriculation="+immatriculation);
				// Add the client in the KVStore
				this.insertAClientRow(clientid, age, sexe, taux, situation_familiale, nb_enfants, voiture, immatriculation);
			}
			firstLine=false;
		}
		
		}
		catch(Exception e){
			e.printStackTrace(); 
		}
	}

	
	void loadImmatriculationsDataFromFile(String immatriculationDataFileName){
		InputStreamReader 	ipsr;
		BufferedReader 		br=null;
		InputStream 		ips;
		
		// Variables pour stocker les données lues d'un fichier. 
		String 		ligne; 
		System.out.println("********************************** Dans : loadImmatriculationsDataFromFile *********************************" );
		
		/* parcourir les lignes du fichier texte et découper chaque ligne */
		try {
			ips  = new FileInputStream(immatriculationDataFileName); 
			ipsr = new InputStreamReader(ips); 
			br   = new BufferedReader(ipsr); 
			boolean firstLine = true;
			int i=0;
			while ((ligne = br.readLine()) != null) { 
				if(!firstLine)
				{
				ArrayList<String> immatriculationRecord= new ArrayList<String>();	
				StringTokenizer val = new StringTokenizer(ligne,",");
				while(val.hasMoreTokens()) { 
					immatriculationRecord.add(val.nextToken().toString()); 
				}
				Integer id = i+1;
				String immatriculation		= immatriculationRecord.get(0);
				String marque		= immatriculationRecord.get(1);
				String nom		= immatriculationRecord.get(2);
				Integer puissance	= Integer.parseInt(immatriculationRecord.get(3));
				String longueur		= immatriculationRecord.get(4);
				Integer nb_places		= Integer.parseInt(immatriculationRecord.get(5));
				Integer nb_portes		= Integer.parseInt(immatriculationRecord.get(6));
				String couleur		= immatriculationRecord.get(7);
				Boolean occasion	= Boolean.parseBoolean(immatriculationRecord.get(8));
				Float prix		= Float.parseFloat(immatriculationRecord.get(9));
				i++;
				
				
				this.insertImmatriculationRow(id,immatriculation, marque, nom, puissance, longueur, nb_places, 
				nb_portes, couleur,occasion,prix);
			}
			firstLine=false;
		}
		}
		catch(Exception e){
			e.printStackTrace(); 
		}
	}

	
	/**
		private void displayImmatriculationRow (Row immatriculationRow)
		Cette méthode d'afficher une ligne de la table immatriculation.
	*/
	
	private void displayImmatriculationRow (Row immatriculationRow) {
		System.out.println("============= DANS : displayImmatriculationRow ==============");
	 Integer immatriculationId = 	immatriculationRow.get("IMMATRICULATIONID").asInteger().get();
	 String immatriculation = immatriculationRow.get("IMMATRICULATION").asString().get();
	 String marque = immatriculationRow.get("MARQUE").asString().get();

	 System.out.println("Immatriculation row :{ immatriculationId=" + immatriculationId + 
	 " immatriculation="+immatriculation +" marque="+marque+"}");

 }
 
	/**
		private void displayClientRow (Row clientRow)
		Cette méthode d'afficher une ligne de la table client.
	*/
	private void displayClientRow (Row clientRow) {
   		System.out.println("========== DANS : displayClientRow =================");
		   Integer clientId = 	clientRow.get("CLIENTID").asInteger().get();
		   Integer age = clientRow.get("AGE").asInteger().get();
		   String sexe = clientRow.get("SEXE").asString().get();
   
		   System.out.println("client row :{ clientId=" + clientId + 
		   " AGE="+age +" SEXE="+sexe+"}");
	}

	
	



	/**
		private void getClientByKey (int clientId)
		Cette méthode de charger  une ligne de la table client
		connaissant sa clé
	*/
	public void getClientByKey(int clientId){

		StatementResult result = null;
		String statement = null;
		System.out.println("\n\n********************************** Dans : getClientByKey *********************************" );

		try { 
			TableAPI tableH = store.getTableAPI();
			// The name you give to getTable() must be identical
			// to the name that you gave the table when you created
			// the table using the CREATE TABLE DDL statement.
			Table tableClient = tableH.getTable(tabClients);

			PrimaryKey key=tableClient.createPrimaryKey();
			key.put("clientId", clientId);
			// Retrieve the row. This performs a store read operation.
			// Exception handling is skipped for this trivial example.
			Row row = tableH.get(key, null);
			// Now retrieve the individual fields from the row.
			displayClientRow(row);
		} 
		catch (IllegalArgumentException e) {
			System.out.println("Invalid statement:\n" + e.getMessage());
		} catch (FaultException e) {
			System.out.println("Statement couldn't be executed, please retry: " + e);
		}
	}


	public void getImmatriculationByKey(int immatriculationId){

		StatementResult result = null;
		String statement = null;
		System.out.println("\n\n********************************** Dans : getImmatriculationByKey *********************************" );

		try { 
			TableAPI tableH = store.getTableAPI();
			// The name you give to getTable() must be identical
			// to the name that you gave the table when you created
			// the table using the CREATE TABLE DDL statement.
			Table tableImmatriculation = tableH.getTable(tabImmatriculations);

			PrimaryKey key=tableImmatriculation.createPrimaryKey();
			key.put("immatriculationId", immatriculationId);
			// Retrieve the row. This performs a store read operation.
			// Exception handling is skipped for this trivial example.
			Row row = tableH.get(key, null);
			// Now retrieve the individual fields from the row.
			displayImmatriculationRow(row);
		} 
		catch (IllegalArgumentException e) {
			System.out.println("Invalid statement:\n" + e.getMessage());
		} catch (FaultException e) {
			System.out.println("Statement couldn't be executed, please retry: " + e);
		}
	}



	/**
		public void getClientRows()
		Cette méthode permet de charger  toutes les lignes de la table client
		connaissant sa clé
	*/
	public void getClientRows(){

		//TableAPI tableAPI = store.getTableAPI();
		StatementResult result = null;
		String statement = null;
		System.out.println("******************************** LISTING DES CLIENTS ******************************************* ");

		try {
			TableAPI tableH = store.getTableAPI();
			// The name you give to getTable() must be identical
			// to the name that you gave the table when you created
			// the table using the CREATE TABLE DDL statement.
			Table tableClient = tableH.getTable(tabClients);
			
			PrimaryKey key = tableClient.createPrimaryKey();
			

			// Exception handling is omitted, but in production code
			// ConsistencyException, RequestTimeException, and FaultException
			// would have to be handle
			TableIterator<Row> iter = tableH.tableIterator(key, null, null);
			try {
				while (iter.hasNext()) {
					Row clientRow = iter.next();
					displayClientRow(clientRow);
				}
			} finally {
				if (iter != null) {
				iter.close();
			}
			}
		} 
		catch (IllegalArgumentException e) {
			System.out.println("Invalid statement:\n" + e.getMessage());
		} 
		catch (FaultException e) {
			System.out.println("Statement couldn't be executed, please retry: " + e);
		}
	}

	public void getImmatriculationRows(){

		//TableAPI tableAPI = store.getTableAPI();
		StatementResult result = null;
		String statement = null;
		System.out.println("******************************** LISTING DES IMMATRICULATIONS ******************************************* ");

		try {
			TableAPI tableH = store.getTableAPI();
			// The name you give to getTable() must be identical
			// to the name that you gave the table when you created
			// the table using the CREATE TABLE DDL statement.
			Table tableImmatriculation = tableH.getTable(tabImmatriculations);
			
			PrimaryKey key = tableImmatriculation.createPrimaryKey();
			

			// Exception handling is omitted, but in production code
			// ConsistencyException, RequestTimeException, and FaultException
			// would have to be handle
			TableIterator<Row> iter = tableH.tableIterator(key, null, null);
			try {
				while (iter.hasNext()) {
					Row immatriculationRow = iter.next();
					displayImmatriculationRow(immatriculationRow);
				}
			} finally {
				if (iter != null) {
				iter.close();
			}
			}
		} 
		catch (IllegalArgumentException e) {
			System.out.println("Invalid statement:\n" + e.getMessage());
		} 
		catch (FaultException e) {
			System.out.println("Statement couldn't be executed, please retry: " + e);
		}
	}

 }