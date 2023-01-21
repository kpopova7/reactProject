Setup:
1. Clone the repository (git clone https://github.com/kpopova7/reactProject.git)
2. cd reactProject/
3. npm install
4. npm start


Features:

- Home page and Random Page are with dummy data, showcasing uses of display: grid
- Other->Random consists of 2 items, that have some animated transitions on hover
- Other-> THE List is the actual task, containing a predefined list with 10 items.
    - users can search the list
    - users can add new items with the button "add" or by pressing enter
    - nothing will be added if the search field is empty and the user tries to add the input (either with the button or with enter)
    - entries can have the same name, but get unique ID's by getting the current datetime and using it as an ID
    - entries can be deleted using the trash can button
    - when clicking on an entry, a modal appears, which prevents scrolling on the page and holds the entry's name and ID in it
    - the modal can be closed with the X button, or by pressing Esc
- All pages are responsive
- The logo changes colors on hover
- if the link for the page is not valid, the user is sent to a 404 not found page
- buttons glow in rainbow colors on hover and click
