import { Injectable, EventEmitter} from "@angular/core";
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2-500x375.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test', 'https://i2.wp.com/www.primaverakitchen.com/wp-content/uploads/2019/03/Garlic-Butter-Baked-Chicken-Breast-Primavera-Kitchen-2-500x375.jpg')
  ];
  
    getRecipes(){
      return this.recipes.slice(); //Returns a copy
    }
}