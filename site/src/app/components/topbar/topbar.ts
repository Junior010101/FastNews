import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss'],
})
export class Topbar implements OnInit, OnDestroy {
  currentDate = new Date();
  currentTime: string = '';
  private timer: any;

  ngOnInit() {
    this.updateTime();
    this.timer = setInterval(() => this.updateTime(), 1000 * 60);
  }

  updateTime() {
    const d = new Date();
    this.currentTime = d.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
