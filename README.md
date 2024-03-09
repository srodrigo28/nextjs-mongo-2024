### Criando DevControle NextTSX + Google Auth

#### Criando projeto roteiro

##### 1. Next Criando projeto
    npx create-next-app@latest

##### 2. Configuração inicial Header
* 2.1 Configurando o page e layout
* 2.2 npm i react-icons

##### 3. page inicial
* 3.1 Criando components Header
* 3.2 Criando dashboard

##### 4. NextAuth + ORM Teoria

###### 4.1 NextAuth + ORM Instalando
```link
https://www.udemy.com/course/nextjs-zero-ao-avancado/learn/lecture/40979908#overview
```
4.2. instalar dependências
    npm install next-auth
    npm install prisma --save-dev
    npm install @prisma/client
    npx prisma init

4.3. Google auth
    npm install @auth/prisma-adapter
    

###### 4.2 Criando pastas e arquivos
* 4.1 Criando lib/
* 4.2 criando auth.ts
* 4.3 criando prisma.ts

###### 4.3 Env variaveis de ambientes
DATABASE_URL=""
NODE_ENV=development

NEXTAUTH_URL=http://localhost:3000
HOST_URL=http://localhost:3000
NEXTAUTH_SECRET=projetosecreto123

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=


5.2 NextAuth + ORM Finalizando

6. MongoDB

7. Google Auth

#####  5. 1 Finalizandoo auth e configurações banco


#### Link Referências.
https://www.udemy.com/course/nextjs-zero-ao-avancado/learn/lecture/40979896#overview