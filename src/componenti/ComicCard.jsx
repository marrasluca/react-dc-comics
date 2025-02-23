const ComicCard  = (props) => {
    const {comic} = props;
    const {title, thumb} = comic;

    return (
        <div className="card">
            <img src={ thumb } alt={ title }/>
            <h3>{ title }</h3>
        </div>
    );
}

export default ComicCard;