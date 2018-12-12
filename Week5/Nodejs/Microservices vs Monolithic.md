# Microservice vs Monolithic Architecture
From the perspective of microservice,the benefits and challenges of microservices (when compared with the monolithic model)?

## Benefits
### Deployability: more agility to roll out new versions of a service due to shorter build+test+deploy cycles. Also, flexibility to employ service-specific security, replication, persistence, and monitoring configurations.
### Reliability: a microservice fault affects that microservice alone and its consumers, whereas in the monolithic model a service fault may bring down the entire monolith.
### Availability: rolling out a new version of a microservice requires little downtime, whereas rolling out a new version of a service in the monolith requires a typically slower restart of the entire monolith.
### Scalability: each microservice can be scaled independently using pools, clusters, grids. The deployment characteristics make microservices a great match for the elasticity of the cloud.
### Modifiability: more flexibility to use new frameworks, libraries, datasources, and other resources. Also, microservices are loosely-coupled, modular components only accessible via their contracts, and hence less prone to turn into a big ball of mud.
### Management: the application development effort is divided across teams that are smaller and work more independently.
### Design autonomy: the team has freedom to employ different technologies, frameworks, and patterns to design and implement each microservice, and can change and redeploy each microservice independently

## Challenges
### Deployability: there are far more deployment units, so there are more complex jobs, scripts, transfer areas, and config files to oversee for deployment. (For that reason, continuous delivery and DevOps are highly desirable for microservice projects.)
### Performance: services more likely need to communicate over the network, whereas services within the monolith may benefit from local calls. (For that reason, the design should avoid "chatty" microservices.)
### Modifiability: changes to the contract are more likely to impact consumers deployed elsewhere, whereas in the monolithic model consumers are more likely to be within the monolith and will be rolled out in lockstep with the service. Also, mechanisms to improve autonomy, such as eventual consistency and asynchronous calls, add complexity to microservices.
### Testability: integration tests are harder to setup and run because they may span different microservices on different runtime environments.
### Management: the effort to manage operations increases because there are more runtime components, log files, and point-to-point interactions to oversee.
### Memory use: several classes and libraries are often replicated in each microservice bundle and the overall memory footprint increases.
### Runtime autonomy: in the monolith the overall business logic is collocated. With microservices the logic is spread across microservices. So, all else being equal, it's more likely that a microservice will interact with other microservices over the network--that interaction decreases autonomy. If the interaction between microservices involves changing data, the need for a transactional boundary further compromises autonomy. The good news is that to avoid runtime autonomy issues, we can employ techniques such as eventual consistency, event-driven architecture, CQRS, cache (data replication), and aligning microservices with DDD bounded contexts. These techniques are not inherent to microservices, but have been suggested by virtually every author I've read.
