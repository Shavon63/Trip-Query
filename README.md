# Travel-Query
aA helping hand for those looking in the heat of excitement or just an average location search.

# Screenshot of finished app 
<img src='https://user-images.githubusercontent.com/100313792/214071922-9c1b7691-4286-4d73-9669-ceb20640d9ec.jpeg'/>

# Technologies used in this app
  This is a MERN stack application with full CRUD. A google API was implamented in this app to create a map for address query and to take user action and give feedback of geolocation of selected areas. Framer motion which is a library was also used to add animation to the pages layout. 

# General information of approuch that was taken to complete app 
  To start off this project i decided that a MERN app was going to be the best framework to compliment the ideal I had. I started by working on the backend, 
adding a model and connecting it to the index while adding the neccessary packages in the server that would go along with my workflow. When the models and server packages were added I then started the barebones of my controller folder. I moved on to configure my react front end, adding the bare component files and pages that my app would show. As i worker through them i then added the routes in the backend with the authentication needed. 
  I then integrated the google api into my app by adding the URL with api key in server.js backend. For some odd reason the documentation provided a script syntax for adding the google libraries to my react app through my HTML but it didnt work. i Had to sweep the internet for sources on an alernative way which i did find a way to authenticate the api with the key and add the library at the same time through a compononent folder. Implementing the api was difficult because of Googles strict syntax and specefic packages and modules neccessary to queryl the api. Because of this I then went on a binge of consuming the api platforms documentation. I started out my omporting the google packages and modules that would render the map. I then began using the modules that come with the libraries to add functionality to the map. I was striving to add a search bar to the left side of the map that would search the map and bring the user to that location using geolocation. Also i used modules that was supposed to allow users to mark certain locations on the map at will. I then went into google platform and created a custom map which i then implamented into the mapfram component that ultimately rendered the map.
  On completeinng the map i went on to integrate framer motion into my app. I imported the library after reading its documentation and began adding motion tags to where i wanted animation to apply. The animation i decided on would only apply when users first arrive on the pages that would be animated.
  
# Installation Instruction 
  1. This App is located on my github Shavon63. 
  2. Locate The fork button on the top right screen and fork this repository. 
  3. Then go to the green button that says code and copy the SSH key supplied. 
  4. In your terminal run gir clone with the pasted SSH key. 
  5. Open your VS code and from the root you npm run backend to start your backend and npm run frontend to start backend. 
  6. This app is running on http://localhost:3000 on front end so once server is running you can go there to veiw app.
 
# hurdles and problems 
  i had a big issue that has yet to be resolved and that is with googles documentation. By their docs i am in use a script link and integrate my api key into it and paste it into my front end index.HTML. This link would give me full access to the libraries associated to my api key which i did not restrict giving me full access. When ever i used the modules associated with the documentation my terminal would tell me it does reconize them although i had the script and packages imported into my app. I trouble shooted alot and could not figure out why their own documentation was so vast but ambiguous. Theirs a function at the end of the link called initMap but i would always get a code saying it was not a function and apon removing that piece of the link it would say i cannot query without that piece. I looked on youtube and saw others were using another link but i realized the videos were older and google probably updated their database. I found an alternative way that came with its own problems as well.




     
