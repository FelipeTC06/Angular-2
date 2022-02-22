import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string [] = ["Angular2"]

  mostrarcursos: boolean = false

  constructor() { }

  onMostrarcursos(){
    this.mostrarcursos = !this.mostrarcursos
  }

  ngOnInit(): void {
  }

}
