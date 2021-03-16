package mum.cs472.WAPOnlineDictionary.controllers;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.sql.*;
import mum.cs472.WAPOnlineDictionary.utils.MySQLConnection;

@WebServlet(name = "queryWord", value = "/query-word")
public class SearchWord extends HttpServlet {
    Connection con;

    @Override
    public void init() throws ServletException {
        super.init();
        System.out.println("in init function");
        try {
            con = MySQLConnection.createConnection(); // singleton connection
        } catch (SQLException | ClassNotFoundException throwables) {
            throwables.printStackTrace();
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String queryWord = request.getParameter("keyword");
        System.out.println("query word: " + queryWord);


        String jsonObject = "[]";

        try {
            jsonObject = MySQLConnection.queryKeyword(queryWord);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(jsonObject);
        out.flush();
    }

    @Override
    public void destroy() {
        System.out.println("in destroy function");

        try {
            if (con != null){
                con.close();
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        super.destroy();
    }
}