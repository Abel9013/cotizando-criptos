import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
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

const Formulario = () => {

  const [moneda, SelectMonedas] = useSelectMonedas('Selecciona tus Monedas', monedas) 
  // SelectMonedas()
  return (
    <form>
        <SelectMonedas />
        <InputSubmit
            type="submit" 
            value="cotizar" 
        />
    </form>
  )
}

export default Formulario