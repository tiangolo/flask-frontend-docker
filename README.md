# Flask Frontend Docker - project generator

[![Build Status](https://travis-ci.org/tiangolo/flask-frontend-docker.svg?branch=master)](https://travis-ci.org/tiangolo/flask-frontend-docker)

Generate stack with a a Flask backend and a modern (Vue.js, React, Angular) frontend.

Each in its own container, with routes handled by a Traefik proxy.

With automatic HTTPS certificate generation using Let's Encrypt.


## Features

* Full Docker integration (Docker based)
* Docker Swarm Mode deployment
* Docker Compose integration and optimization for local development
* Production ready Python web server using Nginx and uWSGI
* Python Flask backend:
    * CORS already configured, to be used by the frontend.
* Vue frontend
    * Easily updated to be Angular or React.
    * Docker server based on Nginx (configured to play nicely with Vue-router)
    * Docker multi-stage building, so you don't need to save or commit compiled code
    * Easily enable frontend tests at build time
* Load balancing between frontend and backend with Traefik:
    * So you can have both backend and frontend under the same domain, separated by path, but served by the two different containers
* Automatic (free) HTTPS certificate generation with Let's Encrypt and Traefik

## How to use it

Go to the directoy where you want to create your project and run:

```bash
pip install cookiecutter
cookiecutter https://github.com/tiangolo/flask-frontend-docker
```

### Input variables

The generator (cookiecutter) will ask you for some data, you might want to have at hand before generating the project.

To see the variables asked, check the [`cookiecutter.json` file](./cookiecutter.json).

## How to deploy

This stack can be adjusted and used with several deployment options that are compatible with Docker Compose, but it is designed to be used in a cluster controlled with pure Docker in Swarm Mode with a Traefik main load balancer proxy.

Read the [**Guide to deploy a Docker Swarm Mode Cluster**](https://medium.com/@tiangolo/docker-swarm-mode-and-traefik-for-a-https-cluster-20328dba6232).

## More details

After using this generator, your new project (the directory created) will contain an extensive `README.md` with instructions for development, deployment, etc. You can pre-read [the project `README.md` template here too](./{{cookiecutter.project_slug}}/README.md).

## License

This project is licensed under the terms of the MIT license.
