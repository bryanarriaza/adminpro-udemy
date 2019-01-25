import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  guardarAjustes( ): void {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes( ): void {
    if ( localStorage.getItem( 'ajustes' )) {
      this.ajustes = JSON.parse( localStorage.getItem( 'ajustes' ) );
      this.aplicarTema( this.ajustes.tema );
    } else {
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema( tema: string ): void {
    const urlTheme = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', urlTheme);

    this.ajustes.temaUrl = urlTheme;
    this.ajustes.tema = tema;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
