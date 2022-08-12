//try to build login screens? useState for username and passwords

// import images etc here

// {
//     id: 0,
//     parentId: null,
//     name: "sol",
//     image: "placeholder",
//     type: "placeholder (star/planet/dwarf planet/asteroid/moon/etc)",
//     subtype: "placeholder (spectral class/terrestrial/gas/etc)",
//     distanceToParent: ["units", "val", "parentName"],
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

export const CELESTIALS = [
    {
        id: 0,
        parentId: null, //effectively Sagittarius A*
        name: "sun",
        image: "placeholder",
        type: "star",
        subtype: "g-type main-sequence star",
        distanceToParent: {
            unit: "ly",
            val: "2.6E4",
            parent: "sagittarius a*"
        },
        mass: "2E30", //2*10^30 kg
        diameter: 1400000, //km
        gravity: 274.0,
        meanTemp: 5500, //photosphere
        surfPressure: "8.68E-2", //kPa
        rotPeriod: 27, //at equator
        orbitPeriod: "230 million years",
        eccentricity: null,
        modelId: 2352,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 1,
        parentId: 0,
        name: "mercury",
        image: "placeholder",
        type: "planet",
        subtype: "terrestrial planet",
        distanceToParent: {
            unit: "au",
            val: 0.4,
            parent: "sun"
        },
        mass: "3.3E23",
        diameter: 4880,
        gravity: 3.7,
        meanTemp: 167,
        surfPressure: "placeholder (kPa)",
        rotPeriod: 58.65,
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2369,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 2,
        parentId: 0,
        name: "venus",
        image: "placeholder",
        type: "planet",
        subtype: "terrestrial planet",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2342, //atmo model:2343
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 3,
        parentId: 0,
        name: "earth",
        image: "placeholder",
        type: "planet",
        subtype: "terrestrial planet",
        distanceToParent: {
            unit: "au",
            val: 1,
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: 9.81,
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2393,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 4,
        parentId: 0,
        name: "mars",
        image: "placeholder",
        type: "planet",
        subtype: "terrestrial planet",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2372,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 5,
        parentId: 0,
        name: "jupiter",
        image: "placeholder",
        type: "planet",
        subtype: "gas giant",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2375,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 6,
        parentId: 0,
        name: "saturn",
        image: "placeholder",
        type: "planet",
        subtype: "gas giant",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2355,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 7,
        parentId: 0,
        name: "uranus",
        image: "placeholder",
        type: "planet",
        subtype: "gas giant",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2344,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 8,
        parentId: null,
        name: "neptune",
        image: "placeholder",
        type: "planet",
        subtype: "gas giant",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2364,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 9,
        parentId: 0,
        name: "pluto",
        image: "placeholder",
        type: "dwarf planet",
        subtype: "",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "sun"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2357,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 10,
        parentId: 9,
        name: "charon",
        image: "placeholder",
        type: "moon",
        subtype: "",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "pluto"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2399,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 11,
        parentId: 3,
        name: "moon",
        image: "placeholder",
        type: "moon",
        subtype: "placeholder (spectral class/terrestrial/gas/etc)",
        distanceToParent: {
            unit: "unit",
            val: "distance",
            parent: "earth"
        },
        mass: "placeholder",
        diameter: "placeholder",
        gravity: "placeholder",
        meanTemp: "placeholder (deg C)",
        surfPressure: "placeholder (kPa)",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2366,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    }
];