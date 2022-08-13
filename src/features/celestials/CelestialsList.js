//Maybe make a list.js for each filter? all, planets, moons, etc
//OR can just render here based on selector?
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import CelestialListItem from './CelestialListItem';
import { selectAllCelestials } from './celestialsSlice';
import '../../styles.css';


const CelestialsList = ({ setCelestialId, selector }) => {
    const celestials = selector;
    return (
        <ListGroup className='solar-button'>
            {celestials.map((celestial) => {
                // console.log(`${celestial.id}`)
                return (
                    <ListGroupItem
                        style={{ color: '#c1bcb4', backgroundColor: '#26292a' }}
                        tag='button'
                        action key={celestial.id}
                        id={celestial.id}
                        onClick={() => handleClick(celestial.id, setCelestialId)} >
                        <CelestialListItem celestial={celestial} />
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

const handleClick = (id, setCelestialId) => {
    setCelestialId(id);
}

export default CelestialsList;
