import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() changeType : EventEmitter<string> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  chooseAll(){
    this.changeType.emit("all");
  }
  chooseApple(){
    this.changeType.emit("Apple");
  }
  chooseAsus(){
    this.changeType.emit("Asus");
  }
  chooseDell(){
    this.changeType.emit("Dell");
  }
  chooseLenovo(){
    this.changeType.emit("Lenovo");
  }
  chooseMicrosoft(){
    this.changeType.emit("Microsoft");
  }
}
