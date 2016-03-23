# The File Server for labcheck

This service provides file upload/download facility 
to other services.

There are three types of file that the server identifies:
* Program files
    * Statement
    * Submissions
* Handouts files


### Internal Storage
The files are stored in the `files` dir as follows:

```
- files
    - handouts
        - coursecode1
            - file 1
            - file 2
            - ...
        - ...
    - programs
        - coursecode1
            - pid1
                - statement
                - submissions
                    - 1RV13IS004
                    - 1RV13IS015
            - pid2
            ...

```

### Accessing files
To access a particular file, a user has to just request the address of the file
relative to the `files` dir. For example, the url `locahost:5000/programs/13CS44/3/statement`
returns the statement of the 3rd program in the course 13CS44.


