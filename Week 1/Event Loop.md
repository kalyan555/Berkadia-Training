# What is event loop?
Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the code after an   async function has executed.

In an event-driven application, there is generally a main loop that listens for events,and then triggers a callback function when one of those events is detected.

Node.js is a single-threaded application, still it can supports concurrency via the concept of event and callbacks.

Node thread keeps an event loop and whenever a task gets completed,it fires the corresponding event which signals the event-listener function to execute.
