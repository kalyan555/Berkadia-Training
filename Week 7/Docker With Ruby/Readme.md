# Docker With Ruby
This example indicates how to run ruby program for calculating even numbers upto 10 on docker container

## Output
The output of this docker ruby program is 
#### By running the build command:

    $ docker build -t example .
    Sending build context to Docker daemon  5.632kB
    Step 1/5 : FROM ruby:2.5
    2.5: Pulling from library/ruby
    54f7e8ac135a: Pull complete
    d6341e30912f: Pull complete
    087a57faf949: Pull complete
    5d71636fb824: Pull complete
    0c1db9598990: Pull complete
    a054b67f1226: Pull complete
    620e566e34dc: Pull complete
    2e7a09f266aa: Pull complete
    Digest: sha256:5cf80488830676b32c9533a4e3cbf06c8c940c999052412b8ed2a5b5d3200c87
    Status: Downloaded newer image for ruby:2.5
     ---> 7834f5f61ba8
    Step 2/5 : RUN bundle config --global frozen 1
     ---> Running in 8fc95956d9a7
    Removing intermediate container 8fc95956d9a7
     ---> abc4847e3423
    Step 3/5 : WORKDIR /usr/src/app
    Removing intermediate container 063bb9fad96e
     ---> 8610c2b1c7dc
    Step 4/5 : COPY . .
     ---> a1d67a408aa2
    Step 5/5 : CMD ["ruby","./app.rb"]
     ---> Running in 323c5fef690b
    Removing intermediate container 323c5fef690b
     ---> 56ba9590fe7a
    Successfully built 56ba9590fe7a
    Successfully tagged example:latest

#### By running the run command:

    $ docker run example
    ---------------------------------------------------------------------------------------
    * * * *     * * * *     * * * *     *    *     * * * *     * * *     * * * *    * * * *
    *     *     *           *     *     *  *       *     *     *     *      *       *     *
    * * * *     * * * *     * * * *     *          * * * *     *     *      *       * * * *
    *     *     *           *  *        *  *       *     *     *     *      *       *     *
    * * * *     * * * *     *     *     *    *     *     *     * * *     * * * *    *     *
    ---------------------------------------------------------------------------------------
    The even number upto 10 are:
    0
    2
    4
    6
    8
    10
