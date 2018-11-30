# Event Delegation and Event Bubbling
## Event Delegation
Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

Understanding how events propagate is an important factor in being able to leverage Event Delegation. Any time one of our anchor tags is clicked, a click event is fired for that anchor, and then bubbles up the DOM tree, triggering each of its parent click event handlers:

## Event Bubbling
This means that anytime you click one of our bound anchor tags, you are effectively clicking the entire document body! This is called event bubbling or event propagation.

## Summary
Summary
Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.
