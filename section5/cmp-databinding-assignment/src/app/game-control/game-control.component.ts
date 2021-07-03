import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFire = new EventEmitter<number>(); 
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFire.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000)
  }

  onStopGame() {
    clearInterval(this.interval)
  }

}
