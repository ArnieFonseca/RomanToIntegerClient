import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { map, tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  /**
   * Call the server to check for authorization
   */
  return authService.isAuthenticated().pipe(
    tap(isAuth => {
      if (!isAuth) {
        router.navigate(['/not-auth']);
      }
    }),
    map(isAuth => isAuth)
  )  

 
} 
