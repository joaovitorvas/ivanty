import { ArtistBio, ArtistName, ArtistPhoto, Button, Container } from "./styles";

export const ArtistBox = (props) => {
    return (
        <>
            <Container>
                <ArtistPhoto src={props.img}/>
                <div>
                    <ArtistName>{props.name}</ArtistName>
                    <ArtistBio>{props.bio}</ArtistBio>
                    <a href={props.link}>
                        <Button>Ver mais</Button>
                    </a>
                </div>
            </Container>
        </>
    );
  }
