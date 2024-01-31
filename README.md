Note: The showcase of the event lister was supposed to be a video, but due to the file being too large, I had to settle for an image.
<br />
<h1>PURPOSE:</h1>

The application's main purpose is to showcase my current abilities (my capabilities during the time this project was commited). 
However, you can use my application for simple tasks such as knowing what time of the day it is, what the current date is, and placing an event/occasion of your liking (like birthdays) on specific dates.

FILES USED:

<pre>
img/  
  arrow.png  
  cover.png  
  daysky.jpg  
  nightsky.avif  
  nightsky2.jpg  
index.html  
style.css  
main.js
</pre>
<br />

<h1>MAJOR FUNCTIONS:</h1>

The application has a BUILT-IN CALENDAR on the left side of the page that automatically highlights the current date of the current month in strong colors, then the other dates of the current month in a lighter color.
The dates of inactive months, however, are highlighted in gray circles. You can traverse through the months using the arrows on the navigation, which are right on top of the calendar itself.

![Part 1 - Made with Clipchamp](https://github.com/KingNoran/eCalendar/assets/108130291/ff2cdba7-0e55-4a65-8393-95699687de5d)


Meanwhile, at the right side of the page is an EVENT LISTER. At the very top of the event-lister is the current day of the week as well as the current date in text form.
Below that is the actual lists of events, where the elements are displayed via a container. When there's a certain number of elements, the list provides a scrollbar.
You can ENTER AN EVENT using the form at the very bottom of the event lister.

![Part 2 - Made with Clipchamp](https://github.com/KingNoran/eCalendar/assets/108130291/2f731d91-86df-4720-a138-785c393c6b5e)

<br />

<h1>FILES</h1>

<ol>
  <li>
    <h3>img</h3>
    This is the image folder. It contains the images used in both the background of the event lister and the navigation arrows. The other files [nightsky, nightsky2, daysky] could be used as alternatives to the current cover image.
  </li>
  <li>
    <h3>index.html</h3>
    This is the main page of the web-application. It has 3 meta tags: 
    <ul>
      <li>Sets the charset to UTF-8</li>
      <li>Sets the webpage to fit in mobile devices by setting the viewport to the device-width and a fixed initial-scale of 1</li>
      <li>Renders the internet explorer to IE-8(standard view)</li>
    </ul>
    It has 2 main parts:
    <ul>
      <li>
        <h4>The Calendar</h4>
        This is the part of the webpage where the actual calendar is in place. In its header is the current year, current time, as well as the navigation arrows which the user can use to traverse through previous and proceeding months. 
        In its body are the dates of the current month.
      </li>
      <li>
        <h4>The Event Lister</h4>
        The smaller part of the webpage where the user can set events for himself/herself. In its header is the current date, as well as the day of the week. In its body are the lists of events which provides a scrollbar should the elements overflow. 
        Finally, at the very bottom of the page is a form that the user can use to set events for himself/herself. Once filled, the event shows up in the body as mentioned.
        When an invalid month (or date of the month) is inputted by the user, main.js has a function that flashes an error message at the top of the form in order to notify the user that his/her input is invalid.
      </li>
    </ul>
  </li>
  <li>
    <h3>styles.css</h3>
    This is the file where the styles of the webpage are stored. The primary color is turquoise and the secondary color is a pale version of cyan. 
    I used grid to stylize the main body as well as the body of the calendar where the dates are since it was easier that way. 
    Meanwhile, I used flexbox to stylize the inner parts of my main tags since the flexbox is known for its simplistic yet effective element formatting.
    I used media queries [1068px, 768px] in order to make the page responsive. If the page shrinks, the UI will go from a horizontal format to a vertical format.
  </li>
  <li>
    <h3>main.js</h3>
    The language used for the backend part of the web-app is Javascript. 
    I mostly used the Date module to retrieve data, and since most of the data provided are formatted in indexes, I created my own month list where I acquired the necessary strings to validate the month that the user provided.
    Then for the days, I merely used the very last date of the selected month and used it as a limit. If the user inputs a date that was above the given dates (e.g. January 32), then the input is rejected and an error flashes at the top of the form.
    Finally, the description, which is relatively uneventful. The user is free to type anything he/she wants there, but they must provide something.
    If any of the fields [month, date, description] is empty, then the input will be rejected and an error flashes at the top of the form.
  </li>
</ol>

<br />

<h1>DEPENDENCIES:</h1>

I used plain HTML, CSS, and Javascript. No external modules were used.

<br />

<h1>BUILD AND DEPLOY INSTRUCTIONS:</h1>

To build the application on your browser, simply download all the files in the repository. Then, open "index.html" on a browser.

<br />

<h1><a href="https://kingnoran.github.io/eCalendar/">VISIT SITE</a></h1>

<br />

<h1>CHANGE HISTORY</h1>

![image](https://github.com/KingNoran/eCalendar/assets/108130291/97e72031-95a7-488f-b094-198e108f3d51)
