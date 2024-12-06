import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories-menu',
  standalone: true,
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css'],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
})
export class CategoriesMenuComponent {
  @Input() categories = {
    Amazon: [
      { name: 'Catégorie 1', subCategories: ['Sous-catégorie 1', 'Sous-catégorie 2'] },
      { name: 'Catégorie 2', subCategories: ['Sous-catégorie 1', 'Sous-catégorie 2', 'Sous-catégorie 3'] },
    ],
    Shein: [
      { name: 'Catégorie 1', subCategories: ['Sous-catégorie 1', 'Sous-catégorie 2', 'Sous-catégorie 3'] },
    ],
    Zara: [
      { name: 'Catégorie 1', subCategories: ['Sous-catégorie 1', 'Sous-catégorie 2'] },
    ],
  };

  @Output() menuClose = new EventEmitter<void>();

  isMenuVisible = false;
  isSubMenuVisible = false;
  selectedCategory: string | null = null;
  selectedSubCategories: string[] = [];

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faTimes);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    if (!this.isMenuVisible) {
      this.isSubMenuVisible = false;
    }
  }

  toggleSubMenu(category: { name: string; subCategories: string[] }) {
    if (this.selectedCategory === category.name && this.isSubMenuVisible) {
      this.isSubMenuVisible = false;
    } else {
      this.selectedCategory = category.name;
      this.selectedSubCategories = category.subCategories;
      this.isSubMenuVisible = true;
    }
  }

  closeBothMenus() {
    this.isMenuVisible = false;
    this.isSubMenuVisible = false;
    this.menuClose.emit();
  }
}
