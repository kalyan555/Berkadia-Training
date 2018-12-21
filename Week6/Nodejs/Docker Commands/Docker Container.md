## docker container 
Some of the commands with docker build and attributes are

#### 1 --help              Get info about the command                 
        $ docker container --help

        Usage:  docker container COMMAND

        Manage containers

        Commands:
          attach      Attach local standard input, output, and error streams to a running container
          commit      Create a new image from a container's changes
          cp          Copy files/folders between a container and the local filesystem
          create      Create a new container
          diff        Inspect changes to files or directories on a container's filesystem
          exec        Run a command in a running container
          export      Export a container's filesystem as a tar archive
          inspect     Display detailed information on one or more containers
          kill        Kill one or more running containers
          logs        Fetch the logs of a container
          ls          List containers
          pause       Pause all processes within one or more containers
          port        List port mappings or a specific mapping for the container
          prune       Remove all stopped containers
          rename      Rename a container
          restart     Restart one or more containers
          rm          Remove one or more containers
          run         Run a command in a new container
          start       Start one or more stopped containers
          stats       Display a live stream of container(s) resource usage statistics
          stop        Stop one or more running containers
          top         Display the running processes of a container
          unpause     Unpause all processes within one or more containers
          update      Update configuration of one or more containers
          wait        Block until one or more containers stop, then print their exit code.

#### 1 -ls              To list all the active cotainers               
        $ docker container ls
                
        CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
        b1d419c977ee        sample              "npm start"         15 minutes ago      Up 15 minutes       0.0.0.0:3000->3000/tcp   sample

#### 2 -ls -a             To list all the  cotainers               
        $ docker container ls -a
                
        CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES
        b1d419c977ee        sample              "npm start"         15 minutes ago      Up 15 minutes       0.0.0.0:3000->3000/tcp   sample
        b1d419c977ed        kalyan              "npm start"         15 minutes ago      exited 5 min ago    0.0.0.0:3000->3000/tcp   kalyan

#### 3 -ls --no-trunc		      Don’t truncate output               
        $ docker container ls -a

        NAMES
        b1d419c977eecc8499bb2f67a6b0c166ab8ce5c60d1da1ea8dc3fbecd89e33ac   sample    "npm start"   17 minutes ago   Up 17 minutes   0.0.0.0:3000->3000/tcp   sample

#### 4 -ls -q		Only display numeric IDs        
        $ docker container ls -a -q

        b1d419c977ee

#### 5 -ls --quiet	Only display numeric IDs        
        $ docker container ls -a --quiet

        b1d419c977ee

#### 6  -ls -s		Display total file sizes
        $ docker container ls -a -s

       CONTAINER ID    IMAGE        COMMAND         CREATED            STATUS           PORTS                    NAMES    SIZE
       b1d419c977ee    sample       "npm start"     23 minutes ago     Up 23 minutes    0.0.0.0:3000->3000/tcp   sample   55B (virtual 77MB)

#### 7 -ls --size		Display total file sizes
        $ docker container ls -a --size

       CONTAINER ID    IMAGE        COMMAND         CREATED            STATUS           PORTS                    NAMES    SIZE
       b1d419c977ee    sample       "npm start"     23 minutes ago     Up 23 minutes    0.0.0.0:3000->3000/tcp   sample   55B (virtual 77MB)
       
#### 8 commit   Create a new image from a container’s changes
        $ docker container commit sample

        sha256:a6be83a40c4e15c401d8ff823581571100e5b5f5be490901b019ee1d5b328c14

#### 9 commit   Create a new image from a container’s changes
        $ docker container commit sample

        sha256:a6be83a40c4e15c401d8ff823581571100e5b5f5be490901b019ee1d5b328c14

#### 10 create   Create a new container
        $ docker container create sample

        ee8c34867e7c0629569f2405961a8dd2d61b71b2c050c3470db5749ef1139ff2

#### 10 create  --read-only		Mount the container’s root filesystem as read only
        $ docker container create sample --read-only

        5241af1350552eda6aefbce193f2f15b4c621ae3e000d85bc33f627a62d09575

#### 10  -m		      Memory limit
        $ docker container create  -m=5000MB sample

        8fb850cacb2d8c3c0a017687e4a4d6816e33009edf426a0f8559b792cdd707c1

#### 11  --memory		Memory limit
        $ docker container create  --memory=5000MB sample

        8fb850cacb2d8c3c0a017687e4a4d6816e33009edf426a0f8559b792cdd707c1

#### 12 exec        To execute any of the container commands
        $ docker container exec container create  --memory=5000MB sample

        8fb850cacb2d8c3c0a017687e4a4d6816e33009edf426a0f8559b792cdd707c1

