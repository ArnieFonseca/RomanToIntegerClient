import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-navigation',
    imports: [RouterOutlet, RouterLink, RouterLinkActive,],
    templateUrl: './navigation.component.html' 
})
export class NavigationComponent {
    environmentName =  environment.environmentName
}
