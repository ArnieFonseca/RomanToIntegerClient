import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    // Home Path
    {path: "", component:HomeComponent},

    // Lazy loading Roman to Integer
    {path: "roman-integer", 
        loadComponent: () => import('./roman-integer/roman-integer.component').then(c => c.RomanIntegerComponent)},

    // Lazy loading Integer to Roman
    {path: "integer-roman",
        loadComponent: () => import('./integer-roman/integer-roman.component').then(c => c.IntegerRomanComponent)},
    
    // No Found path
    {path: "**", component:PageNotFoundComponent},
];
