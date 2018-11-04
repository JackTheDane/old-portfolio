import React from 'react';
import styles from './Carousel.module.scss';

export interface CarouselProps {
  images: string[];
}
 
export interface CarouselState {
  currentIndex: number;
}
 
class Carousel extends React.Component<CarouselProps, CarouselState> {
  state = { currentIndex : 0 }
  render() { 
    return (
      <div className={styles.carousel} style={{backgroundImage: `url(${this.props.images[ this.state.currentIndex ]})`}}>

        <button onClick={ () => {this.changeSlide(-1)}} className={`btn ${styles['carousel__navigation-button']} ${styles['carousel__navigation-button--left']}`}>
          <i className="icon icon-arrow-left"></i>
        </button>
        <button onClick={ () => {this.changeSlide(1)}} className={`btn ${styles['carousel__navigation-button']} ${styles['carousel__navigation-button--right']}`}>
          <i className="icon icon-arrow-right"></i>
        </button>

      </div>
    );
  }

  private changeSlide(value: number) {
    const newValue = this.state.currentIndex + (value);
    const imageArrayLength = this.props.images.length;
    const lastImageIndex = imageArrayLength - 1;

    if ( newValue >= 0 && newValue <= lastImageIndex ) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + (value)
      }))

    } else if ( newValue < 0 ) {
      this.setState({
        currentIndex: imageArrayLength - 1
      })

    } else if ( newValue > lastImageIndex ) {
      this.setState({
        currentIndex: 0
      })
    }
  }
}
 
export default Carousel;