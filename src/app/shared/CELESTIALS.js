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
        diameter: "1.4E6", //km
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
        diameter: "4.88E3",
        gravity: 3.7,
        meanTemp: 167,
        surfPressure: "1.0E-9",
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
            unit: "au",
            val: 0.7,
            parent: "sun"
        },
        mass: "4.87E24",
        diameter: "1.21E4",
        gravity: 8.87,
        meanTemp: "placeholder (deg C)",
        surfPressure: "9.10E3",
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
        mass: "5.97E24",
        diameter: "1.27E4",
        gravity: 9.81,
        meanTemp: "placeholder (deg C)",
        surfPressure: "1.00E2",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2393,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 11,
        parentId: 3,
        name: "moon",
        image: "placeholder",
        type: "moon",
        subtype: "",
        distanceToParent: {
            unit: "km",
            val: 384000,
            parent: "earth"
        },
        mass: "7.35E22",
        diameter: "3.47E3",
        gravity: 1.62,
        meanTemp: "placeholder (deg C)",
        surfPressure: "3E-17",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2366,
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
            unit: "au",
            val: 1.5,
            parent: "sun"
        },
        mass: "6.39E23",
        diameter: "6.78E3",
        gravity: 3.72,
        meanTemp: "placeholder (deg C)",
        surfPressure: "6.10E-1",
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
            unit: "au",
            val: 5.2,
            parent: "sun"
        },
        mass: "1.90E27",
        diameter: "1.40E5",
        gravity: 24.8,
        meanTemp: "placeholder (deg C)",
        surfPressure: "4.48E9",
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
            unit: "au",
            val: 9.5,
            parent: "sun"
        },
        mass: "5.68E26",
        diameter: "1.16E5",
        gravity: 10.4,
        meanTemp: "placeholder (deg C)",
        surfPressure: "0.00E0",
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
            unit: "au",
            val: 19.8,
            parent: "sun"
        },
        mass: "8.68E25",
        diameter: "5.07E4",
        gravity: 8.87,
        meanTemp: "placeholder (deg C)",
        surfPressure: "8.00E8",
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
            unit: "au",
            val: 30,
            parent: "sun"
        },
        mass: "1.02E26",
        diameter: "4.92E4",
        gravity: 11.2,
        meanTemp: "placeholder (deg C)",
        surfPressure: "7.00E8",
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
            unit: "au",
            val: 39.5,
            parent: "sun"
        },
        mass: "1.31E22",
        diameter: "2.38E3",
        gravity: 0.62,
        meanTemp: "placeholder (deg C)",
        surfPressure: "1.00E-3",
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
            unit: "km",
            val: 19640,
            parent: "pluto"
        },
        mass: "1.59E21",
        diameter: "1.21E3",
        gravity: 0.288,
        meanTemp: "placeholder (deg C)",
        surfPressure: "0.00E0",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2399,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
    {
        id: 12,
        parentId: 0,
        name: "ceres",
        image: "placeholder",
        type: "dwarf planet",
        subtype: "",
        distanceToParent: {
            unit: "au",
            val: 2.8,
            parent: "sun"
        },
        mass: "9.1E20",
        diameter: "9.46E2",
        gravity: 0.27,
        meanTemp: "placeholder (deg C)",
        surfPressure: "0.00E0",
        rotPeriod: "placeholder (sidereal) (earth days)",
        orbitPeriod: "placeholder (relative to parent)",
        eccentricity: "placeholder",
        modelId: 2400,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non varius sapien. Proin lectus mauris, convallis ac faucibus eu, congue nec neque. Quisque gravida sapien nibh, eu ultricies risus hendrerit hendrerit. Cras convallis lacus id enim blandit mattis. Curabitur et lobortis lacus. Nam ut suscipit erat, et aliquet neque. Phasellus nibh tortor, molestie eget porttitor ac, bibendum vitae turpis. "
    },
];