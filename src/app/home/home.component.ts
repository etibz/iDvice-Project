import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  topProducts: TopProduct[] = [ {title:'Asus Zenbook Pro 14',picture:'assets/img/TopProducts/1.png',price:9790},
                                {title:'Dell XPS 15',picture:'assets/img/Dell/3.png',price:10649},
                                {title:'Lenovo IdeaPad Flex 5',picture:'assets/img/TopProducts/3.png',price:4799},
                                {title:'Microsoft Surface Laptop',picture:'assets/img/Microsoft/5.png',price:14835},
                                {title:'MacBook Pro 16',picture:'assets/img/TopProducts/5.png',price:6999},
                         ]



}
class TopProduct{
  title: string | undefined;
  picture: string | undefined;
  price: number | undefined;

}

