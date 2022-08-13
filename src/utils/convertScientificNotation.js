export const convertScientificNotation = (input) => {
    const [magnitude, exponent] = input.split('E');
    return (
        <>
            {magnitude} x 10<sup>{exponent}</sup>
        </>

    )
}