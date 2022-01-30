import styled from 'styled-components';
export const CalendarStyle = styled.div`
    max-width: 930px;
    margin: 0 auto;
    li {
        padding-top: 10px;
        list-style-type: none;
        padding: 20px;
}

.spectacle {
    grid-column-start: 1;
    font-size: larger;
    font-weight: bold;
}

@media (min-width: 700px) {

list-style-type: none;
padding: 20;
padding: 10px 200px;
display: grid;
grid-gap: 20px;
grid-template-columns: 1fr 1fr 1fr 1fr;

/* white-space: 430px; */
align-items: center;

.titre {
    grid-column-start: 1;
    grid-column-end: -1;
}

.spectacle {
    grid-area: 2 / 2 / 4 / 4;
    font-size: larger;
    font-weight: bold;
    li:hover {
   
    background-color: yellow;
}
}

li {
    list-style-type: none;
    padding: 10px;
    grid-area: 2 / 2 / 4 / 4 ;
}

.info{
    font-style: italic;
    grid-area: ;
}
  

`


