import styled from "styled-components";

const Section = styled.section`
margin: 0 auto;
padding: 30px;
width: 400px;
height: 400px;
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 10px #c6cccced;
border-radius: 8px`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: inherit;
`

const Avatar = styled.img`
width: 150px;
border-radius:50%;
background-color: #F5F4FA;
margin-bottom: 12px;
`
const UserName = styled.p`
font-size: 28px;
font-weight: 700;
margin-bottom: 10px;
color: #635C5E;`

const Tag = styled.p`
font-size: 18px;
font-weight: 500;
margin-bottom: 10px;
color: #757575;`

const Location = styled.p`
font-size: 20px;
font-weight: 500;
margin-bottom: 20px;
color: #757575;`

const Stats = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
margin: auto;
padding: 0;
width: inherit;
background-color: #F5F4FA;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
list-style: none;`

const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
margin: 5px;
min-width: 50px;
padding: 5px 0;`

const Label = styled.span`
margin-right: 3px;
font-weight: 700;
font-size: 20px;
color: #524a4d8b;
margin-bottom: 5px;`

const Quantity = styled.span`
font-weight: 800;
font-size: 20px;
color: #524a4d;`

export { Section, Description, Avatar, UserName, Tag, Location, Stats, StatsItem, Label, Quantity};