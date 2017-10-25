# MORE-RECIPES

Bahdcoder Andela Cycle 28 Boot-camp Project

## THE TEMPLATE

### How to run project template locally

These instructions will get you a copy of the template up and running on your local machine.

Checkout the [Live Version Here](https://kati-frantz.github.io/more-recipes/template)

- Clone this repository 
```bash
git clone https://github.com/kati-frantz/more-recipes.git
```
- Get into the directory with the template
```bash 
cd more-recipes/template
```
- Install live server on your local machine to create a simple local server . This will server the application, and will provide live reloading in case you are making changes to the template
```bash
npm i -g live-server
```
- Run project with live-server
```bash
live-server
```
- Navigate to [localhost:8080](localhost:8080) in your browser to view the project template



## THE SERVER SIDE

*Coming soon*

## THE CLIENT SIDE

*Coming soon*



class RecipesController {
  getAllRecipes(req, res) {
    res.json(['al recipes'])
  }
} 
import RecipesController from './'

let recipesCon = new RecipesController();
app.get('api/recipes', recipesCon.getAllRecipes);


- how to create es6 class 
class UsersController {
  index(req, res) {


  }

  store(req, res) {

  }
} 

let usersController = new UsersController();

app.get('/users', usersController.index);
app.post('/users', usersController.store);
