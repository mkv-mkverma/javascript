## javascript
javascript interview questions

## Package.json
tilde (~) and a caret (^)
~1.2.3 will match all 1.2.x versions but will miss 1.3.0.
^1.2.3 will match any 1.x.x release including 1.3.0, but will hold off on 2.0.0.

major (-breaking change)
minor (-large internal refactor
       - backwords compatible new functionality
       - old functionality deprecated, but operational)
patch (-bug fixes)

(major).(minor).(patch)-beta.(beta) == 1.2.3-beta.2
(https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)

