using System;
using System.Data.SqlClient;

namespace SQL
{
    class Program
    {
        static void Main(string[] args)
        {            
            String sqlServer = "sql11";
            String database = "master";
            //String conString = "Server = " + sqlServer + "; Database = " + database + "; Integrated Security = True;";
            String conString = "Server = " + sqlServer + "; Database = " + database + ";";
            SqlConnection con = new SqlConnection(conString);

            String executeas = "use msdb; EXECUTE AS USER = 'dbo';";

            SqlCommand command = new SqlCommand(executeas, con);
            SqlDataReader reader = command.ExecuteReader();
            reader.Close();

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

            String execCmd = "EXEC sp_linkedservers;";
            command = new SqlCommand(execCmd, con);
            reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine("Linked SQL server: " + reader[0]);
            }
            reader.Close();

            String execCmd1 = "select version from openquery(\"SQL27\", 'select @@version as version');";
            String userCmd = "select myuser from openquery(\"SQL27\", 'select SYSTEM_USER as myuser');";
            String localCmd = "select SYSTEM_USER;";

            //String executeas = "use msdb; EXECUTE AS USER = 'dbo';";

            //command = new SqlCommand(executeas, con);
            //reader = command.ExecuteReader();
            //reader.Close();

            command = new SqlCommand(execCmd1, con);
            reader = command.ExecuteReader();

            reader.Read();
            Console.WriteLine("Linked SQL server version SQL27: " + reader[0]);
            reader.Close();

            //command = new SqlCommand(localCmd, con);
            //reader = command.ExecuteReader();

            //reader.Read();
            //Console.WriteLine("Executing as the login " + reader[0] + " on SQL11");
            //reader.Close();

            //command = new SqlCommand(userCmd, con);
            //reader = command.ExecuteReader();

            //reader.Read();
            //Console.WriteLine("Executing as the login " + reader[0] + " on SQL27");
            //reader.Close();

            con.Close();
        }
    }
}
