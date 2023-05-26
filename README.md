# TextZooming-SimpleWay
I made a text-zooming project let me explain you in simpler way.

documentElement ---> Simple means our <html> element. and scrollHeight, clientHeight was it property.
scrollTop ---> It gives the position or value of scrolling from the Top to the were the user stop scrolling.

so the firt line 
document.body.scrollTop > 100 || docuement.documentElement.scrollTop>100
both are give same result. It's just for compatibility purpose. body is for older and documentElement for modern browsers.
so the current Value of scrollTop is 0 if we scroll then its value changes and it gives the value from top to were the user scrolled.

And other things we all know better what's goin on. simply if the condition is true the fontsize, color,backgroundColor 
gonna change.

and the else block, on that it is for returning back to normal one.
To the top where the scrollTop value going to be zero and nothing gonna happens.
