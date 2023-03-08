import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Ski Rossignol', description: 'Un ski de qualité pour les pistes', price: 599.99, image: 'https://cdn.shopify.com/s/files/1/0576/4340/1365/products/fcc98bc1525ce457cba538f7c4771d1c_750x750.png?v=1671463564' },
    { id: 2, name: 'Ski Salomon', description: 'Un ski de qualité pour les pistes et les hors-pistes', price: 799.99, image: 'https://www.salomon.com/fr-fr/shop-emea/media/catalog/product/L/4/L41670600__84e95cdcda1c8c1e5a6d7e63c3b9edd7.png' },
    { id: 3, name: 'Chaussures de ski Salomon', description: 'Des chaussures confortables pour le ski', price: 199.99, image: 'https://hello-mountain.com/wp-content/uploads/2023/02/1-111.png' },
  ];

  public images_head = [
    'https://cdn.france-montagnes.com/sites/default/files/styles/header_webzine/public/header/banniere_23.jpg?itok=PfHNBrxl',
    'https://contents.mediadecathlon.com/s811924/k$ca918e255c946da5ea626691a0c5af6f/1920x0/2387pt1875/4202xcr1868/le-ski-de-piste1.jpg?format=auto',
    'https://m1.quebecormedia.com/emp/emp/ea82ab77-1113-498e-86af-b03c1d4a0418_ORIGINAL.jpg?impolicy=crop-resize&x=1190&y=91&w=1506&h=621&width=1200',
    'https://webzine.voyage/wp-content/uploads/station-ski-montagne-neige-1920x768.jpg'
  ]

  public images = [
    'https://oberalp.imgix.net/02b018d9-0ecc-461b-9526-cd81328f3897.png?auto=format&w=1280&h=1280',
    'https://cdn11.bigcommerce.com/s-hgn1l9sh63/images/stencil/1000w/products/1972/53091/aca9e8d5e3571690167142b705428792b58d9278__64251.1638995075.386.513.png?c=1',
    'https://i0.wp.com/planete-outdoor.com/wp-content/uploads/2014/12/main_59-450_airwave-snow_hyperdrive-fire-iridium_001_28117_psd_zoom.png?resize=800%2C445',
    'https://www.sportmania.ch/media/catalog/product/cache/1/thumbnail/800x800/9df78eab33525d08d6e5fb8d27136e95/p/i/picture_skipants_for_kids_westy_pt_-_dark_blue_1_1.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}