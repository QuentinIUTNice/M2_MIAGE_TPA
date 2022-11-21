
package mbds;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.util.List;

import org.apache.hadoop.io.Writable;

class CarWritable implements Writable {

    public String marqueModele = "";
    public String modele = "";
    public String brand = "";
    public int bonus_malus = 0;
    public int rejet = 0;
    public int cout_energie = 0;


    public CarWritable() {
        brand = "not implemented";
    } //Avoid first row bug

    public CarWritable(String string) { //AUDI E-TRON SPORTBACK 55 (408ch) quattro,-6 000€ 1,0,319 €
        string = string.replaceAll(", ", " "); //fixed: virgule en trop
        string = string.replaceAll("\"", ""); //fixed: double quote en trop

        String[] elems = string.split("\\,"); //["AUDI E-TRON SPORTBACK 55 (408ch) quattro", "-6 000€ 1", "0",...]
        marqueModele = elems[0]; //AUDI E-TRON SPORTBACK 55 (408ch) quattro
        bonus_malus = get_bonus_malus_serialized(elems[1]); // "-6 000 1"
        rejet = 0;
        try {
            rejet = Integer.parseInt(elems[2]);
        } catch (Exception e) {
        }
        cout_energie = Integer.parseInt(elems[3].split("€")[0].replaceAll("[^0-9-]", ""));//15
    }

    public void setRightProperties(List<String> makesList) {
        for (String brand : makesList) {
            brand = brand.trim();
            if (marqueModele.contains(brand + " ") && marqueModele.length() > 0) {
                this.brand = brand;
                this.modele = marqueModele.replaceFirst(brand, "").trim();
            }
        }
    }

    public int get_bonus_malus_serialized(String bon_mal) { //"-6 000€ 1"
        String str = bon_mal.split("€")[0]; //+/-....
        try {
            str = str.split("\\+")[1].trim();
        } catch (Exception e) { }
        str = str.replaceAll("[^0-9-]", ""); //"-6000"

        if (str.equals("-") || str.equals("")) return 0;
        return Integer.parseInt(str);
    }

    @Override
    public void write(DataOutput out) throws IOException {
        out.writeUTF(get_serialized());
    }

    @Override
    public void readFields(DataInput in) throws IOException {
        String line = in.readUTF();
        System.out.println("READING LINE " + line); //DS,DS3 CROSSBACK E-Tense (136ch),-6000,0,251
        String[] elems = line.split(",");
        brand = elems[0]; //MERCEDES AMG...
        System.out.println("MARQUE: " + brand); //DS
        modele = elems[1]; //MERCEDES AMG...
        System.out.println("MODELE: " + modele);
        bonus_malus = Integer.parseInt(elems[2]); //-6000
        System.out.println("BONUS: " + bonus_malus);
        rejet = Integer.parseInt(elems[3]);
        System.out.println("REJET: " + rejet);
        cout_energie = Integer.parseInt(elems[4]);
        System.out.println("COUT: " + cout_energie);
    }

    public String get_serialized() {
        return brand + "," + modele + "," + bonus_malus + "," + rejet + "," + cout_energie;
    }

    public String get_attributes() {
        return modele + "," + bonus_malus + "," + rejet + "," + cout_energie;
    }
};
