

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
#### 2 -tag		Name and optionally a tag in the ‘name:tag’ format

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

#### 3 --label		Set metadata for an image
        $ docker build --label example .


        Sending build context to Docker daemon  17.92kB
        Step 1/9 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/9 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/9 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/9 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/9 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/9 : COPY . /src/app
        ---> Using cache
        ---> 0853727e2bd0
        Step 7/9 : EXPOSE 3000
        ---> Using cache
        ---> a713e5f26b38
        Step 8/9 : CMD [ "npm", "start" ]
        ---> Using cache
        ---> 477980f77fe7
        Step 9/9 : LABEL "example"=''
        ---> Running in 0b5af916f9e3
        Removing intermediate container 0b5af916f9e3
        ---> b4cefa7fb98d
        Successfully built b4cefa7fb98d

#### 4 --file		Name of the Dockerfile (Default is ‘PATH/Dockerfile’)

        $ docker build --file Dockerfile .


        Sending build context to Docker daemon  18.94kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> 1348de19e194
        Step 7/8 : EXPOSE 3000
        ---> Running in a7ad814554c1
        Removing intermediate container a7ad814554c1
        ---> 316d3e97509b
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Running in fe10dbbe042c
        Removing intermediate container fe10dbbe042c
        ---> a90b241bc1bc
        Successfully built a90b241bc1bc

#### 5 --f		Name of the Dockerfile (Default is ‘PATH/Dockerfile’)

        $ docker build -f Dockerfile .


        Sending build context to Docker daemon  18.94kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> 1348de19e194
        Step 7/8 : EXPOSE 3000
        ---> Running in a7ad814554c1
        Removing intermediate container a7ad814554c1
        ---> 316d3e97509b
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Running in fe10dbbe042c
        Removing intermediate container fe10dbbe042c
        ---> a90b241bc1bc
        Successfully built a90b241bc1bc

#### 6 --iidfile		Write the image ID to the file
        $ docker build -f Dockerfile . --iidfile 8374456269


        Sending build context to Docker daemon  18.94kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> Using cache
        ---> 1348de19e194
        Step 7/8 : EXPOSE 3000
        ---> Using cache
        ---> 316d3e97509b
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Using cache
        ---> a90b241bc1bc
        Successfully built a90b241bc1bc

#### 7 --memory 		Memory limit
        $ docker build -f Dockerfile . --memory 800


        Sending build context to Docker daemon  19.97kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> b960a228ecb8
        Step 7/8 : EXPOSE 3000
        Minimum memory limit allowed is 4MB

#### 8 -m 		Memory limit
        $ docker build -t Dockerfile . -m 800


        Sending build context to Docker daemon  19.97kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> b960a228ecb8
        Step 7/8 : EXPOSE 3000
        Minimum memory limit allowed is 4MB

#### 9 <no flag> create a image
        $ docker build .


        Sending build context to Docker daemon  19.97kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> Using cache
        ---> b960a228ecb8
        Step 7/8 : EXPOSE 3000
        ---> Running in 398992747c16
        Removing intermediate container 398992747c16
        ---> d53fdb93e2b1
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Running in 628ae32e4174
        Removing intermediate container 628ae32e4174
        ---> 608ad1c28d33
        Successfully built 608ad1c28d33

#### 10 --rm Remove intermediate containers after a successful build
        $ docker build . --rm


        Sending build context to Docker daemon  19.97kB
        Step 1/8 : FROM node:10-alpine
        ---> d3ae3465db8d
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> dd07b39ea5a5
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 57b6f85ac41f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 4325fd8f081c
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 7a0f86489f24
        Step 6/8 : COPY . /src/app
        ---> Using cache
        ---> b960a228ecb8
        Step 7/8 : EXPOSE 3000
        ---> Using cache
        ---> d53fdb93e2b1
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Using cache
        ---> 608ad1c28d33
        Successfully built 608ad1c28d33

