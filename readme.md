
## LabCheck

A web application that empowers programming labs.

![LabCheck](https://raw.githubusercontent.com/divkakwani/labcheck/master/screenshot.png)

### Goals of this project

* Digital Attendance
* Automatic program testing
* Plagiarism Check
* Digital Student Record
* Announcement Board
* Online handouts distribution 
* Resources Acquisition

### Technologies used
The core application is written in python. For its web interface, it uses flask at server-side
and a mix of react, jquery and semantic ui at the client-side.


### TODO
* update components' states using websockets instead of polling via ajax.
* Add new components
    * AnnouncementForm
    * HandoutsForm
* Add statistics
    * Class-wise
        * Attendance - present day's and overall - (make a tabular, register-like interface)
        * Submissions (tabular form)
* Add scoring system
