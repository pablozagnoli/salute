import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-DetalhesLocacao',
  templateUrl: './DetalhesLocacao.component.html',
  styleUrls: ['./DetalhesLocacao.component.css'],
})
export class DetalhesLocacaoComponent implements OnInit {
  public webcamImage!: WebcamImage;
  @ViewChild('camera') camera: any;

  constructor() {}

  ngOnInit() {}

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  abrircamera() {
    this.camera.toggleWebcam();
  }
}
