import { Component, signal, input, output } from '@angular/core';
import { IProduct } from '../product.model';
import { CommonModule } from '@angular/common';
import { CategoryToPartTypePipe } from '../category-to-part-type-pipe';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'bot-product-details',
  imports: [CommonModule, CategoryToPartTypePipe, SliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  availableInventory = signal(5);
  mode = input<'shop' | 'cart'>('shop');
  addToCart = output<IProduct>();
  removeFromCart = output<IProduct>();

  favorite = signal(3);

  inventoryMap = {
    '=0': 'Out of Stock',
    '=1': 'Only One left',
    '=2': 'Few left!',
    '=3': 'Few left!',
    '=4': 'Few left!',
    '=5': 'Get yours today!',
  };

  add() {
    this.addToCart.emit(this.product());
  }

  remove() {
    this.removeFromCart.emit(this.product());
  }

  handleSliderChange(newValue: number) {
    console.log('New slider valuie:', newValue);
  }

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 };
  }
}
