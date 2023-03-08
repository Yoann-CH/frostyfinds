import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Ski Rossignol', description: 'Un ski de qualité pour les pistes', price: 599.99, image: 'https://cdn.shopify.com/s/files/1/0576/4340/1365/products/fcc98bc1525ce457cba538f7c4771d1c_750x750.png?v=1671463564', longDescription: 'Ce ski Rossignol est parfait pour les skieurs de tous niveaux. Avec sa construction solide et sa géométrie de pointe, il offre une stabilité et une maniabilité exceptionnelles sur les pistes.' },
    { id: 2, name: 'Ski Salomon', description: 'Un ski de qualité pour les pistes et les hors-pistes', price: 799.99, image: 'https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41670600__84e95cdcda1c8c1e5a6d7e63c3b9edd7.png', longDescription: 'Le ski Salomon est conçu pour les skieurs qui aiment explorer les pistes et les hors-pistes. Avec sa construction robuste et sa technologie de pointe, il offre une performance exceptionnelle dans toutes les conditions de neige.' },
    { id: 3, name: 'Chaussures de ski Salomon', description: 'Des chaussures confortables pour le ski', price: 199.99, image: 'https://hello-mountain.com/wp-content/uploads/2023/02/1-111.png', longDescription: 'Les chaussures de ski Salomon sont conçues pour offrir un confort exceptionnel pendant les longues journées de ski. Avec leur doublure chaude et leur technologie de pointe, elles offrent une performance de ski exceptionnelle.' },
    { id: 4, name: 'Bâtons de ski Leki', description: 'Des bâtons solides pour le ski', price: 49.99, image: 'https://www.precisionski.fr/55344-large_default/batons-de-ski-leki-world-cup-lite-gs-trigger-s.jpg', longDescription: 'Les bâtons de ski Leki sont construits pour offrir une performance exceptionnelle sur les pistes. Avec leur construction en aluminium léger et leur poignée ergonomique, ils offrent une stabilité et un contrôle exceptionnels.' },
    { id: 5, name: 'Casque de ski Smith', description: 'Un casque de ski confortable et sûr', price: 129.99, image: 'https://www.smithoptics.com/dw/image/v2/BDPZ_PRD/on/demandware.static/-/Sites-smith-master-catalog/default/dw8e061e48/images/product-images/level-helmet/matteSlate/matteSlate_3Q.png?sw=700&sh=700&sm=fit', longDescription: 'Le casque de ski Smith est conçu pour offrir un confort exceptionnel et une protection maximale pendant les journées de ski. Avec sa construction solide et sa doublure douce, il offre une performance de ski exceptionnelle.' },
    { id: 6, name: 'Masque de ski Oakley', description: 'Un masque de ski de qualité pour une vision claire', price: 79.99, image: 'https://assets.oakley.com/is/image/OakleyEYE/888392407559_fall-line-l_matte-white-prizm-snow-jade-iridium_main_001.png', longDescription: 'Le masque de ski Oakley est conçu pour offrir une vision claire et un confort exceptionnel pendant les journées de ski. Avec sa lentille de qualité supérieure et sa monture confortable, il offre une performance de ski exceptionnelle.' },
    { id: 7, name: 'Veste de ski North Face', description: 'Une veste de ski imperméable et chaude', price: 249.99, image: 'https://images.thenorthface.com/is/image/TheNorthFaceEU/4QYX760?$960x1120_CLR$', longDescription: 'La veste de ski North Face est construite pour offrir une performance exceptionnelle dans toutes les conditions de neige. Avec sa doublure chaude et son imperméabilité, elle offre une protection maximale contre les éléments.' },
    { id: 8, name: 'Pantalon de ski Black Diamond', description: 'Un pantalon de ski confortable et résistant', price: 199.99, image: 'https://images.hardloop.fr/356572/black-diamond-recon-stretch-ski-pants-pantalon-ski-femme.jpg?w=auto&h=auto&q=80', longDescription: 'Le pantalon de ski Black Diamond est conçu pour offrir un confort exceptionnel et une protection maximale pendant les journées de ski. Avec sa construction robuste et sa doublure douce, il offre une performance de ski exceptionnelle.' },
    { id: 9, name: 'Gants de ski Hestra', description: 'Des gants chauds et confortables pour le ski', price: 79.99, image: 'https://i0.wp.com/greengliss.fr/wp-content/uploads/2023/01/31730-100-1.png?fit=1342%2C1600&ssl=1', longDescription: 'Les gants de ski Hestra sont conçus pour offrir un confort exceptionnel et une protection maximale pendant les journées de ski. Avec leur doublure chaude et leur construction solide, ils offrent une performance de ski exceptionnelle.' }
  ];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number, defaultValue: Product): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product || defaultValue);
  }
}