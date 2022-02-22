import { EventEmitter, Injectable } from "@angular/core";
 
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService{

    emitiCursoCriado = new EventEmitter<string>()
    static criouNovoCurso = new EventEmitter<string>()

    private cursos:string[] = ['Angular2', 'Java', 'Phonegap']

    constructor(private logService: LogService){
        console.log('CursosService')
    }

    getCursos(){
        this.logService.consolelog('Obtendo listas de cursos')
        return this.cursos
    }
    addCurso(curso: string){
        this.logService.consolelog(`Criando um novo curso ${curso}` )
        this.cursos.push(curso)
        this.emitiCursoCriado.emit(curso)
        CursosService.criouNovoCurso.emit(curso)
    }
}       