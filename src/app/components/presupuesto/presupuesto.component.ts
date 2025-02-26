import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gastos } from '../../models/Gastos';

@Component({
  selector: 'app-presupuesto',
  imports: [NavComponent, CommonModule, FormsModule],
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.css'
})
export class PresupuestoComponent {
  // Variables
  arrayGastos: Gastos[] = [];
  nombreGasto = '';
  cantidadGastada = 0;
  presupuesto = 0;
  total = 0;
  // Variables Form
  valido: boolean = true;
  // Variable alert
  mostrarAlert: boolean = false;

  agregarGasto(){
    // Creamos el objeto de tipo Gastos
    let gasto: Gastos = {
      nombre: this.nombreGasto,
      cantidad: this.cantidadGastada
    };

    // Validamos el Formulario
    this.validarForm();

    if(this.valido){
      // Añadimos el Gasto al Array
      this.arrayGastos.push(gasto);

      // Calculamos el total sumando toda la cantidad del array gastos
      this.total += this.cantidadGastada;

      // Limpiamos los gastos
      this.nombreGasto = '';
      this.cantidadGastada = 0;

      // Comprobamos que el Presupuesto sea menor que el Total de la Cantidad de Gastos
      if(this.total > this.presupuesto){
        // Actualizamos el estado de la alerta
        this.mostrarAlert = true;

        // Escondemos la alerta a los 5 segundos
        setTimeout(() => {
          this.mostrarAlert = false;
        }, 5000);
      }

    }
  }

  validarForm(){
    this.valido = true;

    let inpNombreGasto = document.getElementById('InputGasto') as HTMLInputElement;
    let inpCantidadGasto = document.getElementById('InputCantidad') as HTMLInputElement;

    if (!this.nombreGasto && !this.cantidadGastada) {
      // Agregamos la clase de Bootstrap para controlarlo
      inpNombreGasto.classList.add("is-invalid");
      inpCantidadGasto.classList.add("is-invalid");

      // Es inválido, así que actualizamos a false
      this.valido = false;

    } else{
      inpNombreGasto.classList.remove("is-invalid");
      inpCantidadGasto.classList.remove("is-invalid");
    }
  }
}
