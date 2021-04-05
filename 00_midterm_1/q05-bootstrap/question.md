What screen sizes in name and size are supported by bootstrap?

Please describe what would be the output of the following code snippet on mobile phone and on desktop computer, when using Twitter Bootstrap?  What would you expect to see?

```
    <div class="row">
        <div class="col-xs-12 col-md-3">Ruby Red</div>
        <div class="col-xs-12 col-md-3">Navy Blue</div>
        <div class="col-xs-12 col-md-3">Lime Green</div>
        <div class="col-xs-12 col-md-3">Egg Nog</div>
    </div>
```
### Answer:
The sizes are:
    Extra small (less than 576px wide)
    Small (between 576-768px)
    Medium (between 768-992px)
    Large (between 992-1200px)
    Extra large (greater than 1200px wide)

The above example would display a row of 4 columns. Each column would be full screen width on an Extra small or small screen. On medium screens and greater, each column takes of 25% screen width (3 of 12 columns).


### Feedback:
Correct