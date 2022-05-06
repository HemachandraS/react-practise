import styled from 'styled-components'

export const Button = styled.button`
display:flex;
padding:4px 15px;
margin:2px 10px;
border:1px solid #97d6a784;
border-radius:6px;
background-color:#0cbe0c84;
&:hover{
    cursor: pointer;
    background-color:#0beb1dcf;
    border:1px solid #0fd641dc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:0.3s;
}
`