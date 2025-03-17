## Description
The next technical test must implement a function that receives an array of integer numbers. 
All zeros that are in the array must move to the right while the non zero numbers 
must move to the left retaining their relative order

example entry:
[1, 2, 0, 1, 0, 1, 0, 3, 0, 1]

result expected:
[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

## Run project
To execute the code (with node.js):
-It is required to be installed
    (Verify installation) 

```bash
 # Verify installation
    $ node -v
```
      
If it is not installed, it can be installed from nodejs.org

-In terminal, run the command

```bash
    $ node name-archive.js
```

## Explanation 
- this solution use 2 arrays, one for the non zeros and one for the zeros
- the function iterate over array, if number is zero adds to zeros array, if number is non zero adds to non zeros array
- finally, array of non zeros and array with zeros are concatenated to give the expected exit
