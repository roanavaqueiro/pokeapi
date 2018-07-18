import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

	pokemons = []; //array que irá guardar todos os dados do Pokemon do id em questão
	nextId: number; //Variável que irá guardar o id do Pokemon que estamos buscando

  	constructor(public pkmnService: PokemonService) { 
  		this.nextId = 0;
  	}

  	ngOnInit() {

  	}

	getPokemon(){
		console.log("Estou aqui")
  		this.nextId++;
    	this.pkmnService.getPokemon(this.nextId)
    	.subscribe(
    		(res)=>{
          		this.pokemons.push(res); 
          		console.log(res);
          		console.log(this.pokemons[0].name)
        	}
      	)
  	}
}
