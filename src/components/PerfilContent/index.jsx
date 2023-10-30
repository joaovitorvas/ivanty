// import artist from './../../assets/images/artist.jpg'
import { ContainerNameBio, GridContainer, PaintingsList, PerfilBio, PerfilDescription, PerfilHead, PerfilImage, PerfilName, PerfilPhoto, PhotoContainer } from './styles';
import { PinturasCard } from '../PinturasCard';
import backgroundPhoto from './../../assets/images/brazilianDiversity.jpg'

export const PerfilContent = (props) => {
    return (
        <>
            <PerfilImage src={backgrondPhoto}/> 
            <PerfilDescription>
                <GridContainer>
                    <PhotoContainer>
                        <PerfilPhoto src={props.photo} />
                    </PhotoContainer>
                    <ContainerNameBio>
                        <PerfilName>
                            {props.name}
                        </PerfilName>
                        <PerfilHead>
                            {props.head}
                        </PerfilHead>
                    </ContainerNameBio>          
                </GridContainer>
                <PerfilBio>
                   {props.bio}
                </PerfilBio>
            </PerfilDescription>  
            <PaintingsList>
                <PinturasCard title={props.title} author={props.author} img={props.obra} price={props.price}/>
                <PinturasCard title={props.title2} author={props.author} img={props.obra2} price={props.price2}/>
                <PinturasCard title={props.title3} author={props.author} img={props.obra3} price={props.price3}/>
            </PaintingsList>    
        </>
    );
  }
