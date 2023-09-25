import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import * as echarts from 'echarts';
import { Observable } from "rxjs";
import { IInformations } from "./informations";

@Component({
    selector: 'big-tree-comp',
    templateUrl: './big-tree.component.html',
  })

export class BigTreeChart {
  InfosURL = 'https://mocki.io/v1/9da83f53-bce5-4f04-a09d-855cd8577d44';
  //InfosURL = 'https://mocki.io/v1/07a0d582-3a16-4838-adef-5cec3d22f574'; //subFILE.json online
  ObservInfos!: Observable<IInformations[]>;
  Infos!:IInformations[];

  constructor(private _http: HttpClient) {
  }

  getInfos(): Observable<IInformations[]> {
      console.log('Doing the getInfos');
      this.ObservInfos = this._http.get<IInformations[]>(this.InfosURL); 
      console.log('    ');
      console.log('    ');
      console.log('Observ: ');
      console.log(this.Infos);
      console.log('    ');
      return this.ObservInfos;
  }

  ngOnInit(): void {
      console.log('In OnInit');
      this.getInfos()
              .subscribe( info => {
                  this.Infos = info;
                }
              );           
      console.log('    ');
      console.log('Products: ');
      console.log(this.Infos);
      console.log('    ');
      console.log('    ');
  }
}