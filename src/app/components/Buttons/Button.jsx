function Button({ title }) {
    const buttonStyle = {
        borderRadius: '35px',
    }

    return (
        <button
            className="border border-solid border-primary-color px-5 py-2.5 text-primary-color text-base"
            style={buttonStyle}
        >
                { title }
        </button>
    )
}

export default Button