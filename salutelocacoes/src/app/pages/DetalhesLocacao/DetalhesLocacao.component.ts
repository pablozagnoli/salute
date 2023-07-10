import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-DetalhesLocacao',
  templateUrl: './DetalhesLocacao.component.html',
  styleUrls: ['./DetalhesLocacao.component.css']
})
export class DetalhesLocacaoComponent implements OnInit {
  public webcamImage!: WebcamImage;

  constructor() { }

  ngOnInit() {
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

}
