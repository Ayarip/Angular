import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-informationheroe',
  templateUrl: './informationheroe.component.html',
  styleUrls: ['./informationheroe.component.css']
})
export class InformationheroeComponent implements OnInit {

  public heroefiltrado:any={}

  constructor(private ActivatedRouter:ActivatedRoute,private _HeroeService:HeroeService) {

    console.log('Hola soy el constructor');
    const Parametro = this.ActivatedRouter.snapshot.paramMap.get('id');
    this.heroefiltrado=this._HeroeService.searcheroe(Parametro);
    console.log(Parametro);
   }

  ngOnInit() {
    console.log('Hola soy el ngOnInit');
  }

}
