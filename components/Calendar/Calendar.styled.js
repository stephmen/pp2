import styled from 'styled-components';
export const CalendarStyle = styled.div`
// <<<<<<< HEAD

.container {
  margin: 1rem 1rem;
  background-color: #eff971;
  
}

header, .row, .col {
  border: 0px solid;
  border-top: 0;
  display: flex;
  justify-content: center
   
}
header {
  margin-top: 1rem;
  border: 2px solid
}
.col {
  flex: 1
}
.row {
  border-bottom: 0px solid;
  padding-top: 2rem;
  

}   
.row:hover, .row:hover > * {
  cursor: pointer;
  background-color: #f7f7f7;
  }

@media (max-width: 768px) {
    .container {
      margin: 1rem 0rem
      padding: 4rem;
    }

    header {
      margin-top: 0.5rem;
      border: 1px solid;
    }
    
    .col:nth-child(4) {
      display: none;
    }

    .col:nth-child(2) {
    padding-left: 1rem;
  }
    .col:nth-child(3) {
    padding-left: 1rem;
  }
  .row {
  cursor: pointer;
  padding-top: 2rem ;
  }

  .row:hover {
  background-color: #f7f7f7;
  }

.row:hover, .row:hover > * {
  cursor: pointer;
  background-color: #f7f7f7;
  }
}


`;












  


