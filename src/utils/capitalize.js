export const capitalize = (input) => {
    const words = input.split(/-| /);

    const newWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    return (
        <>
            {newWords.join(' ')}
        </>

    )
}