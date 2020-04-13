import { Injectable, EventEmitter} from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
       'This is simply a test',
        'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2-500x375.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
    new Recipe('A Test Recipe2',
       'This is simply a test',
        'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2-500x375.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
  ];

  constructor(private slService: ShoppingListService){ }
  
  getRecipes(){
    return this.recipes.slice(); //Returns a copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}