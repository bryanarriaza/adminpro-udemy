import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber } from 'rxjs/internal/Subscriber';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() {

    this.subscripcion = this.regresaObservable().pipe(
      // retry(0)
    )
    .subscribe(
      numero => console.log( 'Subscribe', numero ),
      error => console.error( 'Error en el observable', error),
      () => console.log( 'El observador termino!!!' )
    );

  }

  ngOnInit() {
  }

  ngOnDestroy () {
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( ( observer: Subscriber<any> ) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );
        /* if ( contador === 4 ) {
          observer.error( 'Auxilio!!!' );
        } else if ( contador === 3 ) {
          clearInterval( intervalo );
          observer.complete();
        } */
      }, 1000);
    }).pipe(
      map( ( resp: any ) => {
        return resp.valor;
      }), filter( ( valor, index ) => {
        if ( (valor % 2) === 1 ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}