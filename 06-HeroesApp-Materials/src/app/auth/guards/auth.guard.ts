import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  RouterStateSnapshot,
  UrlSegment
} from "@angular/router";

const CanActivate: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    console.log('Can Active')
  return true;
}

export const CanMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  console.log('Can Mach')
  return true;
}

export const AuthGuard = {
  CanActivate, CanMatch
}