#### 11 --quiet		Suppress the build output and print image ID on success
        $ docker build . --quiet

        sha256:608ad1c28d3371e6ab6ebb41f889766b9b5fee2f02b3ae4c7a3d56c513337690

#### 12 --q		Suppress the build output and print image ID on success
        $ docker build . -q

        sha256:608ad1c28d3371e6ab6ebb41f889766b9b5fee2f02b3ae4c7a3d56c513337690

#### 13 --cache-from		Images to consider as cache sources
        $ docker build -t ex . --cache-from sample

        Sending build context to Docker daemon  17.92kB
        Step 1/8 : FROM node:10-alpine
        ---> 01379e6790c7
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> 78bc14c69d64
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 4df50d43c61f
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 2aaa1aabaedb
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 37f0803a568b
        Step 6/8 : COPY . /src/app
        ---> Using cache
        ---> 5a714f24a517
        Step 7/8 : EXPOSE 3000
        ---> Using cache
        ---> 3d6fff6d4853
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Using cache
        ---> 104620773cb3
        Successfully built 104620773cb3
        Successfully tagged ex:latest

#### 14 --no-cache		Do not use cache when building the image
        $ docker build -t ex1 . --no-cache

        Sending build context to Docker daemon  17.92kB
        Step 1/8 : FROM node:10-alpine
        ---> 01379e6790c7
        Step 2/8 : RUN mkdir -p /src/app
        ---> Running in 2e5ce0c1fb35
        Removing intermediate container 2e5ce0c1fb35
        ---> 898045d7075b
        Step 3/8 : WORKDIR /src/app
        Removing intermediate container b67af2966172
        ---> 28328904116b
        Step 4/8 : COPY package.json /src/app/package.json
        ---> 2ba7fb0abc3e
        Step 5/8 : RUN npm install
        ---> Running in 93cf216d917c
        npm WARN deprecated jade@1.6.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
        npm WARN deprecated constantinople@2.0.1: Please update to at least constantinople 3.1.1
        npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
        npm notice created a lockfile as package-lock.json. You should commit this file.
        added 78 packages from 74 contributors and audited 143 packages in 3.265s
        found 28 vulnerabilities (11 low, 12 moderate, 5 high)
        run `npm audit fix` to fix them, or `npm audit` for details
        Removing intermediate container 93cf216d917c
        ---> 813608aa11d8
        Step 6/8 : COPY . /src/app
        ---> 4a894c853748
        Step 7/8 : EXPOSE 3000
        ---> Running in 253f3e738635
        Removing intermediate container 253f3e738635
        ---> bd58ad036071
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Running in f76cf68c5c64
        Removing intermediate container f76cf68c5c64
        ---> d7cb10bf52e1
        Successfully built d7cb10bf52e1
        Successfully tagged ex1:latest

#### 15 --compress		Compress the build context using gzip
        $ docker build -t ex1 . --compress

        Sending build context to Docker daemon  1.951kB
        Step 1/8 : FROM node:10-alpine
        ---> 01379e6790c7
        Step 2/8 : RUN mkdir -p /src/app
        ---> Using cache
        ---> 898045d7075b
        Step 3/8 : WORKDIR /src/app
        ---> Using cache
        ---> 28328904116b
        Step 4/8 : COPY package.json /src/app/package.json
        ---> Using cache
        ---> 2ba7fb0abc3e
        Step 5/8 : RUN npm install
        ---> Using cache
        ---> 813608aa11d8
        Step 6/8 : COPY . /src/app
        ---> Using cache
        ---> 4a894c853748
        Step 7/8 : EXPOSE 3000
        ---> Using cache
        ---> bd58ad036071
        Step 8/8 : CMD [ "npm", "start" ]
        ---> Using cache
        ---> d7cb10bf52e1
        Successfully built d7cb10bf52e1
        Successfully tagged ex1:latest
