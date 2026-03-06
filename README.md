# Zach's Outdoor Blog / Gear Review RESTful API Backend

## Description

This project is a RESTful API backend server created with the Nest.js framework. It connects to a PostgreSQL database running through Docker, and uses Prisma as an ORM. This API has the ability to update information on articles, users, trails, and many more models related to an outdoor themed blogging website. This project was created with an outdoor themed blog in mind, which will connect to this API as its backend server.

## Environment Setup

To run this API locally, you must have Docker Enginer installed on your local machine. The installation process for Docker Enginer (on Ubuntu) can be found [here](https://docs.docker.com/engine/install/ubuntu/).
Then, fork and then clone this repository.

---

Once the repository is downloaded, cd into the project directory and run:
```bash
$ npm install
```
This will install all of the required npm packages.

Now, open the folder in your favorite code editor.

---

Before you start the API server, there are a few more steps that need to be completed.

First off, it is important to note that the ```docker-compose.yml``` file references environment variables. You must define those variables. Here's what I did:

Create a .env file, and add three variables: DB_USER, DB_PASSWORD, and DB_URL.
Your .env file should look something like this:
```bash
DB_USER="username"
DB_PASSWORD="password"
DATABASE_URL="protocol://[user]:[password]@[host]:[port]/[dbname]"
```
Note: Make sure to replace the contents of all variables to actual values.

This should conclude the environment setup.

## Project Setup

At this point Docker Engine should be installed. Start Docker by running the following:
```bash
$ sudo service docker start
```
To check that Docker is running, run:
```bash
$ sudo service docker status
```
You should see something that says "* Docker is running"

---

In the same terminal window, run the following command two commands:
```bash
docker compose down -v
docker compose up --build
```
Compose down will make sure that you are building from a clean slate, and then compose up will start your an instance of PostgreSQL database through Docker.

After that, in a new terminal window (still inside the project directory), run the following three commands:
```bash
$ npx prisma generate
$ npx prisma migrate dev
$ npx prisma db seed
```

This should generate a Prisma client folden inside of your src directory, migrate the schema, and seed the database.

## Run The Project

To run the project locally, run one of the following commands:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run Tests

To test the API, run the project and head to ```localhost:PORT/api``` Here, you will have a visual GUI of all endpoint, and the ability to test them.

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Technologies Used
TypeScript
[Nest.js](https://github.com/nestjs/nest)
Docker Engine
PostgreSQL
Prisma ORM
Swagger
Swagger Express
