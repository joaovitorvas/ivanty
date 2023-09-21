// import artist from './../../assets/images/artist.jpg'
import { PerfilBio, PerfilDescription, PerfilImage, PerfilName, PerfilPhoto } from './styles';
import perfilImage from './../../assets/images/perfilImage.jpg'
import perfilPhoto from './../../assets/images/artist.jpg'

export const PerfilContent = () => {
    return (
        <>
            <PerfilImage src={perfilImage}/> 
            <PerfilPhoto src={perfilPhoto} />     
            <PerfilDescription>
                <PerfilName>
                    Vincent Van Gogh
                </PerfilName>                
                <PerfilBio>
                    Vincent Van Gogh (1853-1890) foi um importante pintor holandês, um dos maiores representantes da pintura pós-impressionista.
                </PerfilBio>
            </PerfilDescription>      
        </>
    );
  }
