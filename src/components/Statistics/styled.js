import styled from "styled-components";

const Section = styled.section`
width: inherit;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 10px #c6cccced;
margin-top: 30px;`

const Title = styled.h2`
font-weight: 700;
font-size: 24px;
text-transform: uppercase;
margin-bottom: 15px;
color: #635C5E;`

const StatList = styled.ul`
width: 370px;
display: flex;
justify-content: space-around;
padding: 0;
list-style: none;`

const StatItem = styled.li`
display: flex;
flex-direction: column;
padding: 10px;
width: inherit;
align-items: center;`

const Label = styled.span`
font-weight: 700;
font-size: 20px;
color: #524a4d8b;
margin-bottom: 25px;`

const Percentage = styled.span`
font-weight: 800;
font-size: 20px;
color: #524a4d;`

export { Section, Title, StatList, StatItem, Label, Percentage };