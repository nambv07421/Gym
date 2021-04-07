import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageService } from "src/app/services/localstorage.service";

@Injectable({
    providedIn: 'root',
})
export class AppGuard implements CanLoad, CanActivate {
    currentUrl: string | undefined;
    constructor(
        public router: Router,
        private localStorageService: LocalStorageService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.localStorageService.get('access_token')) {
            return false

        } else {
            this.router.navigate([''])
        }
        throw new Error("Method not implemented.");
    }
    canLoad(): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }


}