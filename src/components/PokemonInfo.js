import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';


export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
        error: null
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        
        if (prevName !== nextName) {
            this.setState({ loading: true });
            console.log('изменилось имя покемона')
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon }))
                .catch(error => this.setState({error}))
            .finally( () => this.setState({loading: false}))
        }
    }
    
    render() {
        const { pokemon, loading, error } = this.state;
        const {pokemonName} = this.props

        return <div>
            <h1>PokemonInfo</h1>
            {error && <h1>халепа, покемона з таким імям { pokemonName} немає</h1>}
            {loading && <div>Загружаем</div>}
            {!pokemonName && <div>Введите имя покемона</div>}
            {pokemon && (<div>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.other['official-artwork'].front_default} width='300' alt={pokemon.name} />
            </div>)}
            </div>
    }
}