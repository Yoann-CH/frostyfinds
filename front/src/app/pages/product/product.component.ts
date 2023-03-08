import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products1: Product[] = [
    { id: 1, name: 'Ski Rossignol', description: 'Un ski de qualité pour les pistes', price: 599.99, image: 'https://cdn.shopify.com/s/files/1/0576/4340/1365/products/fcc98bc1525ce457cba538f7c4771d1c_750x750.png?v=1671463564' },
    { id: 2, name: 'Ski Salomon', description: 'Un ski de qualité pour les pistes et les hors-pistes', price: 799.99, image: 'https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41670600__84e95cdcda1c8c1e5a6d7e63c3b9edd7.png' },
    { id: 3, name: 'Chaussures de ski Salomon', description: 'Des chaussures confortables pour le ski', price: 199.99, image: 'https://hello-mountain.com/wp-content/uploads/2023/02/1-111.png' },
  ];

  products2: Product[] = [
    { id: 4, name: 'Bâtons de ski Leki', description: 'Des bâtons solides pour le ski', price: 49.99, image: 'https://www.precisionski.fr/55344-large_default/batons-de-ski-leki-world-cup-lite-gs-trigger-s.jpg' },
    { id: 5, name: 'Casque de ski Smith', description: 'Un casque de ski confortable et sûr', price: 129.99, image: 'https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Sites-smith-master-catalog/default/dw8e061e48/images/product-images/level-helmet/matteSlate/matteSlate_3Q.png?sw=700&sh=700&sm=fit' },
    { id: 6, name: 'Masque de ski Oakley', description: 'Un masque de ski de qualité pour une vision claire', price: 79.99, image: 'https://assets.oakley.com/is/image/OakleyEYE/888392407559_fall-line-l_matte-white-prizm-snow-jade-iridium_main_001.png' },
  ];

  products3: Product[] = [
    { id: 7, name: 'Veste de ski North Face', description: 'Une veste de ski imperméable et chaude', price: 249.99, image: 'https://images.thenorthface.com/is/image/TheNorthFaceEU/4QYX760?$960x1120_CLR$' },
    { id: 8, name: 'Pantalon de ski Black Diamond', description: 'Un pantalon de ski confortable et résistant', price: 199.99, image: 'https://images.hardloop.fr/356572/black-diamond-recon-stretch-ski-pants-pantalon-ski-femme.jpg?w=auto&h=auto&q=80' },
    { id: 9, name: 'Gants de ski Hestra', description: 'Des gants chauds et confortables pour le ski', price: 79.99, image: 'https://i0.wp.com/greengliss.fr/wp-content/uploads/2023/01/31730-100-1.png?fit=1342%2C1600&ssl=1' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}