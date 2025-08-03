import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import { Imageslider } from '../../components/imageslider/imageslider';
import { Imagespreview } from "../../components/imagespreview/imagespreview";

@Component({
  selector: 'app-home',
  imports: [Header, Imageslider, Imagespreview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
