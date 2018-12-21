

## docker build 
Some of the commands with docker build and attributes are

#### 1 -t		Name and optionally a tag in the ‘name:tag’ format

    $ docker build -t sample .


    Sending build context to Docker daemon  17.92kB
    Step 1/8 : FROM node:10-alpine
    10-alpine: Pulling from library/node
    4fe2ade4980c: Pull complete
    9f6aba7bb221: Pull complete
    4033140f5471: Pull complete
    Digest: sha256:15d9f1cd2ca1e5b8c812792e60a1ca6609f1d547268e56f9a6c7d11c39a466dd
    Status: Downloaded newer image for node:10-alpine
     ---> d3ae3465db8d
    Step 2/8 : RUN mkdir -p /src/app
     ---> Running in a39566c71814
    Removing intermediate container a39566c71814
     ---> dd07b39ea5a5
    Step 3/8 : WORKDIR /src/app
    Removing intermediate container ac9cf6719c22
     ---> 57b6f85ac41f
    Step 4/8 : COPY package.json /src/app/package.json
     ---> 4325fd8f081c
    Step 5/8 : RUN npm install
     ---> Running in f65e05cac203
    npm WARN deprecated jade@1.6.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
    npm WARN deprecated constantinople@2.0.1: Please update to at least constantinople 3.1.1
    npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
    npm notice created a lockfile as package-lock.json. You should commit this file.
    added 78 packages from 74 contributors and audited 143 packages in 15.637s
    found 28 vulnerabilities (11 low, 12 moderate, 5 high)
      run `npm audit fix` to fix them, or `npm audit` for details
    Removing intermediate container f65e05cac203
     ---> 7a0f86489f24
    Step 6/8 : COPY . /src/app
     ---> 0853727e2bd0
    Step 7/8 : EXPOSE 3000
     ---> Running in d1abc0b753af
    Removing intermediate container d1abc0b753af
     ---> a713e5f26b38
    Step 8/8 : CMD [ "npm", "start" ]
     ---> Running in f1cefe7f6aff
    Removing intermediate container f1cefe7f6aff
     ---> 477980f77fe7
    Successfully built 477980f77fe7
    Successfully tagged sample:latest
