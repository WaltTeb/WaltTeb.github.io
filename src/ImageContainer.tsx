

function ImageContainer(props:any){
    return (
        <div className='labeled_image'>
                <img src={props.source} alt={props.altText}></img>
                <div className='image_title'>{props.title}</div>
                
              </div>
    )
}
export default ImageContainer;