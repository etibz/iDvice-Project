import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    products: Product[] = [ 
    new Product('Apple','Apple MacBook Air 15 M2 Chip 8-Core CPU','assets/img/Apple/1.png','Apple M2 Chip',16,'512GB SSD','15.3 inch (diagonal) LED backlit display with IPS technology', 'Touch ID', 1.15, 34.04, 23.76 ,66.5, 1, 7899),
    new Product('Apple','Apple MacBook Air 15″ (M2) 2023','assets/img/Apple/2.png','Apple M2 Chip', 8, '256GB SSD', '15.3-inch (diagonal) LED-backlit display with IPS technology','Touch ID',1.15, 34.04, 23.76, 66.5, 1,5999),
    new Product('Apple','Apple MacBook Air 15 M2 Chip 8-Core CPU Gold','assets/img/Apple/3.png','Apple M2 Chip', 24, '512GB SSD', '15.3 inch (diagonal) LED backlit display with IPS technology','Touch ID', 1.15, 34.04, 23.76, 66.5, 1,8849),
    new Product('Apple','Apple MacBook Pro 14 Apple M3 Max Chip 16-Core CPU','assets/img/Apple/4.png','Apple M3 Max chip', 48, '2TB SSD', '14.2 inch (diagonal) Liquid Retina XDR display', 'Touch ID', 1.55, 31.26, 22.12, 72.4, 1 ,19799),
    new Product('Apple','Apple MacBook Pro 16 M3 Pro Chip 12-Core CPU','assets/img/Apple/5.png','Apple M3 Pro chip', 36, '1TB SSD', '16.2-inch (diagonal) Liquid Retina XDR display','Touch ID', 1.68, 35.57, 24.81, 100, 1,14949) , 
    new Product('Asus','Asus Vivobook 14 X1404VA-EB068','assets/img/Asus/1.png','13th Gen Intel® Core™ i3-1315U 6 Core / 8 Threads Processor 10MB Cache, 1.20 GHz up to 4.50 GHz (2E+4P cores)', 8, '512GB SSD', '14.0 inch, FHD (1920 x 1080) 16:9 aspect ratio LED Backlit', 'Web Camera with privacy shutter', 1.79, 32.49, 21.39, 42, 1,2299),
    new Product('Asus','Asus Vivobook S 16 Flip OLED TN3604YA-MY042W','assets/img/Asus/2.png','AMD Ryzen™ 7 7730U Mobile Processor (8 core/16 thread, 16MB cache, up to 4.5 GHz max boost)', 16, '1TB SSD', '16.0 inch 3.2K (3200x2000) OLED 16:10 aspect ratio', 'Touch screen', 1.96, 35.52, 25.24, 50, 1,5199),
    new Product('Asus','Asus Zenbook S 13 OLED UX5304VA-NQ307W','assets/img/Asus/3.png','Intel® Core™ i5-1335U Processor 1.3 GHz (12MB Cache, up to 4.6 GHz, 10 cores, 12 Threads)', 8, '512GB SSD', '13.3 inch 2.8K (2880x1800) OLED 16:10 aspect ratio', 'SGS Eye Care Display', 1.09, 29.62, 21.63, 63, 1,4799),
    new Product('Asus','Asus Zenbook Pro 14 Duo OLED Touch Screen UX8402VV-P1021W','assets/img/Asus/4.png','Intel® Core™ i7-13700H 14 Core / 20 Threads', 16, '1TB SSD', '14.50Inch 2.8K (2880x1800) 16:10 aspect ratio, 400nits, Glossy display', 'ScreenPad™ Plus (12.7" 2880 x 864 IPS-level Panel Support Stylus)', 1.79, 32.35, 22.47, 76, 3,9790),
    new Product('Asus','Asus Zenbook Pro 16X OLED Touch Screen UX7602ZM','assets/img/Asus/5.png','Intel® Core™ i9-12900H Processor 2.5 GHz (24M Cache, up to 5.0 GHz, 6P+8E cores)', 32, '1TB SSD', '16.0 inch 4K (3840x2400) OLED 16:10 aspect ratio 0.2ms response time', 'FingerPrint', 1.69, 35.50, 25.10, 96, 1,9490),
    new Product('Dell','Dell Inspiron 16 Plus 7630 IN-RD33-14420 N7630-8127','assets/img/Dell/1.png','13th Generation Intel Core i7 13700H Processor (24MB Cache, 14 cores, 20 threads, up to 5.0 GHz)', 16, '512GB SSD', '16.0-inch 16:10 2.5K(2560x1600) Anti Glare Non-Touch WVA Display ComfortView Plus', 'Integrated Widescreen FHD (1080p) Webcam with Dual Digital Microphone', 1.71, 35.67, 25.19, 130, 3,6799),
    new Product('Dell','Dell Inspiron 5430 IN-RD33-14397 N5430-7434','assets/img/Dell/2.png','13th Generation Intel(R)Core(TM) i7 1360P Processor (18MB Cache, up to 5.00 GHz)', 16, '512GB SSD', '14.0 inch 16:10 2.5K (2560x1600) Anti-Glare NonTouch 300nits WVA Display with ComfortView Plus Support', 'Fingerprint Reader', 1.65, 31.4, 22.6, 54, 3 ,5490),
    new Product('Dell','Dell XPS 15 XP-RD33-13526  XP-RD33-13668 XP-RD33-13917','assets/img/Dell/3.png','12th Generation Intel Core i7-12700H (24MB Cache, up to 4.7 GHz, 14 cores)', 16, '1TB SSD', '15.6" FHD+ (1920 x 1200) InfinityEdge Non Touch Anti Glare 500 Nit Display', 'Fingerprint reader', 1.85, 34.4, 23.01, 86, 3,10649),
    new Product('Dell','Dell XPS 15 9530 XP-RD33-144249744 Touch Screen','assets/img/Dell/4.png','13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)', 32, '1TB SSD', '15.6" OLED 3.5K (3456x2160) InfinityEdge Touch Anti Reflective 400-Nit Display', 'fingerprint reader', 1.8, 34.47, 23.01, 86, 3 ,14599),
    new Product('Dell','Dell XPS 17 9730 XP-RD33-14418 Touch Screen','assets/img/Dell/5.png','13th Generation Intel® Core™ i7 13700H Processor (14 Core, 24MB Cache, up to 5.0 GHz)', 32, '1TB SSD', '17.0", UHD+ (3840 x 2400) InfinityEdge Touch Anti Reflecitve 500-Nit Display', 'fingerprint reader', 1.95, 37.44, 24.80, 97, 3,16990),
    new Product('Lenovo','Lenovo Legion 9','assets/img/Lenovo/1.png','Intel® Core™ i9-13980HX, 24C (8P + 16E) 32T, P core 2.2  5.6GHz, E core 1.6  4.0GHz, 36MB', 32, '2TB SSD', '16 inch 3.2K (3200x2000)', 'fingerprint reader', 1.89, 35.77, 27.77, 99.9, 3 ,22799),
    new Product('Lenovo','Lenovo Yoga 9','assets/img/Lenovo/2.png','Intel Core i7 1360P, 12C (4P + 8E) 16T, P core up to 5.0GHz, E core up to 3.7GHz, 18MB', 16, '1TB SSD', '14 inch 4K (3840x2400)', 'Multi touch screen', 1.52, 31.8, 23.0, 75, 3,6999),
    new Product('Lenovo','Lenovo IdeaPad Flex 5 Touch','assets/img/Lenovo/3.png','Intel® Core™ i5-1335U, 10C (2P + 8E) 12T, P core up to 4.6GHz, E-core up to 3.4GHz, 12MB', 16, '1TB SSD', '14 inch WUXGA (1920x1200)', 'Multi touch screen', 1.74, 31.31, 22.49, 52.5, 3,4799),
    new Product('Lenovo','Lenovo IdeaPad Flex 5-14 Touch','assets/img/Lenovo/4.png','AMD Ryzen 5 5500U (6C / 12T, 2.1 / 4.0GHz, 3MB L2 / 8MB L3)', 8, '256GB SSD', '14.0 inch WUXGA (1920x1200) Resolution IPS Panel', 'Multi touch screen', 1.78, 33.11, 22.49, 52.5, 3,2899),
    new Product('Lenovo','Lenovo Yoga Slim 7 Touch','assets/img/Lenovo/5.png','AMD Ryzen™ 7 7840S (8C / 16T, 3.3 / 5.1GHz, 8MB L2 / 16MB L3)', 32, '1TB SSD', '14.5 inch 2.9K (2944x1840)', 'Multi touch screen', 1.39, 22.34, 32.58, 70, 3,6999),
    new Product('Microsoft','Microsoft Surface Laptop 5, Touch Screen','assets/img/Microsoft/1.png','Intel Evo i7 12th Gen', 32, '1TB SSD', 'PixelSense Touchscreen 15 inch 2496 x 1664', 'Multi touch screen', 1.45, 22.3, 20.0, 65, 1,13495),
    new Product('Microsoft','Microsoft Surface Laptop 5, Touch Screen 13.5 inch','assets/img/Microsoft/2.png','Intel Evo i7 12th Gen', 16, '512GB SSD', 'PixelSense Touchscreen 13.5 inch 2256 x 1504', 'Multi touch screen', 1.45, 22.3, 19.0, 55, 1,9715),
    new Product('Microsoft','Microsoft Surface Laptop 5, Touch Screen 15 inch','assets/img/Microsoft/3.png','Intel Evo i7 12th Gen', 16, '512GB SSD', 'PixelSense Touchscreen 15 inch 2496 x 1664', 'Multi touch screen', 1.45, 22.3, 19.4, 55, 1,10295),
    new Product('Microsoft','Microsoft Surface Laptop Studio 2, 14.4”','assets/img/Microsoft/4.png','13th Gen IntelFootnote® Core™ i7-13800H Processor', 64, '2TB SSD', 'PixelSense touchscreen 14.4 inch 2400X1600', 'Multi touch screen', 2.18, 23.01, 18.4, 55, 1 ,23845),
    new Product('Microsoft','Microsoft Surface Laptop Studio 14.4 Touch','assets/img/Microsoft/5.png','Quad Core 11th Gen Intel Core H35 i7-11370H', 32, '1TB SSD', 'PixelSense touchscreen 14.4 inch 2400X1600', 'Multi touch screen', 1.89, 32.30, 22.80,58, 1,14835)    
  ];

  getProducts(){
    return this.products;
  }
  getProductsByBrand(brand : string){
    let arr : Product[] = []
    for(let product of this.products){
      if(product.getBrand() == brand)
      arr.push(product)
    }
    return arr
  }
  /*פונקציה זו מקבלת מחרוזת כקלט, שהיא כותרת המוצר שמחפשים.
   היא משתמשת במתודת 
   find 
   של מערך כדי למצוא את המוצר במערך 
   products
    שכותרתו תואמת לקלט שהתקבל.
בכל איטרציה של הפונקציה 
find, 
היא בודקת אם תוכן הכותרת של המוצר הנוכחי שנבדק תואם את הכותרת שהתקבלה כארגומנט.
 אם כן, המוצר מוחזר. אם אין מוצר במערך שכותרתו תואמת את הקלט, הפונקציה מחזירה 
 undefined.*/
  getProductByTitle(title: string): Product | undefined {
    return this.products.find(product => product.getTitle() === title);
  }

  constructor() {}
}
