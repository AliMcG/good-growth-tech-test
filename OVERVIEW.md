# A short overview of the solution.

### Reasearch
I did some research to better understand the idea of adding a script to a live website as I was aware of the theory but new to the practice. 

I found an extension to the chrome browser that looked user friendly to help me solve the puzzle called TamperMonkey.

I looked at the National Trust website to see if there was anything obvious about the design or layout to use. There was a large inviting white space below the introduction to the location, which seemed like a good place to add some weather data. There was also a clear font-family and colour scheme being used.

### Design
I then created a quick mock-up image to help me visualise my plan.

### implementation
Using the developer tools in the chrome browser, I spent a lot of time trying to find useful selectors to use with the script in the TamperMonkey extension. 

I was able to add weather details for today and tomorrow’s weather in a meaningful way to the website.

I also was able to add a weather link to the quick link menu in the introduction of the location but unable to add more weather data to the larger accordion information links lower down the page.

If I had had more time, I would have added a section to the accordion menu to show a five day weather report. I would have also liked to explore how to use the National Trust property address to use either the town or the post code in the weather api call to get the weather data, as a step in the direction of making the script work for every property page on the National Trust website.
