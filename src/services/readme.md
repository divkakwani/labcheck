## Services

This directory contains all the services that labcheck uses.


Every service occupies a distinct directory. Each service has its own
server and runs independently of the main application or other services.

Note that, each service I/Os only in json format. This is because these services are not intended 
to be used by the end-users of labcheck _directly_. Their usage is carried out by the constituent
react components and views internally, all oblivious to the end-users.




