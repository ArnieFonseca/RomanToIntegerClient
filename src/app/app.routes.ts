import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RomanIntegerComponent } from './roman-integer/roman-integer.component';
import { IntegerRomanComponent } from './integer-roman/integer-roman.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "roman-integer", component:RomanIntegerComponent},
    {path: "integer-roman", component:IntegerRomanComponent},
];
