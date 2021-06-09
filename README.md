# EVO_Assesment
EVO_Assesment

API Service:

* 'EVO_WebAPI' is a Web API solution created in ASP.Net Core.
  - Dependancy injection is implemented.
  
* Sample API Calls:

  1. To Add Contact:
  URL : https://localhost:44392/api/Contact
  JSON: {
			"FirstName":"Umesh",
			"LastName":"Patil",
			"Email":"abc@gmail.com",
			"PhoneNumber":"12345",
			"Status":"Active"
        }
		
  2. To Show List of Contacts:
  URL : https://localhost:44392/api/Contact/contact_list  

-------------------------------------------------------------------------

Database:

* Database will get created automatically with code first approach.
* Database is postgreSQl DB
* Database is present on AWS RDS.

-------------------------------------------------------------------------

Application:

* 'EVO_WebAPP' is a web application solution created in ASp.Net MVC.

-------------------------------------------------------------------------

Steps To Run the application:

1. Run the service application 'EVO_WebAPI'
2. Then run the client application.
3. Conntection string and API URLs are already configured.

   - For client application API URL is mentioned in web.config as below:   
     <add key="EVOAPIServiceUrl" value="https://localhost:44392/api/" />
	 
   - For API Service Project connection string is mentined in appsettings.json file as below:
     "DBConnectionString": "Server=ctsi-oss-poc-postgre-4-instance-1.c2lbgcafemrx.us-east-1.rds.amazonaws.com;Port=5432;Database=TestApp;User ID=postgres;Password=*********;"
	 
3. No authentication or authorization is required.

