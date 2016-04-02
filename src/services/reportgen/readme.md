## Reportgen service

This service calls other services, gathers necessary data, and then
compiles each user's submission into a report.


### How does it work?

There are four templates:
* `front.tex`
* `certificate.tex`
* `marksheet.tex`
* `program.tex`

The program `reportgen.py` gathers the necessary data and inserts into these templates. 
There are four functions that perform this task.
* `generate_front(coursecode, coursename, incharges, deptname)` -> returns processed `front.tex`



