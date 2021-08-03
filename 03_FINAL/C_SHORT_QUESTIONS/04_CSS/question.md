The following questions have equal weightage. The 2nd question has a choice. Each answer MUST be completed within 150 words:

1. Describe pseudo-elements and discuss what are they used for?

ANSWER:
Pseudo-elements are specified parts of an HTML element that can be targetted separetly from the other parts of that element. This gives additional possibility when styling that element. For instance, the first line or first letter of a paragraph can be highlighted. This would eliminate the need to add a 'span' tag to the HTML in this instance. Ultimately, CSS has greater control and capability with pseudo-elements.
<!-- Correct -->

2. What’s the difference between inline and inline-block?

ANSWER:
Inline elements are elemetns that flow "in line" - literally - instead of starting on a new line from the previous element. Inline-block elements also flow "in line" and do no start on a new line; however, they also have a vertical dimensionality tthat allows them to be styled as block components without being moved to a new line.
<!-- Correct -->

3. What are the different ways to visually hide content (and make it available only for screen readers)?

ANSWER:
A. Add the attribute "aria-hidden" and set it to "true" (except for in links, buttons, or inputs which are all focusable and will not hide the text even when "aria-hidden" is set to "true").
<!-- This would do the exact opposite which is to hide it from screen readers but still available visually -->

B. Visually hide the text using CSS (moving it off screen or setting opacity 0% for example). Screen readers will still read the text.
<!-- correct -->