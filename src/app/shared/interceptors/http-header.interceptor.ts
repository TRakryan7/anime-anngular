import { HttpInterceptorFn } from '@angular/common/http';

export const httpHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
