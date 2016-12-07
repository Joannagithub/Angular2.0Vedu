import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class TeacherDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid teacher Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/teachers']);
            // abort current navigation
            return false;
        };
        return true;
    }
}
