import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import { Imageslider } from '../../components/imageslider/imageslider';

@Component({
  selector: 'app-home',
  imports: [Header, Imageslider],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
