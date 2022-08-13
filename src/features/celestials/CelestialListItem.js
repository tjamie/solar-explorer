import { capitalize } from "../../utils/capitalize";

const CelestialListItem = ({ celestial }) => {
    if (celestial) {
        const { name } = celestial;
        return (
            <>
                {capitalize(name)}
            </>
        )
    }
}

export default CelestialListItem;
