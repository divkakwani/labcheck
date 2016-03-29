
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
  | page  | Get the nth page of announcements|
  | pgsz  | Specify the page size |


* ##### GET announcements/&lt;id&gt;
  Gets the announcement having id=id

* ##### POST announcements
  Posts an announcement on the server

* ##### DELETE announcements/&lt;id&gt;
  Deletes the announcement having id=id

* ##### PUT announcements/&lt;id&gt;
  Update the attribute values of the announcement having id=id


### Programs

* ##### GET programs
  Returns all the programs

* ##### GET programs/&lt;id&gt;
  Returns the program with id=id.

* ##### GET programs/&lt;id&gt;/title
  Returns the title of the program having id=id

* ##### GET programs/&lt;id&gt;/stmt
  Returns the title of the program having id=id
