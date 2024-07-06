
# 🌎 Welcome to the Adonis-be repository

#### 📄 About the project 

- *This back-end technical testing project involves the development of a RESTful API. It enables external users to sign up and, upon logging in, allows for the registration of clients and products, as well as the recording of product sales to clients. The project utilizes the AdonisJs framework to structure the API with a layered architecture (MVC), omitting views. Lucid is employed as an ORM, with Bcrypt for password encryption and JWT for token authentication, adhering to the principles of RESTful APIs and the MVC pattern.*


---

### 🚀 Technology Used

![Technology](https://skillicons.dev/icons?i=docker,nodejs,mysql,adonis,typescript)

---

## 💻 Running the Project

-  Copy the repository to a local folder using the terminal with the following command:
    ```bash
    git clone git@github.com:juliomatiastrybe/adonis-be.git
    ```

    If git is not installed, it can be installed using this command in the Debian/Ubuntu bash:

    Debian/Ubuntu bash:
    ```bash
    apt-get install git
    ```

    other kernel follow the instructions on the website [Git](https://git-scm.com/download/linux).

    windows/powershell:
    ```shell
    winget install --id Git.Git -e --source winget
    ```

    Or you can follow the website [git](https://git-scm.com/downloads) documentation for more installation means.

> ### 🔍️ navigate to the folder created in the clone, and open the terminal.

- install the dependencies:
  ```bash
  npm install
  ```
  > This method of installing pending issues only works if the node installation package is npm, if you use another one, just switch to npm for the package used

  you need to have node installed to be able to install the dependency packages
  If you don't have it, you can run the command if your operating system is Linux:
  ```bash
  sudo apt update sudo apt install nodejs sudo apt install npm
  ```

  If not, follow the installation instructions on the [Node.js](https://nodejs.org/en/download) website.

>*:warning: For the application to run correctly, the node version must be >= 18.*
>
>*:warning: It is also important to remember that for you to run the API using Docker, you will need to have it installed and configured on your machine. See the documentation to learn more about [Docker](https://docs.docker.com/get-docker/). In addition to having docker-compose installed and configured on your computer. To install your operating system version, click here [Docker Compose](https://docs.docker.com/compose/install/).*
>
>*:warning: Feel free to open the project in your preferred IDE, but you can run it just fine in the terminal.*

- configure the .env file:
  ```bash
  cp .env.example .env
  ```
  > This command will copy the .env.example file to .env, which is the file that contains the project's environment variables. You can open it in your preferred text editor and configure it however you want. If you don't want it, it already comes with the necessary settings for the application to work.

>*:warning: You can use Docker to launch the API and MySQL database containers. This project comes with the `Dockerfile` and `docker-compose.yml` files configured. If you choose to use the API via a terminal with a database installed locally or in the cloud, you must correctly configure the `.env` file for the application to work correctly.*

<details> 
  <summary><strong>🐋 Docker</strong></summary>

>*:warning: Before you begin, your docker-compose needs to be at version 1.29 or higher. [See here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) or [in the documentation](https://docs.docker.com/compose/install/) how to install it. In the first article, you can replace where it is with `1.26.0` with `1.29.2`.*
>
>*:warning: It's important to note that the containers will run on port 3333 for API and 3306 for MySQL database, so if you are using them, simply swap the ports in the .env file.*


- For the API to start working, you first have to run docker-compose:

  ```bash
  docker-compose up -d
  ```

- When executing this command, wait for the API to become functional. checking through the adonis_app container log with the command:

  ```bash
  docker logs -f adonis_app
  ```

  >When typing this command, a log should appear in the terminal with the same information as in the image below. Showing that the API is operational.

  ![STARTED_API](./public/img/started_api.png)

- After the application is operational, migrations and seeders are deleted. And the API will be operational to receive requests.

- If you need to reset the API database, run the command:

  ```bash
  npm run db:reset
  ```
  >This command will delete all data from the database and run the migrations and seeders again.

</details>

<details>
  <summary><strong>💻 Terminal</strong></summary>

*To run the API via terminal, as already mentioned, you need to put the necessary information in the .env file for the API to connect to the MySQL database. By choosing this option, you must provide the necessary information for the API to be functional.*

>*:warning: Before running any command, it is necessary to ensure that the connection to the database is working and that a database has already been created. Pay attention to the name provided in the environment variable in .env: `DB_DATABASE`.*

- Run in the terminal:

  ```bash
  npm run dev
  ```
  >This command will start the API in development mode, and you will be able to access it via `http://localhost:3333` if that is the port passed. If you want to change the port, you can do so in the .env file. This way the API will be functional and ready to receive requests.


- To reset the API, run the command:
    ```bash
    npm run db:reset
    ```

- To stop the API in terminal, press `Ctrl + C` or case macOS `Cmd + C`.

  
</details>

---

## 📝 Documentation

>*If you use VSCode as your IDE, you can use the Thunder Client extension to make requests to the API. In the root of the project, there is a file named `thunder-collection_adonis_be.json` with a collection of pre-configured routes; just import it into the extension to use it.*
---
<details>
  <summary><strong>🫂 Entity and Relationship Diagram</strong></summary>


  ---

  ### Entity and Relationship Diagram

  ![ERD](./public/img/relationship-diagram.png)

  - The diagram shows the relationship between the entities in the database, where the user can have many clients, and the client can have many sales. The product can also have many sales, and the sale can have only one client and one product. I used the diagram to guide me in building the migrations, based on the information provided about each entity.

</details>

---

- The API uses JWT tokens for route authentication, which must be sent via the authentication bearer token.

- The API has the following routes:

>:warning: For the address and phone entities, routes, controllers, and services were not created as I focused on the main requirements of the challenge to deliver it on time. However, the migration with relationships and the models were implemented.

<details>
  <summary><strong>📖 Routers</strong></summary>


---

### Route Users

| Method | Endpoint | Description | Authentication |
| ----------- | ------------------------ | ----------------- | -------------------- |
| POST | /user | create a new user | NOT |
| PUT | /user/:id| update a user by id | YES |
| PATCH| /user/:id| update specific fields of a user by id | YES |

---

### Route Login

| Method | Endpoint | Description | Authentication |
| ----------- | ------------------------ | ----------------- | -------------------- |
| POST | /login | login user | NOT |

---

### Route Clients

| Method | Endpoint | Description | Authentication |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET | /client | list all clients | YES |
| GET | /client/:clientId/sales | list all sales of a client by id and filter by date by month and year | YES |
| POST | /client | create a new client | YES |
| PUT | /client/:id | update a client by id | YES |
| PATCH | /client/:id | update specific fields of a client by id | YES |
| DELETE | /client/:id | delete a client by id and automatically delete all sales of this client | YES |

---

### Route Products

| Method | Endpoint | Description | Authentication |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET | /product | list all products | YES |
| POST | /product | create a new product | YES |
| PUT | /product/:id | update a product by id | YES |
| PATCH | /product/:id | update specific fields of a product by id | YES |
| DELETE | /product/:id | delete a product by id (soft delete) | YES |

---

### Route Sales

| Method | Endpoint | Description | Authentication |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET | /sale | list all sales with client and product | YES |
| POST | /sale | create a new sale | YES |
| DELETE | /sale/:id | delete a sale by id | YES |

---

</details>

<details>
  <summary><strong> 🌎 Request and Response</strong></summary>

  ---

  <details>
    <summary><strong>Users</strong></summary>

  ---

  ### Users
  <details>
    <summary><strong>Create a new user</strong></summary>

  #### Create a new user

  - **Method**: POST
  - **Endpoint**: /user
  - **Description**: Create a new user
  - **Authentication**: NO

  #### Request

  - body:
  ```json
  {
    "email": "johndoe@doe.com",
    "password": "123456"
  }
  ```
  - validation:
    - email: required, unique, format email valid
    - password: required, min:6

  - exemple of request:
  - **Method**: POST
  - **URL**:
  ```bash
  http://localhost:3333/user
  ```

  #### Response

  - exemple of response:

  - **Status**: 201
  ```json
  {
    "id": 1,
    "email": "johndoe@doe.com"
  }
  ```

  ---

  - **status**: 400
  ```json
  {
    "message": "Invalid format for email"
  }
  ```
  ---
  
  - **status**: 409
  ```json
  {
    "message": "Email already exists"
  }
  ```
  ---

  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```

  ---

  </details>


  <details>
    <summary><strong>Update a user by id</strong></summary>

  #### Update a user by id

  >:warning: Since Adonis uses the same method in the controller for both PUT and PATCH, which is update, this route will accept both the PUT method to update all properties and the PATCH method to update only one.

  - **Method**: PUT
  - **Endpoint**: /user/:id
  - **Description**: Update a user by id
  - **Authentication**: YES

  #### Request

  - body:
  ```json
  {
    "email": "exemple@exemple.com",
    "password": "123456"
  }
  ```
  - params:
    - id: required, number

  - authentication: Bearer Token
    - token: required
    - format: Bearer token
    - Get the token in the login route

  - validation:
    - email: required if not provided password, unique, format email valid
    - password: required if not provided email, min:6

  - exemple of request:
  - **Method**: PUT
  - **URL**:
  ```bash
  http://localhost:3333/user/1
  ```

  #### Response

  - exemple of response:

  - **Status**: 200
  ```json
  {
    "id": 1,
    "email": "exemple@exemple.com"
  }
  ```

  ---

  - **status**: 400
  ```json
  {
    "message": "Invalid format for email"
  }
  ```

  ---

  - **status**: 401
  ```json
  {
    "message": "Token not provided"
  }
  ```

  ---

  - **status**: 409
  ```json
  {
    "message": "Email already exists"
  }
  ```

  ---

  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```

  </details>

</details>

---

<details>
  <summary><strong>Login</strong></summary>

  ### Login

  #### Login user

  - **Method**: POST
  - **Endpoint**: /login
  - **Description**: Login user
  - **Authentication**: NO

  #### Request

  - body:
  ```json
  {
    "email": "user@user.com",
    "password": "123456"
  }
  ```
  - validation:
    - email: required, format email valid
    - password: required, min:6

  - exemple of request:
  - **Method**: POST
  - **URL**:
  ```bash
  http://localhost:3333/login
  ```

  #### Response

  - exemple of response:

  - **Status**: 200
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwiaWF0IjoxNzIwMTU5MDAxLCJleHAiOjE3MjEwMjMwMDF9.3UQBzWrJXSSaoipfKWBU1f0-hMt_-JDbE8EhIMCfKSE"
  }
  ```
  ---

  - **status**: 400
  ```json
  {
    "message": "Invalid format for email"
  }
  ```

  ---

  - **status**: 401
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

  ---

  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```
</details>

---

<details>
  <summary><strong>Clients</strong></summary>

  ### Clients

  <details>
    <summary><strong>List all clients</strong></summary>

  #### List all clients

  >:warning: Clients will be ordered by id!

  - **Method**: GET
  - **Endpoint**: /client
  - **Description**: List all clients ordered by id asc
  - **Authentication**: YES

  #### Request

  - authentication: Bearer Token
    - token: required
    - format: Bearer token
    - Get the token in the login route

  - exemple of request:
  - **Method**: GET
  - **URL**:
  ```bash
  http://localhost:3333/client
  ```

  #### Response

  - exemple of response:

  - **Status**: 200
  ```json
  [
    {
      "id": 1,
      "name": "John Snow",
      "taxId": "12345678912"
    },
    {
      "id": 2,
      "name": "Daenerys Targaryen",
      "taxId": "98765432112"
    }
  ]
  ```
  ---

  - **status**: 401
  ```json
  {
    "message": "Token not provided"
  }
  ```
  ---

  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```
  ---

  </details>

  <details>
    <summary><strong>List all sales of a client by id</strong></summary>

  #### List all sales of a client by id

  - **Method**: GET
  - **Endpoint**: /client/:clientId/sales
  - **Description**: List all sales of a client by id and filter by date by month and year
  - **Authentication**: YES

  #### Request

  - params:
    - id: required, number

  - authentication: Bearer Token
    - token: required
    - format: Bearer token
    - Get the token in the login route

  - query params:
    - month: not required, number, min:1, max:12
    - year: not required, number, min:1900, max: current year
  
  example of request:
  - **Method**: GET
  - **URL**:
  ```bash
  http://localhost:3333/client/1/sales?month=1&year=2021
  ```

  #### Response

  >:warning: Sales will be ordered by date, always showing the most recent one first!

  - exemple of response:
  <details>
    <summary>200 - Query Params Not Informed</summary>

  - **Status**: 200
  - **Query Params**: Not Informed
  ```json
  {
    "id": 1,
    "name": "John Snow",
    "taxId": "12345678912",
    "sales": [
      {
        "id": 3,
        "clientId": 1,
        "productId": 1,
        "quantity": 10,
        "price": "10.00",
        "totalPrice": "100.00",
        "date": "2021-02-02T00:00:00.000Z"
      },
      {
        "id": 4,
        "clientId": 1,
        "productId": 2,
        "quantity": 10,
        "price": "20.00",
        "totalPrice": "200.00",
        "date": "2021-02-01T00:00:00.000Z"
      },
      {
        "id": 2,
        "clientId": 1,
        "productId": 2,
        "quantity": 10,
        "price": "20.00",
        "totalPrice": "200.00",
        "date": "2021-01-02T00:00:00.000Z"
      },
      {
        "id": 1,
        "clientId": 1,
        "productId": 1,
        "quantity": 10,
        "price": "10.00",
        "totalPrice": "100.00",
        "date": "2021-01-01T00:00:00.000Z"
      }
    ]
  }
  ```

  </details>

  <details>
    <summary>200 - Query Params Informed</summary>

  >:warning: The response will be the same as the previous one, but with the sales filtered by the month and year informed in the query params.
  >
  >:warning: To filter by month and year, it is mandatory to send two queries; sending only one will not make the filter work correctly.

  - **Status**: 200
  - **Query Params**: Informed
  ```json
  {
    "id": 1,
    "name": "John Snow",
    "taxId": "12345678912",
    "sales": [
      {
        "id": 2,
        "clientId": 1,
        "productId": 2,
        "quantity": 10,
        "price": "20.00",
        "totalPrice": "200.00",
        "date": "2021-01-02T00:00:00.000Z"
      },
      {
        "id": 1,
        "clientId": 1,
        "productId": 1,
        "quantity": 10,
        "price": "10.00",
        "totalPrice": "100.00",
        "date": "2021-01-01T00:00:00.000Z"
      }
    ]
  }
  ```

  - **status**: 400
  ```json
  {
    "message": "Invalid month or year"
  }
  ```

  - **status**: 401
  ```json
  {
    "message": "Token not provided"
  }
  ```
  - **status**: 404
  ```json
  {
    "message": "Client not found"
  }
  ```
  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```

  </details>

</details>

<details>
  <summary><strong>create a new client<strong></summary>

  #### Create a new client

  - **Method**: POST
  - **Endpoint**: /client
  - **Description**: Create a new client
  - **Authentication**: YES

  #### Request

  - body example:
  ```json
  {
    "name": "John Snow",
    "taxId": "12345678912"
  }
  ```

  - authentication: Bearer Token
    - token: required
    - format: Bearer token
    - Get the token in the login route
  
  - validation:
    - name: required, min:3
    - taxId: required, unique, exact:11
  
  example of request:
  - **Method**: POST
  - **URL**:
  ```bash
  http://localhost:3333/client
  ```

  #### Response

  - exemple of response:

  - **Status**: 201
  ```json
  {
    "id": 1
  }
  ```

  ---

  - **status**: 400
  ```json
  {
    "message": "Name and taxId are required"
  }
  ```

  ---

  - **status**: 409
  ```json
  {
    "message": "Client already exists"
  }
  ```

  ---

  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```

</details>

</details>

---
