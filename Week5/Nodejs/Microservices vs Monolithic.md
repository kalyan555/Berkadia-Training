# Microservice vs Monolithic Architecture
From the perspective of microservice,the benefits and challenges of microservices (when compared with the monolithic model)?

## Benefits
### Deployability: 
more agility to roll out new versions of a service due to shorter build+test+deploy cycles. Also, flexibility to employ service-specific security, replication, persistence, and monitoring configurations.
### Reliability: 
A microservice fault affects that microservice alone and its consumers, whereas in the monolithic model a service fault may bring down the entire monolith.
### Availability: 
Rolling out a new version of a microservice requires little downtime, whereas rolling out a new version of a service in the monolith requires a typically slower restart of the entire monolith.
### Scalability: 
Each microservice can be scaled independently using pools, clusters, grids. The deployment characteristics make microservices a great match for the elasticity of the cloud.
### Modifiability: 
more flexibility to use new frameworks, libraries, datasources, and other resources. Also, microservices are loosely-coupled, modular components only accessible via their contracts, and hence less prone to turn into a big ball of mud.
### Management: 
The application development effort is divided across teams that are smaller and work more independently.
### Design autonomy: 
The team has freedom to employ different technologies, frameworks, and patterns to design and implement each microservice, and can change and redeploy each microservice independently

## Challenges
### Deployability: 
There are far more deployment units, so there are more complex jobs, scripts, transfer areas, and config files to oversee for deployment. (For that reason, continuous delivery and DevOps are highly desirable for microservice projects.)
### Performance: 
Services more likely need to communicate over the network, whereas services within the monolith may benefit from local calls. (For that reason, the design should avoid "chatty" microservices.)
### Modifiability: 
Changes to the contract are more likely to impact consumers deployed elsewhere, whereas in the monolithic model consumers are more likely to be within the monolith and will be rolled out in lockstep with the service. Also, mechanisms to improve autonomy, such as eventual consistency and asynchronous calls, add complexity to microservices.
### Testability: 
Integration tests are harder to setup and run because they may span different microservices on different runtime environments.
### Management: the effort to manage operations increases because there are more runtime components, log files, and point-to-point interactions to oversee.
### Memory use: 
Several classes and libraries are often replicated in each microservice bundle and the overall memory footprint increases.
