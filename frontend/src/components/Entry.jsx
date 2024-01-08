import Box from './Box.jsx';
import './Entry.css';

const Entry = ({entry}) => {
    return (
        <Box>
            <h3>{entry.ID}: {entry.problem}</h3>
            <p>{entry.solution}</p>
            <p>Novelty: {6-entry.rankings[0]}/5, Utility: {6-entry.rankings[1]}/5, Surprise: {6-entry.rankings[2]}/5</p>
        </Box>
    )
}

export default Entry;