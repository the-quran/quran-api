# The Quran API
The Quran API is built with NestJS, Graphql, Docker, Docker Compose, Kubernetes, Prisma and PostgreSQL.


## CI/CD (DevOps)
Continuous integration(CI), continuous delivery/deployment(CD) are DevOps practices that aim to speed the software delivery without compromising on quality. By automating as many steps in the process as possible, CI/CD provides rapid feedback builds to shorten the time it takes to release software to users.

- [Run Amazon Linux 2 as a virtual machine on premises](https://github.com/mehradi-github/ref-devops-flow#run-amazon-linux-2-as-a-virtual-machine-on-premises)
- [Installing Docker](https://github.com/mehradi-github/ref-devops-flow#installing-docker)
- [Installing docker-compose](https://github.com/mehradi-github/ref-graphql#installing-docker-compose)

  - Build & run with docker:
    ``` bash
    docker build -t quran-api .
    docker run -dp 3001:3001 quran-api
    ```
  - With docker-compose:
    ```bash
      docker-compose up -d --build
    ```