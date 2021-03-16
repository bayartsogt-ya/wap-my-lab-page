package mum.cs472.WAPOnlineDictionary.utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TestMySQL {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        // Class.forName("com.mysql.jdbc.Driver");
        Class.forName("com.mysql.cj.jdbc.Driver");

        Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/entries?serverTimezone=UTC","root","password");

        System.out.println("Connection Created");

        Statement stmt=con.createStatement();
        ResultSet rs=stmt.executeQuery(
                String.format("SELECT * FROM entries where word = '%s';", "Medehgue")
        );

        List allRows = new ArrayList();
        while(rs.next())
            allRows.add(
                String.format(
                    "{\"word\": \"%s\"," +
                    "\"wordtype\": \"%s\"," +
                    "\"definition\": \"%s\"}",
                    rs.getString("word").replace('"', '\''),
                    rs.getString("wordtype").replace('"', '\''),
                    rs.getString("definition")
                            .replace('"', '\'')
                            .replace('\n', ' ')
                            .trim().replaceAll(" +", " ")
                ));

        String[] array = (String[]) allRows.toArray(new String[0]);
        System.out.println(Arrays.toString(array));

        con.close();
        System.out.println("Connection Closed!");
    }
}
