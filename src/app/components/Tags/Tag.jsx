function Tag({ title, type }) {
    let tagStyle

    if (type === 'category') {
        tagStyle = {
            border: '1px solid #929292',
            borderRadius: '35px',
            color: '#929292',
            padding: '5px 10px',
            marginBottom: '10px',
        }
    } else if (type === 'save') {
        tagStyle = {
            color: 'white',
            borderRadius: '35px',
            padding: '6px 8px',
            backgroundColor: '#FF1B1B',
        }
    }

    return (
        <span className="text-xs" style={tagStyle}>
            { title }
        </span>
    )
}

export default Tag