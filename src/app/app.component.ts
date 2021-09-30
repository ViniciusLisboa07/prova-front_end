import { LivroService } from './services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from './models/livro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
  livros: Livro[] = [];

  constructor(private service: LivroService){}

  ngOnInit(): void {
    this.service.list().subscribe(livros => {
      this.livros = livros;
      console.log(livros);
    });  
  }

  username: string = '';

  clicou = () => {
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
  }
}
