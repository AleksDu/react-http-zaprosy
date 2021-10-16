import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';


export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        this.setState({loading: true})
        if (prevName !== nextName) {
            // console.log('изменилось имя покемона')
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
                .then(res => res.json())
                .then(pokemon => this.setState({ pokemon }))
            .finally( () => this.setState({loading: false}))
        }
    }
    
    render() {
        const { pokemon, loading } = this.state;
        const {pokemonName} = this.props

        return <div>
            <h1>PokemonInfo</h1>
            {loading && <div>Загружаем</div>}
            {!pokemonName && <div>Введите имя покемона</div>}
            {pokemon && <div>{ pokemon.name}</div>}
            </div>
    }
}