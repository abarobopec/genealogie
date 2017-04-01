import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var OpenSeadragon: any;

@Component({
  selector: 'app-zoomable-image',
  templateUrl: './zoomable-image.component.html',
  styleUrls: ['./zoomable-image.component.css']
})
export class ZoomableImageComponent implements OnInit, AfterViewInit {

  viewer: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.viewer = OpenSeadragon({
      id: "divOpenSeaDragon",
      prefixUrl: "/assets/images-osd/",
      tileSources: "/assets/GENEALOGIE.dzi"
    })
  }

}
