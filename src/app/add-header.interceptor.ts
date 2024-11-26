import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './service/auth.service';

export const addHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService); // Inject AuthService

  const userToken = authService.getToken();;

  if (userToken) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${userToken}`, // Attach the token to the Authorization header
      },
    });
    return next(clonedReq); // Pass the cloned request to the next handler
  }
  return next(req);
};
