import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {RomanIntegerComponent} from './roman-integer/roman-integer.component'
import { NavigationComponent } from './navigation/navigation.component';
import { IntegerRomanComponent } from  './integer-roman/integer-roman.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RomanIntegerComponent,NavigationComponent, IntegerRomanComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'roman';
}
