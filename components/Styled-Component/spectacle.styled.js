import styled from 'styled-components';
export const ShowStyle = styled.div`
width: 960px;
padding: 4rem;
margin: auto;
display: grid;
grid-gap: 20px;
.title{
    grid-area: 1 / 1 /  3 / 6;
}
.adress{  
    flex-direction: column;
    align-self: end;
    grid-area: 3 / 1 /  4 / 4;
}
img{
    grid-area: 4 / 1 /  4 / 4;
}
.block{   
    grid-row-start: 4;
    grid-column-start: 4; 
    grid-column-end: 7;
}
`
export const Main = styled.div`

width: 960px;
padding: 8rem;
margin: auto;
display: grid;
grid-gap: 20px;

`