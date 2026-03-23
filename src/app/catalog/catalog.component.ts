import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { IProduct } from '../product.model';
import allProducts from '../products.json';
import { FilterByCategoryPipe } from '../filter-by-category-pipe';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent, FilterByCategoryPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  products: IProduct[] = allProducts;
  categoryFilter: string | null = null;

  constructor(private cartService: CartService) {}

  addToCart(product: IProduct) {
    //this.availableInventory.update((p) => p - 1);
    this.cartService.addToCart(product);
  }

  addProduct() {
    this.products = [
      ...this.products,
      {
        id: 6,
        description: 'Something new.',
        name: 'New Arm',
        imageName: 'arm-proppeller.png',
        category: 'arms',
        price: 100,
        discount: 0,
      },
    ];
  }
}
