import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true, // importante para usar imports
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [Topbar, FormsModule], // aqui adiciona FormsModule
})
export class Header {
  searchTerm = '';
  onSearch() {
    alert('Pesquisar: ' + this.searchTerm);
  }
  onAbout() {
    alert('Sobre nós - Conteúdo a implementar');
  }
  onContact() {
    alert('Contato - Conteúdo a implementar');
  }
}
