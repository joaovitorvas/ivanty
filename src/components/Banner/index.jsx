import './styles.css'

export const Banner = ({imagem}) => {
    return (
        <>
        <section className='bannerContainer'>
           <img src={imagem} alt=""/>
        </section>
        </>
    );
  }
