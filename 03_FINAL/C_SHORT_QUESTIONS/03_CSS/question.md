Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

ANSWER: because span is an inline-element, not block-level.

1. Why can I not set the margin-top on the img with the id "pic" in the head section?

ANSWER: because you are also setting the inline style of the img with id "pic". The inline style has precedence.

<!-- Correct! 100% -->