#### 13 export      Export a container’s filesystem as a tar archive
        $ docker container export sample

        //sample.tar file will be created

#### 14 kill         Kill one or more running containers

        $ docker container kill sample
        sample

#### 15 rename       Rename a container
        $ docker container rename sample samp
        
        //container will be renamed

#### 16 rm       Remove a container that is not running
        docker container rm  sample

        sample  

#### 17 rename       Rename a container that is running
        docker container rm -f samp

        samp  

#### 18 restart       Restart one or more containers
        $ docker container restart sample

        sample

#### 19 start       Start one or more containers
        $ docker container start sample

        sample

#### 20 stats       Display a live stream of container(s) resource usage statistics
        $ docker container ls -a

        CONTAINER ID        NAME                CPU %               MEEATED             STATM USAGE / LIMIT    MEM %               NET I/O             BLO
        CK I/O           PIDS                                         minutes ago       Exit716550d7f1a5        sample              0.00%               30
        .8MiB / 737.5MiB   4.18%               8.16kB / 90B        0B
        / 4.1kB          18


#### 21 stop       Stop one or more running containers
        $ docker container stop sample

        sample

#### 21 top       Display the running processes of a container
        $ docker container top sample

        UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
        root                1568                1546                0                   10:41               ?                   00:00:00            npm
        root                1677                1568                0                   10:41               ?                   00:00:00            node ./bin/www


