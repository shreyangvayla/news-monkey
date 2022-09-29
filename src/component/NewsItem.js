import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
    return (
        <div className='my-3 mx-0'>
            <div className="card">
                <div style={{
                    display: 'flex', justifyContent: 'flex-end',
                    position: 'absolute', right: '0'
                }}>
                    <span className="badge rounded-pill badge-danger">{source}</span>
                </div>
                <img className="card-img-top" src={!imageUrl ? "https://staticg.sportskeeda.com/editor/2022/06/3d758-16549021537672-1920.jpg" : imageUrl} alt="myimage" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} target={"_blank"} rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div >
    )
}
export default NewsItem