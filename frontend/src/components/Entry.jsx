import Box from './Box.jsx';
import './Entry.css';

const Entry = ({entry}) => {
    return (
        <Box>
            <h3>{entry.ID}: {entry.problem}</h3>
            <p>{entry.solution}</p>
        </Box>
    )
}

export default Entry;