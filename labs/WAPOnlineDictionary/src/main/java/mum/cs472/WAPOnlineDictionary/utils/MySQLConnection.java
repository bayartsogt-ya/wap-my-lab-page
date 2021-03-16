package mum.cs472.WAPOnlineDictionary.utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MySQLConnection {
    private static Connection con;

    private MySQLConnection(){}

    public static Connection createConnection() throws ClassNotFoundException, SQLException {
        System.out.println("connecting to mysql driver");
        Class.forName("com.mysql.cj.jdbc.Driver");

        System.out.println("connecting db server");
        con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/entries?serverTimezone=UTC",
                "root",
                "password");
        System.out.println("[success] Created connection to MySQL...");

        return con;
    }

    public static String queryKeyword(String word) throws SQLException {
        Statement stmt=con.createStatement();
        ResultSet rs=stmt.executeQuery(
                String.format("SELECT * FROM entries where word = '%s';", word)
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
        // System.out.println(Arrays.toString(array));

        return Arrays.toString(array);
    }
}
