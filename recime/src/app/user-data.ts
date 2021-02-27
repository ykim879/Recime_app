import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    cookingSkills: string = '';
    dietaryRestrictions: string[] = [];
    kitchenTools: string[] = [];
    pantryIngredients: Set<string> = new Set();

    constructor(public storage: Storage) { }

    setSkillLevel(skill: string): void {
      this.cookingSkills = skill;
    }

    hasDietaryRestriction(diet: string): boolean {
        return (this.dietaryRestrictions.indexOf(diet) > -1);
    }

    addDietaryRestriction(diet: string): void {
        this.dietaryRestrictions.push(diet);
    }

    removeDietaryRestriction(diet: string): void {
        const index = this.dietaryRestrictions.indexOf(diet);
        if (index > -1) {
            this.dietaryRestrictions.splice(index, 1);
        }
    }

    addKitchenTool(tool: string): void {
        this.kitchenTools.push(tool);
    }

    removeKitchenTool(tool: string): void {
        const index = this.kitchenTools.indexOf(tool);
        if (index > -1) {
            this.kitchenTools.splice(index, 1);
        }
    }

    addPantryIngredient(ingredient: string): void {
      this.pantryIngredients.add(ingredient);
      this.storage.set('ingredients', this.pantryIngredients);
    }
}
