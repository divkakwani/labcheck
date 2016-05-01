
Application Architectures
===========================

Labcheck has a service-oriented architetures, where most of the services are
directly exposed to public. Upon making request for labcheck, a client receives
a UI skeleton from the main server. The data is then pulled by the UI skeleton
from various web services.

Following are the web services that labcheck uses presently:
* dbm
* ftp
* reportgen


Authentication
~~~~~~~~~~~~~~~~


