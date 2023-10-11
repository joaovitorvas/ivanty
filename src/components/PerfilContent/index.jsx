// import artist from './../../assets/images/artist.jpg'
import { ContainerNameBio, GridContainer, PaintingThumbnail, PaintingsList, PerfilBio, PerfilDescription, PerfilHead, PerfilImage, PerfilName, PerfilPhoto, PhotoContainer } from './styles';
import perfilImage from './../../assets/images/perfilImage.jpg'
import perfilPhoto from './../../assets/images/artist.jpg'
import oGrito from './../../assets/images/oGrito.jpg'

export const PerfilContent = () => {
    return (
        <>
            <PerfilImage src={perfilImage}/> 
            {/* <PerfilPhoto src={perfilPhoto} />      */}
            <PerfilDescription>
                <GridContainer>
                    <PhotoContainer>
                        <PerfilPhoto src={perfilPhoto} />
                    </PhotoContainer>
                    <ContainerNameBio>
                        <PerfilName>
                            Vincent Van Gogh
                        </PerfilName>
                        <PerfilHead>
                            Pintor/Holanda/37 anos
                        </PerfilHead>
                    </ContainerNameBio>          
                </GridContainer>
                <PerfilBio>
                    Vincent Van Gogh (1853-1890) foi um importante pintor holandês, um dos maiores representantes da pintura pós-impressionista.
                </PerfilBio>
            </PerfilDescription>  
            <PaintingsList>
                <PaintingThumbnail src={oGrito}/>
                <PaintingThumbnail src={oGrito}/>
                <PaintingThumbnail src={oGrito}/>
                <PaintingThumbnail src={oGrito}/>
                <PaintingThumbnail src={oGrito}/>
                <PaintingThumbnail src={oGrito}/>
                <PaintingThumbnail src={oGrito}/>
            </PaintingsList>    
        </>
    );
  }
