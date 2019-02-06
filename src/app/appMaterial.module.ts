
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatSlideToggleModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  } from '@angular/material';

@NgModule({
    imports: [
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatRippleModule,
        MatOptionModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule
    ],
    exports: [
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatRippleModule,
        MatOptionModule,
        MatSelectModule,
        MatDividerModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        FlexLayoutModule
    ],
})
export class AppMaterialModule {
}
