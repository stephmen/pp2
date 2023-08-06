import styled from 'styled-components';

export const LesAmis = styled.div`


background-color: "#b3cad6";
.logo{
    /* border: 3px dashed blue; */
    margin-top: 6rem; 
    width: ${props => props.size ? props.size : "75%"};
    

height: auto;
@media (min-height:600px) {
    margin-top: 4rem;
    margin-top: ${props => props.margintop ? props.margintop : "10rem"}
    width: ${props => props.size ? props.size : "75%"};
}
}


` 
