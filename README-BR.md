# 🌎 Bem-vindo ao repositório do projeto Adonis BE!

### [Tradução para Inglês](README.md)

## 📚 Sobre o projeto


- *Este é projeto de um teste técnico de back-end, aonde envolve o desenvolvimento de uma API RESTful, permitindo o cadastro de usuários externos, ao efetuar login, permite o cadastro de clientes e produtos, bem como o registro de vendas de produtos aos clientes. O projeto utiliza o framework AdonisJs para estruturar a API com uma arquitetura em camadas (MVC), sem views. Lucid é utilizado como ORM, com Bcrypt para criptografia de senha e JWT para autenticação de token, aderindo aos princípios de APIs RESTful e ao padrão MVC.*

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

![Technology](https://skillicons.dev/icons?i=docker,nodejs,mysql,adonis,typescript)

---

## 💻 Executando o Projeto

- Copie o repositório para uma pasta local usando o terminal com o seguinte comando:
    ```bash
    git clone git@github.com:juliomatiastrybe/adonis-be.git
    ```
    Se o Git não estiver instalado, ele pode ser instalado usando este comando no bash do Debian/Ubuntu:

    Debian/Ubuntu:
    ```bash
    sudo apt-get install git
    ```

    Para outros kernels, siga as instruções no site do [Git](https://git-scm.com/download/linux).

    windows/powershell:
    ```shell
    winget install --id Git.Git -e --source winget
    ```

    Ou você pode seguir a documentação do site do [Git](https://git-scm.com/downloads) para mais opções de instalação.

> ### 🔍️ Navegue até a pasta criada pelo clone e abra o terminal.

- Instale as dependências do projeto com o comando:
    ```bash
    npm install
    ```
  > Este método de instalação de pendências só funciona se o pacote de instalação do Node for o npm. Se você usar outro, basta substituir o npm pelo pacote utilizado.

  Você precisa ter o Node instalado para poder instalar os pacotes de dependência.
  Se você não o tiver, pode executar o comando se o seu sistema operacional for Linux:
  ```bash
  sudo apt update
  sudo apt install nodejs
  sudo apt install npm
  ```

  Caso contrário, siga as instruções de instalação no site do [Node.js](https://nodejs.org/en/download).

>*:warning: Para que a aplicação funcione corretamente, a versão do Node deve ser >= 18.*
>
>*:warning: Também é importante lembrar que, para rodar a API usando Docker, você precisará tê-lo instalado e configurado na sua máquina. Consulte a documentação para saber mais sobre [Docker](https://docs.docker.com/get-docker/). Além disso, é necessário ter o Docker Compose instalado e configurado no seu computador. Para instalar a versão do seu sistema operacional, clique aqui [Docker Compose](https://docs.docker.com/compose/install/).*
>
>*:warning: Sinta-se à vontade para abrir o projeto na sua IDE preferida, mas você pode executá-lo normalmente no terminal.*

- Configure o arquivo .env:
  ```bash
  cp .env.example .env
  ```
  > Este comando copiará o arquivo .env.example para .env, que é o arquivo que contém as variáveis de ambiente do projeto. Você pode abri-lo no seu editor de texto preferido e configurá-lo como quiser. Se não quiser, ele já vem com as configurações necessárias para que a aplicação funcione.

>*:warning: Você pode usar o Docker para iniciar os contêineres da API e do banco de dados MySQL. Este projeto vem com os arquivos `Dockerfile` e `docker-compose.yml `configurados. Se você optar por usar a API via terminal com um banco de dados instalado localmente ou na nuvem, deve configurar corretamente o arquivo `.env` para que a aplicação funcione corretamente.*

<details> 
  <summary><strong>🐋 Docker</strong></summary>

>*:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou na [documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está `1.26.0` por `1.29.2`.*
>
>*:warning: É importante notar que os contêineres serão executados na porta 3333 para a API e 3306 para o banco de dados MySQL. Portanto, se você estiver usando essas portas, basta alterá-las no arquivo .env.*


- Para que a API comece a funcionar, primeiro você precisa executar o docker-compose:

  ```bash
  docker-compose up -d
  ```

- Ao executar este comando, aguarde até que a API esteja funcional, verificando através do log do contêiner adonis_app com o comando:

  ```bash
  docker logs -f adonis_app
  ```

  >Ao digitar este comando, um log deverá aparecer no terminal com as mesmas informações da imagem abaixo. Mostrando que a API está operacional.

  ![STARTED_API](./public/img/started_api.png)

- Uma vez que a aplicação esteja operacional, as migrations e seeders serão processadas. E a API estará operacional para receber requisições.

  >:warning: Devido ao arquivo `mysql-dev-init.sql` localizado na pasta `dockerConfig`, o docker-compose está configurado para executar as queries desse arquivo, criando um usuário e um banco de dados. Se você desejar alterar o usuário na variável de ambiente e o nome do banco de dados, este arquivo também deve ser editado, e os contêineres devem ser derrubados e reiniciados, sendo reconstruídos.

- Se você precisar resetar o banco de dados da API, execute o comando:

  ```bash
  npm run db:reset
  ```
  >Este comando irá deletar todos os dados do banco de dados e rodar novamente as migrations e seeders.

</details>

<details>
  <summary><strong>💻 Terminal</strong></summary>

*Para rodar a API via terminal, como já mencionado, você precisa colocar as informações necessárias no arquivo .env para que a API se conecte ao banco de dados MySQL. Ao escolher esta opção, você deve fornecer as informações necessárias para que a API seja funcional.*

>*:warning: Antes de executar qualquer comando, é necessário garantir que a conexão com o banco de dados esteja funcionando e que um banco de dados já tenha sido criado. Preste atenção ao nome fornecido na variável de ambiente em .env: `DB_DATABASE`.*

- Execute no terminal:

  ```bash
  npm run dev
  ```
  >Este comando iniciará a API em modo de desenvolvimento, e você poderá acessá-la via `http://localhost:3333`, se essa for a porta configurada. Se quiser alterar a porta, você pode fazê-lo no arquivo .env. Desta forma, a API estará funcional e pronta para receber requisições.


- Para resetar a API, execute o comando:
    ```bash
    npm run db:reset
    ```

- Para parar a API no terminal, pressione Ctrl + C ou no caso do macOS Cmd + C.

  
</details>

---

## 📝 Documentação

>*Se você usa o VSCode como sua IDE, você pode usar a extensão Thunder Client para fazer requisições para a API. Na raiz do projeto, há um arquivo chamado `thunder-collection_adonis_be.json` com uma coleção de rotas pré-configuradas; basta importá-lo na extensão para utilizá-lo.*
---
<details>
  <summary><strong>🫂 Diagrama de Entidade e Relacionamento</strong></summary>


  ---

  ### Diagrama de Entidade e Relacionamento

  ![ERD](./public/img/relationship-diagram.png)

  - O diagrama mostra o relacionamento entre as entidades no banco de dados, onde um usuário pode ter muitos clientes, e um cliente pode ter muitas vendas. O produto também pode ter muitas vendas, e a venda pode ter apenas um cliente e um produto. Utilizei o diagrama para orientar a criação das migrações, baseando-me nas informações fornecidas sobre cada entidade.

</details>

---

- A API utiliza tokens JWT para autenticação de rotas, os quais devem ser enviados através do token de autenticação Bearer.

- A API possui as seguintes rotas:

>:warning: Para as entidades de endereço e telefone, não foram criadas rotas, controladores e serviços, pois foquei nos principais requisitos do desafio para entregá-lo no prazo. No entanto, a migração com relacionamentos e os modelos foram implementados.

---

<details>
  <summary><strong>📖 Routers</strong></summary>

### Rota Usuários

| Método | Endpoint | Descrição | Autenticação |
| ----------- | ------------------------ | ----------------- | -------------------- |
| POST | /user | 	criar um novo usuário | NÃO |
| PUT | /user/:id| atualizar um usuário pelo id | SIM |
| PATCH| /user/:id| atualizar campos específicos de um usuário pelo id | SIM |

---

### Rota Login

| Método | Endpoint | Descrição | Autenticação |
| ----------- | ------------------------ | ----------------- | -------------------- |
| POST | /login | fazer login do usuário | NÃO |

---

### Rota Clientes

| Método | Endpoint | Descrição | Autenticação |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET | /client | listar todos os clientes | SIM |
| GET | /client/:clientId/sales | listar todas as vendas de um cliente por id e filtrar por data por mês e ano| SIM |
| POST | /client | criar um novo cliente | SIM |
| PUT | /client/:id | atualizar um cliente pelo id | SIM |
| PATCH | /client/:id | atualizar campos específicos de um cliente pelo id | SIM |
| DELETE | /client/:id | excluir um cliente pelo id e automaticamente excluir todas as vendas deste cliente | SIM |

---

### Rota Produtos

| Método | Endpoint | Descrição | Autenticação |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET | /product | listar todos os produtos | SIM |
| POST | /product | criar um novo produto | SIM |
| PUT | /product/:id | atualizar um produto pelo id | SIM |
| PATCH | /product/:id | atualizar campos específicos de um produto pelo id | SIM |
| DELETE | /product/:id | excluir um produto pelo id (soft delete) | SIM |

---

### Route Sales

| Método | Endpoint | Descrição | Autenticação |
| ----------- | ------------------------ | ----------------- | -------------------- |
| GET | /sale | listar todas as vendas com cliente e produto | SIM |
| POST | /sale | 	criar uma nova venda | SIM |
| DELETE | /sale/:id | excluir uma venda pelo id | SIM |

---

</details>

<details>
  <summary><strong> 🌎 Requisição e Resposta</strong></summary>

  ---

  <details>
    <summary><strong>Users</strong></summary>
  
  ---
  ### Users
  <details>
    <summary><strong>Criar um novo usuário</strong></summary>

  #### Criar um novo usuário

  - **Método**: POST
  - **Endpoint**: /user
  - **Descrição**: Criar um novo usuário
  - **Autenticação**: NÃO

  #### Requisição

  - body:
  ```json
  {
    "email": "johndoe@doe.com",
    "password": "123456"
  }
  ```
  - Validação:
    - email: obrigatório, único, formato de e-mail válido
    - password: obrigatório, min:6

  - Exemplo de requisição:
  - **Método**: POST
  - **URL**:
  ```bash
  http://localhost:3333/user
  ```

  #### Resposta

  - Exemplo de resposta:

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
    "message": "Invalid formato for email"
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
    <summary><strong>Atualizar um usuário por ID</strong></summary>

  #### Atualizar um usuário por ID

  >:warning: Como Adonis usa o mesmo método no controlador para PUT e PATCH, que é update, esta rota aceitará tanto o método PUT para atualizar todas as propriedades quanto o método PATCH para atualizar apenas uma.

  - **Método**: PUT
  - **Endpoint**: /user/:id
  - **Descrição**: Atualizar um usuário por ID
  - **Autenticação**: SIM

  #### Requisição

  - body:
  ```json
  {
    "email": "exemple@exemple.com",
    "password": "123456"
  }
  ```
  - params:
    - id: obrigatório, numero

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - Validação:
    - email: obrigatório se não passado a senha, único, formato email valido
    - password: obrigatório se não passado o email, min:6

  - Exemplo de requisição:
  - **Método**: PUT
  - **URL**:
  ```bash
  http://localhost:3333/user/1
  ```

  #### Resposta

  - Exemplo de resposta:

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
    "message": "Invalid formato for email"
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

  #### fazer login do usuário 

  - **Método**: POST
  - **Endpoint**: /login
  - **Descrição**: fazer login do usuário 
  - **Autenticação**: NÃO

  #### Requisição

  - body:
  ```json
  {
    "email": "user@user.com",
    "password": "123456"
  }
  ```
  - Validação:
    - email: obrigatório, formato email valido
    - password: obrigatório, min:6

  - Exemplo de requisição:
  - **Método**: POST
  - **URL**:
  ```bash
  http://localhost:3333/login
  ```

  #### Resposta

  - Exemplo de resposta:

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
    "message": "Invalid formato for email"
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
    <summary><strong>Listar todos os clientes</strong></summary>

  #### Listar todos os clientes

  >:warning: Clients will be ordered by id!

  - **Método**: GET
  - **Endpoint**: /client
  - **Descrição**: Liste todos os clientes ordenados por id asc
  - **Autenticação**: SIM

  #### Requisição

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - Exemplo de requisição:
  - **Método**: GET
  - **URL**:
  ```bash
  http://localhost:3333/client
  ```

  #### Resposta

  - Exemplo de resposta:

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
    <summary><strong>lista um cliente por id e suas vendas</strong></summary>

  #### lista um cliente por id e suas vendas

  - **Método**: GET
  - **Endpoint**: /client/:clientId/sales
  - **Descrição**: lista um cliente por id e suas vendas e filtre por data por mês e ano
  - **Autenticação**: SIM

  #### Requisição

  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - query params:
    - month: não obrigatório, número, min:1, max:12
    - year: não obrigatório, número, min:1900, max: ano atual
  
  Exemplo de requisição:
  - **Método**: GET
  - **URL**:
  ```bash
  http://localhost:3333/client/1/sales?month=1&year=2021
  ```

  #### Resposta

  >:warning: As vendas serão ordenadas por data, mostrando sempre primeiro a mais recente!

  - Exemplo de resposta:
  <details>
    <summary>200 - Query Params não Informado</summary>

  - **Status**: 200
  - **Query Params**: não Informado
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
    <summary>200 - Query Params Informado</summary>

  >:warning: A resposta será igual à anterior, mas com as vendas filtradas pelo mês e ano informados nos parâmetros da consulta.
  >
  >:warning: Para filtrar por mês e ano é obrigatório o envio das duas queries; enviar apenas um fará com que o filtro não funcione corretamente.

  - **Status**: 200
  - **Query Params**: Informado
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
  <summary><strong>cria um novo cliente<strong></summary>

  #### Cria um novo cliente

  - **Método**: POST
  - **Endpoint**: /client
  - **Descrição**: Cria um novo cliente
  - **Autenticação**: SIM

  #### Requisição

  - body exemplo:
  ```json
  {
    "name": "John Snow",
    "taxId": "12345678912"
  }
  ```

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login
  
  - Validação:
    - name: obrigatório, min:3
    - taxId: obrigatório, único, exact:11
  
  Exemplo de requisição:
  - **Método**: POST
  - **URL**:
  ```bash
  http://localhost:3333/client
  ```

  #### Resposta

  - Exemplo de resposta:

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
    "message": "Name and taxId are obrigatório"
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

<details>
  <summary><strong>Atualiza cliente por id<strong></summary>

  #### Atualiza cliente por id

  >:warning: Como Adonis usa o mesmo método no controlador para PUT e PATCH, que é update, esta rota aceitará tanto o método PUT para atualizar todas as propriedades quanto o método PATCH para atualizar apenas uma.

  - **Método**: PUT
  - **Endpoint**: /client/:id
  - **Descrição**: Atualiza cliente por id
  - **Autenticação**: SIM

  #### Requisição

  - body exemplo:
  ```json
  {
    "name": "John Snow",
    "taxId": "12345678912"
  }
  ```
  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - Validação:
    - name: não obrigatório, min:3
    - taxId: não obrigatório, único, exact:11

  Exemplo de requisição:
  - **Método**: PUT
  - **URL**:
  ```bash
  http://localhost:3333/client/1
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 200
  ```json
  {
    "message": "Client updated"
  }
  ```

  ---

  - **status**: 400
  ```json
  {
    "message": "Name must be at least 3 characters"
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

  - **status**: 404
  ```json
  {
    "message": "Client not found"
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

<details>
  <summary><strong>Deleta cliente por id<strong></summary>

  #### Deleta cliente por id

  >:warning: Quando um cliente é excluído, todas as vendas associadas a esse cliente também serão excluídas devido às configurações de chave estrangeira na migration de sales.

  - **Método**: DELETE
  - **Endpoint**: /client/:id
  - **Descrição**: Deleta cliente por id e excluir automaticamente todas as vendas deste cliente
  - **Autenticação**: SIM

  #### Requisição

  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login
  
  Exemplo de requisição:

  - **Método**: DELETE
  - **URL**:
  ```bash
  http://localhost:3333/client/1
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 200
  ```json
  {
    "message": "Client deleted"
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

  - **status**: 404
  ```json
  {
    "message": "Client not found"
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
  <summary><strong>Products</strong></summary>

  ### Products

  <details>
    <summary><strong>Lista todos produtos</strong></summary>

  #### Lista todos produtos

  >:warning: Produtos ordenados em ordem alfabética!

  - **Método**: GET
  - **Endpoint**: /product
  - **Descrição**: Lista todos produtos ordenando por id asc
  - **Autenticação**: SIM

  #### Requisição

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - query params:
    - all: não obrigatório, boolean, exemplo: all=true
    - deleted: não obrigatório, boolean, exemplo: deleted=true
  
  >:warning: Ao passar a query all=true, serão mostrados todos os produtos, sejam eles excluídos (soft delete) ou não. Se você quiser apenas os deletados, passe a query deleted=true. Se quiser apenas os disponíveis, não passe nenhuma query. Se ambos forem enviados, todos os produtos, excluídos ou não, serão mostrados. Se um valor diferente de true for passado na query all, apenas os produtos disponíveis serão mostrados. Se o valor da query deleted não for igual a true, os produtos deletados não serão mostrados.

  - Exemplo de requisição:
  - **Método**: GET
  - **URL**:
  ```bash
  http://localhost:3333/product?all=true
  ```

  #### Resposta

  - Exemplo de resposta:

  <details>
    <summary>200 - Query Params não Informado - Produtos não deletados</summary>

  - **Status**: 200
  - **Query Params**: não Informado
  ```json
  [
    {
      "id": 1,
      "name": "Product 1",
      "quantity": 100,
      "price": "10.00",
      "deleted": 0
    },
    {
      "id": 2,
      "name": "Product 2",
      "quantity": 200,
      "price": "20.00",
      "deleted": 0
    }
  ]
  ```
  ---

  </details>

  <details>
    <summary>200 - Query Params Informados - Produtos deletados</summary>

  - **Status**: 200
  - **Query Params**: somente deleted=true
  ```json
  [
    {
      "id": 3,
      "name": "Iron Throne",
      "quantity": 100,
      "price": "3000.00",
      "deleted": 1
    },
    {
      "id": 4,
      "name": "Longclaw",
      "quantity": 100,
      "price": "3000.00",
      "deleted": 1
    }
  ]
  ```
  ---

  </details>

  <details>
    <summary>200 - Query Params Informado - Todos Produtos</summary>

  - **Status**: 200
  - **Query Params**: all=true
  ```json
  [
    {
      "id": 3,
      "name": "Iron Throne",
      "quantity": 100,
      "price": "3000.00",
      "deleted": 1
    },
    {
      "id": 4,
      "name": "Longclaw",
      "quantity": 100,
      "price": "3000.00",
      "deleted": 1
    },
    {
      "id": 1,
      "name": "Product 1",
      "quantity": 100,
      "price": "10.00",
      "deleted": 0
    },
    {
      "id": 2,
      "name": "Product 2",
      "quantity": 200,
      "price": "20.00",
      "deleted": 0
    }
  ]
  ```

  </details>

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
    <summary><strong>Pega produtos por id</strong></summary>

  #### Pega produtos por id

  - **Método**: GET
  - **Endpoint**: /product/:id
  - **Descrição**: Pega produtos por id
  - **Autenticação**: SIM

  #### Requisição

  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  Exemplo de requisição:

  - **Método**: GET
  - **URL**:
  ```bash
  http://localhost:3333/product/1
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 200
  ```json
  {
    "id": 1,
    "name": "Product 1",
    "quantity": 100,
    "price": "10.00",
    "deleted": 0
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

  - **status**: 404
  ```json
  {
    "message": "Product not found"
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
    <summary><strong>Cria um novo produto</strong></summary>

  #### Cria um novo produto

  - **Método**: POST
  - **Endpoint**: /product
  - **Descrição**: Cria um novo produto
  - **Autenticação**: SIM

  #### Requisição

  - body exemplo:
  ```json
  {
    "name": "Product 1",
    "quantity": 100,
    "price": "10.00"
  }
  ```

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login
  
  - Validação:
    - name: obrigatório, min:3
    - quantity: obrigatório, número
    - price: obrigatório, número

  Exemplo de requisição:
  - **Método**: POST
  - **URL**:
  ```bash
  http://localhost:3333/product
  ```

  #### Resposta

  - Exemplo de resposta:

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
    "message": "Missing required fields"
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

  - **status**: 500
  ```json
  {
    "message": "Internal server error"
  }
  ```

  ---

  </details>

  <details>
    <summary><strong>Atualiza produto por id</strong></summary>

  #### Atualiza produto por id

  >:warning: Como Adonis usa o mesmo método no controlador para PUT e PATCH, que é update, esta rota aceitará tanto o método PUT para atualizar todas as propriedades quanto o método PATCH para atualizar apenas uma.

  - **Método**: PUT
  - **Endpoint**: /product/:id
  - **Descrição**: Atualiza produto por id
  - **Autenticação**: SIM

  #### Requisição

  - body exemplo:
  ```json
  {
    "name": "Product 1",
    "quantity": 100,
    "price": "10.00"
  }
  ```

  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - Validação:
    - name: não obrigatório, min:3
    - quantity: não obrigatório, número
    - price: não obrigatório, número

  Exemplo de requisição:

  - **Método**: PUT
  - **URL**:
  ```bash
  http://localhost:3333/product/1
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 200
  ```json
  {
    "message": "Product updated"
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

  - **status**: 404
  ```json
  {
    "message": "Product not found"
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
    <summary><strong>Deleta produto por id</strong></summary>

  #### Deleta produto por id

  >:warning: A Soft delete foi implementada para que, quando um produto for excluído, ele não seja realmente removido do banco de dados. Seu registro é retido, com a coluna deleted definida como 1 quando deleted e como 0 (default) quando disponível.

  - **Método**: DELETE
  - **Endpoint**: /product/:id
  - **Descrição**: Deleta produto por id (soft delete)
  - **Autenticação**: SIM

  #### Requisição

  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  Exemplo de requisição:

  - **Método**: DELETE
  - **URL**:
  ```bash
  http://localhost:3333/product/1
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 200
  ```json
  {
    "message": "Product deleted"
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

  - **status**: 404
  ```json
  {
    "message": "Product not found"
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
  <summary><strong>Sales</strong></summary>

  ### Sales

  <details>
    <summary><strong>Lista todas as vendas</strong></summary>

  #### Lista todas as vendas

  >:warning: Sales will be ordered by id asc!

  - **Método**: GET
  - **Endpoint**: /sale
  - **Descrição**: Lista todas as vendas com cliente e produto
  - **Autenticação**: SIM

  #### Requisição

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login
  
  Exemplo de requisição:

  - **Método**: GET
  - **URL**:
  ```bash
  http://localhost:3333/sale
  ```

  #### Resposta

  - Exemplo de resposta:

  <details>
    <summary>200 - Sales</summary>

  - **Status**: 200
  ```json
  [
    {
      "id": 1,
      "clientId": 1,
      "productId": 1,
      "quantity": 10,
      "price": "10.00",
      "totalPrice": "100.00",
      "date": "2021-01-01T00:00:00.000Z",
      "client": {
        "id": 1,
        "name": "John Snow",
        "taxId": "12345678912"
      },
      "product": {
        "id": 1,
        "name": "Product 1",
        "quantity": 100,
        "price": "10.00",
        "deleted": 0
      }
    },
    {
      "id": 8,
      "clientId": 2,
      "productId": 1,
      "quantity": 20,
      "price": "10.00",
      "totalPrice": "200.00",
      "date": "2021-02-01T00:00:00.000Z",
      "client": {
        "id": 2,
        "name": "Daenerys Targaryen",
        "taxId": "98765432112"
      },
      "product": {
        "id": 1,
        "name": "Product 1",
        "quantity": 100,
        "price": "10.00",
        "deleted": 0
      }
    }
  ]
  ```
  </details>

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
    <summary><strong>Cria uma nova venda</strong></summary>

  #### Cria uma nova venda

  - **Método**: POST
  - **Endpoint**: /sale
  - **Descrição**: Cria uma nova venda
  - **Autenticação**: SIM

  #### Requisição

  - body exemplo:
  ```json
  {
    "clientId": 1,
    "productId": 1,
    "quantity": 10,
    "date": "2024-03-01"
  }
  ```

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  - Validação:
    - clientId: obrigatório, número
    - productId: obrigatório, número
    - quantity: obrigatório, número
    - date: não obrigatório, data valida

  >:warning: O campo data não é obrigatório e caso não seja informado será utilizada a data atual. Se fornecido, deve estar no formato dateTime (2024-03-01T00:00:00) ou em um formato de data válido (2024-03-01).
  >
  >:warning: Ao criar uma venda será verificado se o produto está disponível (não excluído) e se há quantidade suficiente para concretizar a venda. Nesse caso, a quantidade será decrementada no banco de dados.
  >
  >:warning: Se a quantidade for totalmente igual a zero após a venda, o produto será excluído automaticamente do banco de dados(Soft delete).
  >
  >:warning: O preço será obtido diretamente do modelo do Produto, sem a necessidade de passá-lo como parâmetro. Assim, o preço total também será calculado automaticamente, dispensando sua passagem como parâmetro.

  Exemplo de requisição:

  - **Método**: POST
  - **URL**:
  ```bash
  http://localhost:3333/sale
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 201
  ```json
  {
    "clientId": 1,
    "productId": 1,
    "quantity": 2,
    "price": "10.00",
    "totalPrice": 20,
    "date": "2024-03-01T00:00:00.000+00:00",
    "id": 10
  }
  ```

  ---

  - **status**: 400
  ```json
  {
    "message": "Client, product, and quantity are obrigatório"
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

  - **status**: 404
  ```json
  {
    "message": "Client or product not found"
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
    <summary><strong>Deleta uma venda por id</strong></summary>

  #### Deleta uma venda por id

  - **Método**: DELETE
  - **Endpoint**: /sale/:id
  - **Descrição**: Deleta uma venda por id
  - **Autenticação**: SIM

  #### Requisição

  - params:
    - id: obrigatório, número

  - autenticação: Bearer Token
    - token: obrigatório
    - formato: Bearer token
    - Obtenha o token na rota de login

  >:warning: Ao excluir uma venda, a quantidade do produto será incrementada no banco de dados, restaurando o valor que foi decrementado quando a venda foi realizada. Se o produto foi excluído por falta de estoque, ele ficará disponível novamente.

  Exemplo de requisição:

  - **Método**: DELETE
  - **URL**:
  ```bash
  http://localhost:3333/sale/1
  ```

  #### Resposta

  - Exemplo de resposta:

  - **Status**: 200
  ```json
  {
    "message": "Sale deleted"
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

  - **status**: 404
  ```json
  {
    "message": "Sale not found"
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

</details>

---

## 🔒️ License ©️

[MIT](https://choosealicense.com/licenses/mit/)
