import { HttpClient, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


export function apiKeyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const baseUrl = 'https://api.rawg.io/api';
  const apiKey = 'a29382510d634f638a1663c8b019a9fa';

  // Se l'URL non è già assoluto, prepend baseUrl
  let apiReq = req.url.startsWith('http')
    ? req.clone()
    : req.clone({ url: `${baseUrl}/${req.url}` });

  // Aggiungo query param 'key' a tutte le richieste che vengono inviate
  apiReq = apiReq.clone({
    setParams: {
      ...apiReq.params
        .keys()
        .reduce(
          (acc, key) => ({ ...acc, [key]: apiReq.params.get(key) || '' }),
          {}
        ),
      key: apiKey,
    },
  });

  console.log(apiReq);

  return next(apiReq);
}
