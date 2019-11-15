import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscarheroes',
  templateUrl: './buscarheroes.component.html',
  styleUrls: ['./buscarheroes.component.css']
})
export class BuscarheroesComponent implements OnInit {
  
  private termino:string="";
  public heroesFiltrados:any = {}
  public loading:boolean=true;
  public SendInformation(id){
    this.router.navigate(['informationheroe', id])
  }
  
  constructor(private router:Router,private ActivatedRoute:ActivatedRoute, private _heroeService:HeroeService) {

    this.ActivatedRoute.params.subscribe((terminoURL)=>{
      this.loading=true; 
      console.log(terminoURL.termino)
      this.termino=terminoURL.termino
      // this.termino = this.ActivatedRoute.snapshot.paramMap.get('termino');
      this.heroesFiltrados=this._heroeService.buscarheroes(this.termino);
      // console.log(this.heroesFiltrados);
      this.loading=false;
      
    })
   }


  ngOnInit() {
  }

}
