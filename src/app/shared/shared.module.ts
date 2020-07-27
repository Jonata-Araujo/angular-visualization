import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    ComponentsModule,
    ServicesModule,
    PipesModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, NgbModule, ComponentsModule, ServicesModule, PipesModule],
})
export class SharedModule {}
