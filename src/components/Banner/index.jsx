import './styles.css'

export const Banner = ({imagem}) => {
    return (
        <>
        <div className='bannerContainer'>
           <img src={imagem} alt=""/>
        </div>
        </>
    );
  }
