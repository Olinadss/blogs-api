---

# Projeto Blogs API!

# Habilidades

Neste projeto eu desenvolvi uma API de CRUD para posts de blog (com o Sequelize). Começando pela API, eu construí alguns endpoints (seguindo os princípios do REST) que estão conectados ao meu banco de dados:

 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`


##Ferramentas usadas

  -Banco de dados utilizado foi o MySQL  
  -Estè projeto foi feito com Node.js utilizando o pacote sequelize.

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:Olinadss/blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd blogs-api`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie, na raíz do projeto, um arquivo .env contendo as seguintes variáveis:
  
  ```js
  HOSTNAME=seu-host-mysql
  MYSQL_USER=seu-usuario-mysql
  MYSQL_PASSWORD=sua-senha-mysql
  JWT_SECRET=qualquer-string-aleatoria
  PORT=porta-para-iniciar-aplicação
```

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`sd-014-b-project-blogs-api/config/config.js`

```js
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

## FEEDBACKS

  -Caso queira dar alguma sugestão entre em contato comigo via linkedin: https://www.linkedin.com/in/danilodossantossouza/

  -Ficarei feliz em receber!
