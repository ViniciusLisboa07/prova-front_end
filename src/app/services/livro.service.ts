import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Livro } from "../models/livro";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  constructor(private http: HttpClient) {}

  private baseURL = "http://localhost:5000/api/livro";

  list(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.baseURL}/list`);
  }

  create(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(`${this.baseURL}/create`, livro);
  }

}
