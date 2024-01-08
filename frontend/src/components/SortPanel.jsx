import React from 'react'
import Box from './Box.jsx'
import Entry from './Entry.jsx'
import './SortPanel.css'

const SortPanel = ({isVisible, data}) =>{

    //console.log("data: " + data);
    let sorted = GetSortedEntries(data={data});
    //console.log("sorted: " +sorted);

    return isVisible ? (
        <Box>
            {sorted}
        </Box>
    ) : null
}

const GetSortedEntries = ({data}) => {

    //console.log("GetSortedEntries: " + data);

    let sorted = sortData(data);

    let comps = [];
    for(let i = 0; i < sorted.length; i++){

        let entry = sorted[i];
        let entryComp = Entry({entry});

        comps.push(entryComp);
    }

    return comps;
}

function sortData(data){
    
    /*
    return [
        {
            ID: 69,
            rankings: [1,2,3],
            problem: "hello",
            solution: "world"
        }
    ]
    */
    

    return data.sort((first, second) => (averageRankingOf(first) < averageRankingOf(second) ? -1 : 1));

    function averageRankingOf(entry){
        let sum = entry.rankings[0]+entry.rankings[1]+entry.rankings[2];
        return sum/3;
    }
}

export default SortPanel;