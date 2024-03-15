import { useState } from 'react'
import './Slider.scss'

const Slider = ({ images }) => {
    const [imgIndex, setImageIndex] = useState(null)
    const changeSlide = (direction) => {
        if (direction === 'left') {
            if (imgIndex === 0) {
                setImageIndex(images.length - 1)
            }
            else {
                setImageIndex(imgIndex - 1)
            }
        } else {
            if (imgIndex === images.length - 1) {
                setImageIndex(0)
            }
            else {
                setImageIndex(imgIndex + 1)
            }
        }
    }
    return (
        <div className='slider'>
            {imgIndex !== null && <div className="fullSlider">
                <div className="arrow" onClick={() => changeSlide('left')}>
                    <img src="/arrow.png" alt="" />
                </div>
                <div className="imgContainer">
                    <img src={images[imgIndex]} alt="" />
                </div>
                <div className="arrow" onClick={() => changeSlide('right')}>
                    <img src="/arrow.png" alt="" className='right' />
                </div>
                <div className="close" onClick={() => setImageIndex(null)}>
                    X
                </div>
            </div>

            }
            <div className="bigImage">
                <img onClick={() => setImageIndex(0)} src={images[0]} alt="" />
            </div>
            <div className="smallImage">
                {
                    images.slice(1).map((image, index) => (<img key={index} src={image} onClick={() => setImageIndex(index + 1)}></img>))
                }
            </div>
        </div>
    )
}

export default Slider