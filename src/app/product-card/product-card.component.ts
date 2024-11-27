import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product: { name: string; price: number; rating: number; image: string; affiliateLink: string} = {
    name: '',
    price: 0,
    rating: 0,
    image: '',
    affiliateLink: '',
  };
  @Output() addToCart = new EventEmitter<void>();
  @Output() removeFromCart = new EventEmitter<void>();
  @Output() toggleFavorite = new EventEmitter<boolean>();

  quantity = 0;
  isHeartFilled = false;

  toggleHeart() {
    this.isHeartFilled = !this.isHeartFilled;
    this.toggleFavorite.emit(this.isHeartFilled);
  }

  increaseQuantity() {
    if (this.quantity === 0) {
      this.addToCart.emit();
    }
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity === 1) {
      this.removeFromCart.emit();
    }
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  redirectToAffiliateLink() {
    window.open(this.product.affiliateLink, '_blank');
  }
}
