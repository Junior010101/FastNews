import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home',
  imports: [Header, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
