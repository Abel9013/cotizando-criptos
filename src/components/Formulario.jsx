import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error  from './Error'
import {monedas} from '../data/monedas'

const InputSubmit = styled.input`
    border: none;
    background-color: #9497FF;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
  
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  
  const [moneda, SelectMonedas] = useSelectMonedas('Selecciona tu moneda', monedas) 
  const [cripto, SelectCripto] = useSelectMonedas('Selecciona tu criptomoneda', criptos) 
  
  
  useEffect(()=>{
    const consultarApi = async()=>{
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=13&tsym=USD" 
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      
      const arrayCriptos = resultado.Data.map( criptomoneda =>{
        const objeto = {
          id:criptomoneda.CoinInfo.Name,
          nombre:criptomoneda.CoinInfo.FullName
        }
        return objeto
       }
      )
      setCriptos(arrayCriptos)
    }
    consultarApi()
  },[])
  const handleSubmit = e =>{
      e.preventDefault()
      if([moneda, cripto].includes('')){
        setError(true);
        return
      }
      setError(false)
      setMonedas(
          { moneda,
            cripto, }
      )
  }

  return (
   <>
    { error && <Error>Todos los campos son obligatorios  </Error> }
    <form
          onSubmit={handleSubmit}
          >
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit
            type="submit" 
            value="cotizar" 
            />
    </form>
  </> 
  )
}

export default Formulario