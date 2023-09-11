import card from './../../assets/images/card.svg'
import './styles.css'

export const Card = () => {
    return (
        <>
        <a href="/card">
           <img src={card} alt="" className="card"/>
        </a>
        </>
    );
  }
