import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {
  
  livro: any = {
    titulo: 'The Harvey Spector Handbook',
    rating: 3.58,
    numpags: 26,
    preco: 59.31,
    dataLancamento: new Date(2014, 4, 16),
    url: 'https://ler.amazon.com.br/kp/embed?asin=B00IHYE25K&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_V7BVG836NBZPZK0SSP47'
  }
   livros: string[] = ['Java', 'Angular2']

   filtro: string = ''

   obterCursos(){
    if (this.livros.length === 0 || this.filtro === null || this.filtro.trim() === ''){
      return this.livros
    }
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true
      }
      return false
    }
    
    )
}

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
      
    });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'))
  


  constructor() { }

  ngOnInit(): void {
  }

}

