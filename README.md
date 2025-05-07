# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

Normal mergesort's asymptotic complexity is $\Theta(nlogn)$, because the depth is log(n) because the array continues to slice in half each call, and the merge function takes n amount of work. Simply making the program parallel doesn't automatically change the asymptotic complexity of the program, as it is still a divide and conquer algorithm and will perform the same amount of work as the original version, but with a faster runtime. The depth of each call would remain log(n) and the merge would remain n amount of work, since it cannot be parallelized further. Therefore the worst-case asymptotic complexity for parallel mergesort would be $\Theta(nlogn)$. 

## Sources and Plagiarism 

- code.js and code.test.js based off mergesort example in sorting lecture slides

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  
- https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
