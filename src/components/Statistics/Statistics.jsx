import PropTypes from 'prop-types';
import { Section, Title, StatList, StatItem, Label, Percentage } from '../Statistics/styled'

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export const Statistics = ({title, stats}) => {
    return (<Section>
        {title && <Title>{title}</Title>}
        <StatList>
            {stats.map(({ id, label, percentage }) => {
                return (
                    <StatItem key={id} style={{backgroundColor: createColor()}}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatItem>
    
                )
            })}
   
  </StatList>  
</Section>
)}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
       PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
       }),
    )
    
}