using System;
using System.Data.SqlClient;

namespace SQL
{
    class Program
    {
        static void Main(string[] args)
        {
            String sqlServer = "SQL11";
            String database = "msdb";
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

            Console.WriteLine("Connected to : " + sqlServer);

            String querylogin = "SELECT SYSTEM_USER;";
            SqlCommand command = new SqlCommand(querylogin, con);
            SqlDataReader reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Logged in as: " + reader[0]);
            reader.Close();
            
            String queryuname = "SELECT USER_NAME();";
            command = new SqlCommand(queryuname, con);
            reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Mapped to user: " + reader[0]);
            reader.Close();

            String querypublicrole = "SELECT IS_SRVROLEMEMBER('public');";
            command = new SqlCommand(querypublicrole, con);
            reader = command.ExecuteReader();
            reader.Read();
            Int32 role = Int32.Parse(reader[0].ToString());
            if (role == 1)
            {
                Console.WriteLine("User is a member of public role");
            }
            else
            {
                Console.WriteLine("User is NOT a member of public role");
            }
            reader.Close();

            String querysysadminrole = "SELECT IS_SRVROLEMEMBER('sysadmin');";
            command = new SqlCommand(querysysadminrole, con);
            reader = command.ExecuteReader();
            reader.Read();
            role = Int32.Parse(reader[0].ToString());
            if (role == 1)
            {
                Console.WriteLine("User is a member of sysadmin role");
            }
            else
            {
                Console.WriteLine("User is NOT a member of sysadmin role");
            }
            reader.Close();

            String execCmd = "EXEC sp_linkedservers;";
            command = new SqlCommand(execCmd, con);
            reader = command.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine("Linked SQL server: " + reader[0]);
            }
            reader.Close();

            execCmd = "select myuser from openquery(\"sql27\", 'select SYSTEM_USER as myuser');";
            String localCmd = "select SYSTEM_USER;";

            command = new SqlCommand(localCmd, con);
            reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Executing as the login " + reader[0] + " on sql11");
            reader.Close();

            command = new SqlCommand(execCmd, con);
            reader = command.ExecuteReader();
            reader.Read();
            Console.WriteLine("Executing as the login " + reader[0] + " on sql27");
            reader.Close();

            con.Close();
        }
    }
}