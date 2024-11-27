import { Component } from '@angular/core';
import { HeadersComponent } from './headers/headers.component'; 
import { CategoryDisplayGridComponent } from './category-display-grid/category-display-grid.component';
import { FooterComponent } from "./app-footer/app-footer.component";
// import { ProductCardComponent } from "./product-card/product-card.component"; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadersComponent, CategoryDisplayGridComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'amazon-affiliate-app';

  category = {
    categorie_name: 'Électronique',
    products: [
      {
        id: 1,
        name: 'Smartphone',
        price: 799,
        rating: 4.5,
        image: 'assets/images/smartphone.jpg',
      },
      {
        id: 2,
        name: 'Laptop',
        price: 1200,
        rating: 4.7,
        image: 'assets/images/laptop.jpg',
      },
    ],
  };

  ngOnInit() {
    console.log('Category:', this.category);
  }

  onAddToCart(productId: number) {
    console.log(`Produit avec ID ${productId} ajouté au panier`);
  }

  onRemoveFromCart(productId: number) {
    console.log(`Produit avec ID ${productId} retiré du panier`);
  }

  onToggleFavorite(productId: number) {
    console.log(`Favoris basculé pour le produit avec ID ${productId}`);
  }
}
