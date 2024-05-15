import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imgUrl1 = "assets/img/adir.png";
  imgUrl2 = "assets/img/eti.jpg";
  name1 = "Adir Amar";
  name2 = "Eti Ben Zur";
  id1 = "301730297";
  id2 = "207733437";

  invertColors = false;

  toggleColors() {
    this.invertColors = !this.invertColors;
    document.body.classList.toggle('invert-colors', this.invertColors);
  }
}
