import { CursosService } from './cursos.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent{
  nomePortal: string;
  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    
    // var servico = new CursosService();
    this.cursos =  this.cursoService.getCursos();

   }

  ngOnInit(): void {
  }

}
