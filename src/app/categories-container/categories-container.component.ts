import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../category.service';
import { CategoriesMenuComponent } from '../categories-menu/categories-menu.component';
import { Categories } from '../models/category';

@Component({
  selector: 'app-categories-container',
  standalone: true,
  imports: [CommonModule, CategoriesMenuComponent],
  templateUrl: './categories-container.component.html',
  styleUrls: ['./categories-container.component.css'],
})
export class CategoriesContainerComponent implements OnInit {
  // Initialisation de la propriété categories avec le type correct
  categories: Categories = {
    Amazon: [],
    Shein: [],
    Zara: [],
  };

  isMenuVisible = false; // Gestion de la visibilité du menu

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Fonction pour basculer l'affichage du menu
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Fonction pour charger les catégories depuis le service
  loadCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data; // Remplacement des catégories initiales par les données reçues
      console.log('Catégories chargées :', this.categories);
    });
  }

  // Fonction appelée lors de la sélection d'une catégorie
  selectCategory(category: string) {
    console.log(`Catégorie sélectionnée : ${category}`);
    // Implémentez ici toute logique supplémentaire pour une catégorie sélectionnée
  }
}
