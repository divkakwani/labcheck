
# Database Manager (DBM) Service API

### Base URL

All URLs have the following base:
```
    <server_address>:<portno>/<coursecode>/
```



### Announcements

* ##### GET announcements
	Returns all the announcements


  | Param | Description |
  | ----  | ----- |
  | id    | Get the announcement with id=id;|
  | page  | Get the nth page of announcement|
  | pgsz  | Specify the page size |


* #### GET announcements/id
  Gets the announcement having id=id

* #### POST announcements
  Posts an announcement on the server

* #### DELETE announcements/id
  Deletes the announcement having id=id

* #### PUT announcements/id
  Update the attribute values of the announcement having id=id
