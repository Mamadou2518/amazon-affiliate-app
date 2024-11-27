import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-category-display-grid',
  standalone: true,
  templateUrl: './category-display-grid.component.html',
  styleUrls: ['./category-display-grid.component.css'],
  imports: [CommonModule, ProductCardComponent],
})
export class CategoryDisplayGridComponent implements OnChanges {
  @Input() category: { categorie_name: string; products: any[] } = { categorie_name: '', products: [] };
  @Output() addToCart = new EventEmitter<number>();
  @Output() removeFromCart = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>();

  columns = 4;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category']) {
      console.log('Category updated:', this.category);
    }
  }

  onAddToCart(productId: number) {
    this.addToCart.emit(productId);
  }

  onRemoveFromCart(productId: number) {
    this.removeFromCart.emit(productId);
  }

  onToggleFavorite(productId: number) {
    this.toggleFavorite.emit(productId);
  }
}
