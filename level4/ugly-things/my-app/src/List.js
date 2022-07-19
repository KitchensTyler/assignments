import React, {useContext} from 'react'
import { UglyContext } from './UglyContext'
import Thing from './Thing'

function List (){

    const {thingList, deleteThing, editUglyThing} = useContext(UglyContext)

    function updateUglyThing(id, newInput){
        editUglyThing(id, newInput)
    }
    
    function deleteUglyThing(id){
        deleteThing(id)
    }

    return(
        <div className='list-item'>
            {thingList.map(thing => (
                <Thing {...thing}
                key={thing.title}
                deleteUglyThing={deleteUglyThing}
                updateUglyThing={updateUglyThing}
                />
            ))}
        </div>
    )
}

export default List