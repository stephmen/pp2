import styled from 'styled-components';
export const ShowStyle = styled.div`
width: 660px;

margin: auto;
display: grid;
grid-gap: 0px;
/* grid: 4rem / auto / auto / auto */



.title{
    padding-top: 5rem;
    grid-area: 1 / 1 ;
}
.endroit{
    grid-area: 2 /1
}
.adress{  
    flex-direction: column;
    align-self: end;
    grid-area: 4 / 1 ;
}
.date {
    flex-direction: column;
    align-self: end;
    grid-area:  3 / 1 / auto / auto  ;
}
img{
    grid-area: 6 / 1 ;
}
.block{   
    grid-areas: 5 / 2 ;
}
`
export const Main = styled.div`



`