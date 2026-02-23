1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById:selected one element by id and also return single element .
getElementsByClassName: seleted  one element by class name and retuen a html collection.
querySelector / querySelectorAll: selected the first matching element and elements, also return node list.




2. How do you create and insert a new element into the DOM?

const h1Find = documents.getElement('h1');
h1.innertext = 'hello eorld'
document.appendchild.('h1')



3. What is Event Bubbling? And how does it work?
Event bubbleing means a event starts from targetelement and bubbles up parent element.




4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation means adding a event listener to a parent elemnr handle aevents child parent .



5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:"preventDefault" to stops browser behavoiur.
"stopPropagation" stop parent bubbleing.