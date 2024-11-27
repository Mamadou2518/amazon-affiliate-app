import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Module Angular nécessaire pour *ngFor et autres directives

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule], // Assurez-vous que CommonModule est ici
})
export class ProductListComponent {
  products = [
    {
      name: 'Product 1',
      imageUrl: 'https://example.com/image1.jpg',
      affiliateLink: 'https://example.com/product1',
    },
    {
      name: 'Product 2',
      imageUrl: 'https://example.com/image2.jpg',
      affiliateLink: 'https://example.com/product2',
    },
  ];
}
