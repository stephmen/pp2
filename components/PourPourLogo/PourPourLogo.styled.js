import styled from 'styled-components';

export const PPLogo = styled.div`


background-color: "#b3cad6";
.logo{
    /* border: 3px dashed blue; */
    /* margin: 4rem auto; */
    width: ${props => props.size ? props.size : "75%"};
    

height: auto;
@media (min-height:600px) {

    width: ${props => props.size ? props.size : "75%"};
}
}


` 
