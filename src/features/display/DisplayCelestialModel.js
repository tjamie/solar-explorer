import { selectCelestialById } from '../celestials/celestialsSlice';
import { useSelector } from 'react-redux';
import '../../styles.css';


const DisplayCelestialModel = ({ celestialId }) => {
    const celestial = useSelector(selectCelestialById(celestialId));
    const path = `https://solarsystem.nasa.gov/gltf_embed/${celestial.modelId}`;

    return (
        <>
            <iframe
                src={path}
                width='100%'
                height='600px'
                frameBorder='0'
            />
            <p className='solar-credits'>Model Credit: NASA</p>
        </>

    );

}

export default DisplayCelestialModel;