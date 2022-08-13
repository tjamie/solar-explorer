import CelestialsList from "./CelestialsList";
import { Button, ButtonGroup } from 'reactstrap';
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCelestials } from "./celestialsSlice";
import { selectCelestialByType } from "./celestialsSlice";



const CelestialsSidebar = ({ setCelestialId }) => {
    const [celestialSelection, setCelestialSelection] = useState('all');

    const handleClick = (event) => {
        // console.log(event.target.id);
        setCelestialSelection(event.target.id);
    }

    return (
        // <div height='100vh' style={{ borderColor: 'red', borderWidth: '1px', borderStyle: 'solid' }}>
        <div>
            <p>current filter: {celestialSelection}</p>
            <ButtonGroup className="d-flex" >
                <Button color="secondary" id='all' onClick={handleClick}>A</Button>
                <Button color="secondary" id='planet' onClick={handleClick}>P</Button>
                <Button color="secondary" id='dwarf planet' onClick={handleClick}>DP</Button>
                <Button color="secondary" id='moon' onClick={handleClick}>M</Button>
            </ButtonGroup>
            <div className="flex-column h-100">
                <CelestialsList
                    setCelestialId={setCelestialId}
                    selector={useSelector(selectCelestialByType(celestialSelection))}
                />
            </div>
        </div>
    )


}



export default CelestialsSidebar;