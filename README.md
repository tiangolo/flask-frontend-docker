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
* Python Flask backend
* Vue frontend
    * Easily updated to be Angular or React.
    * Docker server based on Nginx (configured to play nicely with Vue-router)
    * Docker multi-stage building, so you don't need to save or commit compiled code
    * Frontend tests ran at build time (can be disabled too)
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

The input variables, with their default values (some auto generated) are:

* `project_name`: The name of the project
* `project_slug`: The development friendly name of the project. By default, based on the project name
* `domain_main`: The domain in where to deploy the project for production (from the branch `production`), used by the load balancer, backend, etc. By default, based on the project slug.
* `domain_staging`: The domain in where to deploy while staging (before production) (from the branch `master`). By default, based on the main domain.

* `docker_swarm_stack_name_main`: The name of the stack while deploying to Docker in Swarm mode for production. By default, based on the domain.
* `docker_swarm_stack_name_staging`: The name of the stack while deploying to Docker in Swarm mode for staging. By default, based on the domain.

* `secret_key`: Backend server secret key. Use the method above to generate it.
* `first_superuser`: The first superuser generated, with it you will be able to create more users, etc. By default, based on the domain.
* `first_superuser_password`: First superuser password. Use the method above to generate it.
* `backend_cors_origins`: Origins (domains, more or less) that are enabled for CORS (Cross Origin Resource Sharing). This allows a frontend in one domain (e.g. `https://dashboard.example.com`) to communicate with this backend, that could be living in another domain (e.g. `https://api.example.com`). It can also be used to allow your local frontend (with a custom `hosts` domain mapping, as described in the project's `README.md`) that could be living in `http://dev.example.com:8080` to cummunicate with the backend at `https://stag.example.com`. Notice the `http` vs `https` and the `dev.` prefix for local development vs the "staging" `stag.` prefix. By default, it includes origins for production, staging and development, with ports commonly used during local development by several popular frontend frameworks (Vue with `:8080`, React, Angular).
 
* `couchbase_user`: Couchbase main user to be used by the application (code). By default `admin`.
* `couchbase_password`: Password of the main user, for the backend code. Generate it with the method above.
* `couchbase_sync_gateway_cors`: List of CORS origins that the Sync Gateway should allow to talk to directly. Similar to `backend_cors_origins`.
* `couchbase_sync_gateway_user`: User to be created for the Couchbase Sync Gateway. This is what allows synchronization using the CouchDB protocol, with Couchbase Lite in mobile apps and PouchDB in the web and hybrid mobile apps.
* `couchbase_sync_gateway_password`: Couchbase Sync Gateway password. Generate it with the method above.
 
* `traefik_constraint_tag`: The tag to be used by the internal Traefik load balancer (for example, to divide requests between backend and frontend) for production. Used to separate this stack from any other stack you might have. This should identify each stack in each environment (production, staging, etc).
* `traefik_constraint_tag_staging`: The Traefik tag to be used while on staging. 

* `traefik_public_network`: This assumes you have another separate publicly facing Traefik at the server / cluster level. This is the network that main Traefik lives in.
* `traefik_public_constraint_tag`: The tag that should be used by stack services that should communicate with the public.

* `flower_auth`: Basic HTTP authentication for flower, in the form`user:password`. By default: "`root:changethis`".

* `sentry_dsn`: Key URL (DSN) of Sentry, for live error reporting. If you are not using it yet, you should, is open source. E.g.: `https://1234abcd:5678ef@sentry.example.com/30`.

* `docker_image_prefix`: Prefix to use for Docker image names. If you are using GitLab Docker registry it would be based on your code repository. E.g.: `git.example.com/development-team/my-awesome-project/`.
* `docker_image_backend`: Docker image name for the backend. By default, it will be based on your Docker image prefix, e.g.: `git.example.com/development-team/my-awesome-project/backend`. And depending on your environment, a different tag will be appended ( `prod`, `stag`, `branch` ). So, the final image names used will be like: `git.example.com/development-team/my-awesome-project/backend:prod`.
* `docker_image_celeryworker`: Docker image for the celery worker. By default, based on your Docker image prefix.
* `docker_image_frontend`: Docker image for the frontend. By default, based on your Docker image prefix.
* `docker_image_sync_gateway`: Docker image for the Sync Gateway. By default, based on your Docker image prefix.

## How to deploy

This stack can be adjusted and used with several deployment options that are compatible with Docker Compose, but it is designed to be used in a cluster controlled with pure Docker in Swarm Mode with a Traefik main load balancer proxy.

Read the [**Guide to deploy a Docker Swarm Mode Cluster**](https://github.com/tiangolo/full-stack/blob/master/docker-swarm-cluster-deploy.md).

## More details

After using this generator, your new project (the directory created) will contain an extensive `README.md` with instructions for development, deployment, etc. You can pre-read [the project `README.md` template here too](./{{cookiecutter.project_slug}}/README.md).

## License

This project is licensed under the terms of the MIT license.
