import React, { useState, useRef } from 'react';
import {
  GridContainer,
  CustomButton,
  CustomButton1,
  PerfilBio,
  Icon,
  PerfilAdd,
  PerfilDescription,
  PerfilHead,
  PerfilImage,
  PerfilName,
  PerfilPhoto,
  PhotoContainer,
} from './styles';

import perfilImage from './../../assets/images/perfilImage.jpg';
import perfilPhoto from './../../assets/images/artist.jpg';
import { FaEdit } from 'react-icons/fa';
import './imag.css';

export const EditPerfil = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const inputRef = useRef(null);


  //dados do botão editar
  const [isEditing, setIsEditing] = useState(false);
  const [editedNome, setEditedNome] = useState('Seu nome');
  const [editedInformacoes, setEditedInformacoes] = useState('Informações gerais');
  const [editedBiografia, setEditedBiografia] = useState('Adicione sua biografia');

  const handleTextChange = (field, value) => {
    switch (field) {
      case 'nome':
        setEditedNome(value);
        break;
      case 'informacoes':
        setEditedInformacoes(value);
        break;
      case 'biografia':
        setEditedBiografia(value);
        break;
      default:
        break;
    }
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newImages = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        file,
      }));
      setUploadedImages([...uploadedImages, ...newImages]);
    }
  };

  const handleCustomButton1Click = () => {
    inputRef.current.click();
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <PerfilImage src={perfilImage} />
      <PerfilDescription>
        <GridContainer>
          <PhotoContainer>
            <PerfilPhoto src={perfilPhoto} />
          </PhotoContainer>
          <div>
            {isEditing ? (
              <input
                type="text"
                value={editedNome}
                onChange={(e) => handleTextChange('nome', e.target.value)}
              />
            ) : (
              <PerfilName>{editedNome}</PerfilName>
            )}
            {isEditing ? (
              <input
                type="text"
                value={editedInformacoes}
                onChange={(e) => handleTextChange('informacoes', e.target.value)}
              />
            ) : (
              <PerfilHead>{editedInformacoes}</PerfilHead>
            )}
          </div>
        </GridContainer>
        {isEditing ? (
          <input
            type="text"
            value={editedBiografia}
            onChange={(e) => handleTextChange('biografia', e.target.value)}
          />
        ) : (
          <PerfilBio>{editedBiografia}</PerfilBio>
        )}
        <div>
          <CustomButton onClick={isEditing ? handleSaveClick : handleEditClick}>
            {isEditing ? 'Salvar' : 'Editar'}{' '}
            <div>
              <Icon>
                <FaEdit />
              </Icon>
            </div>
          </CustomButton>
        </div>
      </PerfilDescription>


 
      
      <PerfilAdd>
        <h2>Adicione suas obras</h2>
      </PerfilAdd>
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          multiple
          style={{ display: 'none' }}
          ref={inputRef}
        />
        <CustomButton1 onClick={handleCustomButton1Click}>
          Adicionar
        </CustomButton1>
      </div>
      <div className="image-grid">
        {uploadedImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={`Imagem ${index + 1}`}    />
          </div>
        ))}
      </div>
    </>
  );
};

export default EditPerfil;