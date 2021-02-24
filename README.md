# Backend Proyect  -Videoclub-

Backend project for  Full Stack Developer course on [Geeks Hubs Academy](https://geekshubsacademy.com).

Technologies:
* JavaScript.
* Node.
* Express.
* Mongoose.
* API.
* Git.
* Insomnia.
* MongoDB Compass.
* Docker.
* Nodemon.

Commands to run the project:
* npm run dev. (start up server)
* docker comnpose up (for MongoDB )


I have divided my backend into 3 different areas to manage the business.
* Users.
* Movies.
* Orders.

# User Management:
- localhost:3000/user [user router]
    * / [Create user].
    * /allUsers [get all registered users].
    * /oneUser/:id [get one user by Id].
    * /updateUser/:id [update user profile].
    * /deleteUser/:id [delete user by id].

# Films Management:
- localhost:3000/film [film router]
    * / [create a film].
    * /allFilms [get all films].
    * /oneFilm/:id [get one film by id].
    * /search/:title [get one film by title].
    * /deleteFilm/:id [remove one film by id].
    * /updateFilm/:id [update film information].

# Order Management:
- localhost:3000/order [ order router]
    * / [ create order].
    * /allOrders [get all registered orders].
    * /oneOrder/:id [get one order by id].
    * /updateOrder/:id [update a registered order].
    * /deleteOrder/:id [delete a redistered order].

For test the API i have used Insomnia desktop app and Mongo Compass browser. I leave you a few users, films and orders ID so you can test the API.

Users ID:
* 60352f71fa96a31093e3b190
* 6035227892705e082d96d54c

Films ID and titles for search:
* 603401692b9d08251e744ca7
* 6033de97512290138b6f5179
* Bajo Cero

Orders ID:
* 603555de2629342a92b5fd73

This project is not completely finished and is subject to changes in its functionality and waiting to create a user-friendly frontend.

I leave you the link to my github proyect.

(https://github.com/joanbatiste/backendVideoclub).



