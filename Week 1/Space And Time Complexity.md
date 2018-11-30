# Time and space complexities?
## Space Complexity
Space complexity is a function describing the amount of memory (space) an algorithm takes in terms of the amount of input to the algorithm.

We often speak of extra memory needed, not counting the memory needed to store the input itself. Again, we use natural (but fixed-length) units to measure this.

We can use bytes, but it's easier to use, say, the number of integers used, the number of fixed-sized structures, etc.

In the end, the function we come up with will be independent of the actual number of bytes needed to represent the unit.

Space complexity is sometimes ignored because the space used is minimal and/or obvious, however sometimes it becomes as important issue as time complexity

## Time Complexity
Time complexity of an algorithm signifies the total time required by the program to run till its completion.
The time complexity of algorithms is most commonly expressed using the big O notation. It's an asymptotic notation to represent the time complexity. We will study about it in detail in the next tutorial.
Time Complexity is most commonly estimated by counting the number of elementary steps performed by any algorithm to finish execution. Like in the example above, for the first code the loop will run nnumber of times, so the time complexity will be n atleast and as the value of n will increase the time taken will also increase. While for the second code, time complexity is constant, because it will never be dependent on the value of n, it will always give the result in 1 step.
And since the algorithm's performance may vary with different types of input data, hence for an algorithm we usually use the worst-case Time complexity of an algorithm because that is the maximum time taken for any input size.
the various notations used for Time Complexity.

1.	Big Oh denotes "fewer than or the same as" <expression> iterations.

2.	Big Omega denotes "more than or the same as" <expression> iterations.

3.	Big Theta denotes "the same as" <expression> iterations.

4.	Little Oh denotes "fewer than" <expression> iterations.

5.	Little Omega denotes "more than" <expression> iterations.
