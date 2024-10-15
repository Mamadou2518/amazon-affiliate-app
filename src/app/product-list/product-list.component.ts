import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'; // Correct import with {}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule], // Correctly add CommonModule to imports
})
export class ProductListComponent {
  products = [
    {
      name: 'Product 1',
      imageUrl: 'https://m.media-amazon.com/images/I/81izs2I2UvL._AC_SX679_.jpg',
      affiliateLink: 'https://amzn.to/48cQhye',
    },
    {
      name: 'Product 2',
      imageUrl: 'https://m.media-amazon.com/images/I/71VMvGNKZiL._AC_SX425_.jpg',
      affiliateLink: 'https://amzn.to/3YpYvzK',
    },
    // Add more products as needed
  ];
}