#### 22 inspect       Display detailed information on one or more containers
        $ docker container inspect sample

        [
            {
                "Id": "e954bf44a21512db089e45ea363a31207d95e8b65e835a063cea64ba25795956",
                "Created": "2018-12-21T10:31:30.369534829Z",
                "Path": "npm",
                "Args": [
                    "start"
                ],
                "State": {
                    "Status": "running",
                    "Running": true,
                    "Paused": false,
                    "Restarting": false,
                    "OOMKilled": false,
                    "Dead": false,
                    "Pid": 1017,
                    "ExitCode": 0,
                    "Error": "",
                    "StartedAt": "2018-12-21T10:31:30.879312762Z",
                    "FinishedAt": "0001-01-01T00:00:00Z"
                },
                "Image": "sha256:d72a97179274aeebb9d94e8a4908bdd68dfca05890559409ccbac68aff314f11",
                "ResolvConfPath": "/var/lib/docker/containers/e954bf44a21512db089e45ea363a31207d95e8b65e835a063cea64ba25795956/resolv.conf",
                "HostnamePath": "/var/lib/docker/containers/e954bf44a21512db089e45ea363a31207d95e8b65e835a063cea64ba25795956/hostname",
                "HostsPath": "/var/lib/docker/containers/e954bf44a21512db089e45ea363a31207d95e8b65e835a063cea64ba25795956/hosts",
                "LogPath": "/var/lib/docker/containers/e954bf44a21512db089e45ea363a31207d95e8b65e835a063cea64ba25795956/e954bf44a21512db089e45ea363a31207d95e8b65e835a063cea64ba25795956-json.log",
                "Name": "/sample",
                "RestartCount": 0,
                "Driver": "overlay",
                "Platform": "linux",
                "MountLabel": "",
                "ProcessLabel": "",
                "AppArmorProfile": "",
                "ExecIDs": null,
                "HostConfig": {
                    "Binds": null,
                    "ContainerIDFile": "",
                    "LogConfig": {
                        "Type": "json-file",
                        "Config": {}
                    },
                    "NetworkMode": "default",
                    "PortBindings": {
                        "3000/tcp": [
                            {
                                "HostIp": "",
                                "HostPort": "3000"
                            }
                        ]
                    },
                    "RestartPolicy": {
                        "Name": "no",
                        "MaximumRetryCount": 0
                    },
                    "AutoRemove": false,
                    "VolumeDriver": "",
                    "VolumesFrom": null,
                    "CapAdd": null,
                    "CapDrop": null,
                    "Dns": [],
                    "DnsOptions": [],
                    "DnsSearch": [],
                    "ExtraHosts": null,
                    "GroupAdd": null,
                    "IpcMode": "shareable",
                    "Cgroup": "",
                    "Links": null,
                    "OomScoreAdj": 0,
                    "PidMode": "",
                    "Privileged": false,
                    "PublishAllPorts": false,
                    "ReadonlyRootfs": false,
                    "SecurityOpt": null,
                    "UTSMode": "",
                    "UsernsMode": "",
                    "ShmSize": 67108864,
                    "Runtime": "runc",
                    "ConsoleSize": [
                        0,
                        0
                    ],
                    "Isolation": "",
                    "CpuShares": 0,
                    "Memory": 0,
                    "NanoCpus": 0,
                    "CgroupParent": "",
                    "BlkioWeight": 0,
                    "BlkioWeightDevice": [],
                    "BlkioDeviceReadBps": null,
                    "BlkioDeviceWriteBps": null,
                    "BlkioDeviceReadIOps": null,
                    "BlkioDeviceWriteIOps": null,
                    "CpuPeriod": 0,
                    "CpuQuota": 0,
                    "CpuRealtimePeriod": 0,
                    "CpuRealtimeRuntime": 0,
                    "CpusetCpus": "",
                    "CpusetMems": "",
                    "Devices": [],
                    "DeviceCgroupRules": null,
                    "DiskQuota": 0,
                    "KernelMemory": 0,
                    "MemoryReservation": 0,
                    "MemorySwap": 0,
                    "MemorySwappiness": null,
                    "OomKillDisable": false,
                    "PidsLimit": 0,
                    "Ulimits": null,
                    "CpuCount": 0,
                    "CpuPercent": 0,
                    "IOMaximumIOps": 0,
                    "IOMaximumBandwidth": 0
                },
                "GraphDriver": {
                    "Data": {
                        "LowerDir": "/var/lib/docker/overlay/900fc824ec92fd2525f43f19c35d1e5ed8a9a39a54640a67493614df581cd45b/root",
                        "MergedDir": "/var/lib/docker/overlay/958113e79d056631f85c8e4bd0dc145ae8fd9dab0ab0c31906bd9c24e04cf02e/merged",
                        "UpperDir": "/var/lib/docker/overlay/958113e79d056631f85c8e4bd0dc145ae8fd9dab0ab0c31906bd9c24e04cf02e/upper",
                        "WorkDir": "/var/lib/docker/overlay/958113e79d056631f85c8e4bd0dc145ae8fd9dab0ab0c31906bd9c24e04cf02e/work"
                    },
                    "Name": "overlay"
                },
                "Mounts": [],
                "Config": {
                    "Hostname": "e954bf44a215",
                    "Domainname": "",
                    "User": "",
                    "AttachStdin": false,
                    "AttachStdout": false,
                    "AttachStderr": false,
                    "ExposedPorts": {
                        "3000/tcp": {}
                    },
                    "Tty": false,
                    "OpenStdin": false,
                    "StdinOnce": false,
                    "Env": [
                        "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                        "NODE_VERSION=10.14.2",
                        "YARN_VERSION=1.12.3"
                    ],
                    "Cmd": [
                        "npm",
                        "start"
                    ],
                    "ArgsEscaped": true,
                    "Image": "sample",
                    "Volumes": null,
                    "WorkingDir": "/src/app",
                    "Entrypoint": null,
                    "OnBuild": null,
                    "Labels": {}
                },
                "NetworkSettings": {
                    "Bridge": "",
                    "SandboxID": "e5f74bcbb4ba593ae249f43042c6f18e9a1304413a8761d5a5b52029aad31574",
                    "HairpinMode": false,
                    "LinkLocalIPv6Address": "",
                    "LinkLocalIPv6PrefixLen": 0,
                    "Ports": {
                        "3000/tcp": [
                            {
                                "HostIp": "0.0.0.0",
                                "HostPort": "3000"
                            }
                        ]
                    },
                    "SandboxKey": "/var/run/docker/netns/e5f74bcbb4ba",
                    "SecondaryIPAddresses": null,
                    "SecondaryIPv6Addresses": null,
                    "EndpointID": "4598290095f0858f8826764c749526dd84257f6fb4e4865a0550a6c0c52433c7",
                    "Gateway": "172.18.0.1",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "IPAddress": "172.18.0.2",
                    "IPPrefixLen": 24,
                    "IPv6Gateway": "",
                    "MacAddress": "02:42:ac:12:00:02",
                    "Networks": {
                        "bridge": {
                            "IPAMConfig": null,
                            "Links": null,
                            "Aliases": null,
                            "NetworkID": "8fc7ae9098ba408619e3daa0f5179e4450e65853dc415c8b02a49651b27a1f95",
                            "EndpointID": "4598290095f0858f8826764c749526dd84257f6fb4e4865a0550a6c0c52433c7",
                            "Gateway": "172.18.0.1",
                            "IPAddress": "172.18.0.2",
                            "IPPrefixLen": 24,
                            "IPv6Gateway": "",
                            "GlobalIPv6Address": "",
                            "GlobalIPv6PrefixLen": 0,
                            "MacAddress": "02:42:ac:12:00:02",
                            "DriverOpts": null
                        }
                    }
                }
            }
        ]
