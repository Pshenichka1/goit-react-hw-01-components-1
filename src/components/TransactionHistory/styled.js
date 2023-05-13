import styled from "styled-components";

const Table = styled.table`
margin: auto;
padding: 0 10px;
box-shadow: 0 0 10px #c6cccced;
width: 650px;
border: none; `



const Thead = styled.thead`
width: inherit;
height: 50px;
margin-bottom: 5px;
background-color: #3d85c6;
padding: 15px auto;`

const TheadTitle = styled.th`
font-weight: 600;
font-size: 18px;
margin-bottom: 5px;
color: #fbfbfb;`

const TdBodyTab = styled.td`
padding: 10px;
width: inherit;
font-weight: 700;
font-size: 15px;
color: #949494;
text-align: center;`

export { Table, Thead, TheadTitle, TdBodyTab };