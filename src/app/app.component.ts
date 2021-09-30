import { LivroService } from './services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from './models/livro';
import { Router } from "@angular/router";

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
  autor: string = '';
  editora: string = '';
  preco: number = 0;

  clicou(): void {
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.autor = (<HTMLInputElement>document.getElementById("autor")).value;
    this.editora = (<HTMLInputElement>document.getElementById("editora")).value;
    this.preco = Number((<HTMLInputElement>document.getElementById("preco")).value);

    var livro: Livro = {
      nome: this.username,
      autor: this.autor,
      editora: this.editora,
      preco: this.preco
    };

    this.service.create(livro).subscribe(livro => {
      window.location.reload();
    })

  }
}
