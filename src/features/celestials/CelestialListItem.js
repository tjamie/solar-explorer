const CelestialListItem = ({ celestial }) => {
    // to appear in sidebar
    if (celestial) {
        const { name } = celestial;
        return (
            <>
                {name}
            </>
        )
    }
}

export default CelestialListItem;
