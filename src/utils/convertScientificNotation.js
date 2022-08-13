export const convertScientificNotation = (input) => {
    const arr = String(input).split('E');

    if (arr.length > 1) {
        return (
            <>{arr[0]} x 10<sup>{arr[1]}</sup></>
        );
    }
    return (
        <>{arr[0]}</>
    );
}