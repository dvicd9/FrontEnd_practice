import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-allataink',
  templateUrl: './allataink.component.html',
  styleUrls: ['./allataink.component.scss']
})
export class AllatainkComponent implements OnInit {
  allatainkOszlopok: string[] = ['nev', 'faj', 'gondozo', 'erkezes', 'helye', 'erkezes'];
  allataink: any[] = [];
  hibauzenet: String = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://angular-vizsga-gyak-default-rtdb.europe-west1.firebasedatabase.app/allatok.json')
    .pipe(
      catchError( (error: any) => {
        this.hibauzenet = error.message;
        return throwError(error);
      }),
      map( (allatok: any[]) => {
        let ujAllatok: any[] = [];
        Object.entries(allatok).forEach( ([key, value]) =>{
          ujAllatok.push(value);
        });
        return ujAllatok;
      })
    )
    .subscribe( (allatok: any[]) => {
      this.allataink = allatok;
      console.log(this.allataink);      
    });
  }

}
