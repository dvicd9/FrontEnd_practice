import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-uj-allat',
  templateUrl: './uj-allat.component.html',
  styleUrls: ['./uj-allat.component.scss']
})
export class UjAllatComponent implements OnInit {
  gondozok: any[] = [];
  ujAllat = {
    nev: '',
    faj: '',
    erkezes: new Date().toISOString().substring(0, 10),
    helye: '',
    gondozo: ''
  };
  hibauzenet: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('https://angular-vizsga-gyak-default-rtdb.europe-west1.firebasedatabase.app/gondozok.json')
    .pipe(
      catchError( (error: any) => {
        this.hibauzenet = error.message;
        return throwError(error);
      })
    )
    .subscribe( (gondozok: any[]) => {
      this.gondozok = gondozok;
    });
  }

  felvesz(){
    this.http.post<any>('https://angular-vizsga-gyak-default-rtdb.europe-west1.firebasedatabase.app/allatok.json', this.ujAllat)
    .pipe(
      catchError( (error: any) => {
        this.hibauzenet = error.message;
        return throwError(error);
      })
    )
    .subscribe( () => {
      this.router.navigate(['allataink']);
    });
  }

}
