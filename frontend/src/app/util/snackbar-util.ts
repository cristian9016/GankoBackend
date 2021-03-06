import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';

export function snackOk(snackbar: MatSnackBar, msg: string) {
    snackbar.open(msg, null, {
        duration: 1500
    });
}

export function snackError(snackbar: MatSnackBar, err: Error | string) {
    console.log(err);
    snackbar.open(typeof err === 'string' ? err : err.message, null, {
        duration: 1500, panelClass: 'snackbar-error'
    });
}


export function snackCatchError<T>(snackbar: MatSnackBar, err: Error | string): Observable<T[]> {
    console.log(err);
    snackbar.open(typeof err === 'string' ? err : err.message, null, {
        duration: 1500, panelClass: 'snackbar-error'
    });
    return of([]);
}
