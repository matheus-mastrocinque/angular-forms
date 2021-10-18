import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { ComentariosComponent } from './anaimais/detalhe-animal/comentarios/comentarios.component';

@NgModule({
  declarations: [AppComponent, ComentariosComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    CabecalhoModule, 
    RodapeModule,
    AutenticacaoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
