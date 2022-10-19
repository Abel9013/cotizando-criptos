import styled from "@emotion/styled"

const DivResultado = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 30px;
`
const ImagenCripto = styled.img`
    display: block;
    width: 120px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
      font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span {
      font-weight: 700;
    }
`
const Resultado = ( {resultado} ) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <DivResultado>
        <ImagenCripto 
                  src={`https://cryptocompare.com/${IMAGEURL}`} 
                  alt="Imagen cripto" 
        />
        <div className="">
          <Precio>El precio es de: <span>{PRICE}</span> </Precio>
          <Texto>Precio más alto del día: <span>{HIGHDAY}</span> </Texto>
          <Texto>Precio más bajo del día: <span>{LOWDAY}</span> </Texto>
          <Texto>Variacion ultimas 24 hs: <span>{CHANGEPCT24HOUR}</span> </Texto>
          <Texto>Ultima actualización: <span>{LASTUPDATE}</span> </Texto>
        </div>
    </DivResultado>
  )
}

export default Resultado