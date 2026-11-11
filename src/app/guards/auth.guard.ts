import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usuarioAutenticado = true; // Simulación de sesión activa

  if (usuarioAutenticado) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};