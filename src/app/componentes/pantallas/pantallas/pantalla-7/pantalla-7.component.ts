import { Component, inject } from '@angular/core';
import { DesvioComponent } from "../../basePantallas/desvio/desvio.component";
import { PantallasService } from '../../../../servicios/pantallas.service';
import { AloneComponent } from "../../basePantallas/alone/alone.component";

@Component({
  selector: 'app-pantalla-7',
  standalone: true,
  imports: [AloneComponent],
  templateUrl: './pantalla-7.component.html',
  styleUrl: './pantalla-7.component.css'
})
export class Pantalla7Component 
{
  pantallasService = inject(PantallasService);

  pantallaActual: Number = 7;

  ngOnInit()
  {
    if(this.pantallasService.prepararPantalla(this.pantallaActual))
    {
      this.prepararPantalla();
    }

  }

  prepararPantalla()
  {
    this.pantallasService.setRutaImagen("/images/1/7.jpg");
    
    const paraTexto: String []=[];
    const linea1: String = "El bosque te envuelve, es más tupido de lo que parecía."
    paraTexto.push(linea1);
    const linea2: String = "Y además, el camino se fusiona con el entorno y es algo difícil mantenerse en él."
    paraTexto.push(linea2);
    const linea3: String = "No obstante, oyes cantar algún pajarito y eso te anima."
    paraTexto.push(linea3);
    this.pantallasService.setTextos(paraTexto);
  }
}
