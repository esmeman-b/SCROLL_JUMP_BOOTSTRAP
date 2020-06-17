Armin Kiani - June 2020

#Title
> A simple one page scroll jump web site made with Bootstrap and Javascript.


#Content

  index.html :

    >HTML file --> the website content.

  package css :

    >Contains the css files used to stylish the html content.

  package example_screenshots :

    >Contains the screenshots of the website goal to design.

  package img :

    >Contains the pictures referenced by the html file to be displayed.

  package js :

    >Contains the scripts used by the html file to verify the email entered by
    the user, to manage the scrolling and the bootstrap's.

  package lib :

    >The library used to display fontawesome icons on the website.

#Test

  The most used browsers in Belgium :

    >Chrome
      57.7%

    >Safari
      22.89%

    >Firefox
      6.04%

    >IE
      2.02%

    As the result justifies, the majority of the test has been done on Chrome
    browser and the result about the responsiveness are satisfying, as the
    scroll jump works with smooth behavior.

    About Safari, the windows version of the browser doesn't run bootstrap,
    the tests where then aborted as I do not have a apple device to run the
    browser on macOS.

    With Firefox, there is a good thing : the general smooth effect when scrolling
    works, (it does not on chrome, only on the jump on a section). And there is
    also a little problem when the nav-bar button is clicked to show the
    navigation links, the list of links override the button because the margin
    effect seems to not apply the same way than in chrome browser.

    And with Edge, the responsiveness works as good as on the Chrome and Firefox
    the only problem is that the smooth effect doesn't work at all, even on jumping.


#Upgrade ways

    Products and Medias

      >From the header section, the display of products/medias section is unsatisfying
      as the second row of the elements is cut depending on the resolution of
      screen, the solution would be to adapt the height of the each element
      depending of the screen height using "media queries".

    Text

      >All the displayed text could adapt their size, depending of the screen size.
      However, the result is already satisfying, even on mobile size.
