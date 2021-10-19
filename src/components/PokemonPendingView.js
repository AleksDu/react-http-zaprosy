import { ImSpinner } from 'react-icons/im';
import PokemonDataView from './PokemonDataView';
import pendingImage from './Pending.png'
import styles from '../index.css'
export default function PokemonPendingView({ pokemonName }) {
    const pokemon = {
        name: pokemonName,
        sprites: {
        other: {
            'official-artwork':{
             front_default: pendingImage,   
           }, 
            },
             },
        stats: [],
       
    }
    
    return (
        <div role='alert'>
            <div style={styles.spinner}>
                <ImSpinner size='32' classname='icon-spin' />
                Загружаем...
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>
    )
}
