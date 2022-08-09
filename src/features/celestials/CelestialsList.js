//Maybe make a list.js for each filter? all, planets, moons, etc
//OR can just render here based on selector?
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CelestialListItem from './CelestialListItem';
import { selectAllCelestials } from './celestialsSlice';



const CelestialsList = ({ setCelestialId, selector }) => {
    // const celestials = useSelector(selectAllCelestials);
    const celestials = selector;
    return (
        <ListGroup>
            {celestials.map((celestial) => {
                // console.log(`${celestial.id}`)
                return (
                    <ListGroupItem tag='button' action key={celestial.id} id={celestial.id} onClick={() => handleClick(celestial.id, setCelestialId)} >
                        <CelestialListItem celestial={celestial} />
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

const handleClick = (id, setCelestialId) => {
    // console.log(id);
    setCelestialId(id);
}

export default CelestialsList;