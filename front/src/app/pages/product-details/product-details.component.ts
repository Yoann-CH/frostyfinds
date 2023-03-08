import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const defaultValue: Product = { id: 0, name: 'Produit introuvable', description: '', price: 0, image: '' };
  this.productService.getProductById(id, defaultValue).subscribe((product) => this.product = product);
  }

  addToCart(product: Product): void {
    console.log(`Added ${product.name} to cart`);
    // TODO: Implement cart functionality
  }
}