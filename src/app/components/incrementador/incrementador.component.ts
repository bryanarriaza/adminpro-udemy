import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  actChange( newValue: number ) {
    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor( valor: number ) {
    if ( this.progreso + valor >= 105 ) {
      return;
    } else if ( this.progreso + valor <= -5 ) {
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
