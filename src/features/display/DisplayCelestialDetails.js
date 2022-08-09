import { useSelector } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { selectCelestialById } from '../celestials/celestialsSlice';



const DisplayCelestialDetails = ({ celestialId }) => {
    const celestial = useSelector(selectCelestialById(celestialId));
    // const subtitle = () => {
    //     return celestial.subtype ? celestial.subtype : celestial.type;
    // }

    return (
        <Card>
            <CardBody>
                <CardTitle>{celestial.name}</CardTitle>
                {celestial.subtype
                    ? <CardSubtitle>{celestial.subtype}</CardSubtitle>
                    : <CardSubtitle>{celestial.type}</CardSubtitle>
                }
                <CardText>
                    Mass: {celestial.mass} <br />
                    Diameter: {celestial.diameter}<br />
                    Gravity: {celestial.gravity} m/s<sup>2</sup>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCelestialDetails;

// {
//     id: 0,
//     parentId: null,
//     name: "sol",
//     image: "placeholder",
//     type: "placeholder (star/planet/dwarf planet/asteroid/moon/etc)",
//     subtype: "placeholder (spectral class/terrestrial/gas/etc)",
//     distanceToParent: ["units", "val"]
//     mass: "placeholder",
//     diameter: "placeholder",
//     gravity: "placeholder",
//     meanTemp: "placeholder (deg C)",
//     surfPressure: "placeholder (kPa)",
//     rotPeriod: "placeholder (sidereal) (earth days)",
//     orbitPeriod: "placeholder (relative to parent)",
//     eccentricity: "placeholder",
//     description: "placeholder"
// }