import Box from './Box.jsx';
import './Entry.css';

const Entry = ({entry}) => {
    return (
        <Box>
            <h3>{entry.ID}: {entry.problem}</h3>
            <p>{entry.solution}</p>
            <p>Novelty: {entry.rankings[0]-5}/5, Utility: {entry.rankings[1]-5}/5, Surprise: {entry.rankings[2]-5}/5</p>
        </Box>
    )
}

export default Entry;