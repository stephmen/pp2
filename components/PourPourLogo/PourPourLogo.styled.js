import styled from 'styled-components';

export const PPLogo = styled.div`


background-color: "#b3cad6";
.logo{
    /* border: 3px dashed blue; */
    /* margin: 4rem auto; */
    position: absolute;
    top: 19rem;
    right: 2rem;
    /* margin: ${props => props.margin ? props.margin : ""}; */
    /* margin-top: ${props => props.margintop ? props.margintop : ""}; */
    width: ${props => props.size ? props.size : "75%"};
    
    

height: auto;
@media (min-height:600px) {

    width: ${props => props.size ? props.size : ""};
}
}


` 
