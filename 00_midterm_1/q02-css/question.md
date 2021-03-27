### Question 2: 

What do the following CSS selectors select? Please provide short examples

    div + p
    div p
    div, p
    div > p
    div ~ p


### Please place your answer here:

    div + p
    selects the first <p> element directly following a <div> element
    ex:
        <div></div>
        <p>This paragraph is selected.</p> 
        <div></div>
        <p></p>
        <p></p>


    div p
    selects any <p> elements within a <div> element
    ex:
        <div>
            <p>This paragraph is selected.</p>
            <p>This one too.</p>
        </div>


    div, p
    selects any <div> and any <p> elements
    ex:
        <div></div>
        <p></p>
        <div><p></p></div>
    (each <div> and each <p> element will be seleted)


    div > p
    selects any <p> element with a <div> parent element
    ex:
        <div>
            <p>This is selected.</p>
        <div>

        <p>This is NOT selected.</p>


    div ~ p
    selects all <p> elements that follow a <div>
    ex:
        <p>This will NOT be selected.</p>
        <p>This will NOT be selected.</p>
        <div></div>
        <p>This will be selected.</p>
        <p>This will be selected.</p>