import React from 'react';
import styles from './Carousel.module.scss';

export interface CarouselProps {
  images: string[];
  className?: string;
}
 
export interface CarouselState {
  currentIndex: number;
}
 
class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  render() { 
    return (
      <div className={`${styles.carousel} ${this.props.className} card my-4`}>

        {this.getImages()}

        <button onClick={ () => {this.changeSlide(-1)}} className={`btn ${styles['carousel__navigation-button']} ${styles['carousel__navigation-button--left']}`}>
          <i className="icon icon-arrow-left"></i>
        </button>
        <button onClick={ () => {this.changeSlide(1)}} className={`btn ${styles['carousel__navigation-button']} ${styles['carousel__navigation-button--right']}`}>
          <i className="icon icon-arrow-right"></i>
        </button>

      </div>
    );
  }

  componentWillReceiveProps(nextProps: CarouselProps) {
    this.setState({
      currentIndex: 0
    })
  }

  private changeSlide(value: number) {
    const oldValue = this.state.currentIndex;
    const newValue = oldValue + (value);
    const imageArrayLength = this.props.images.length;
    const lastImageIndex = imageArrayLength - 1;

    let valueToUse: number;

    if ( newValue >= 0 && newValue <= lastImageIndex ) {
      valueToUse = newValue;
    } else if ( newValue < 0 ) {
      valueToUse = imageArrayLength - 1
    } else {
      valueToUse = 0;
    }

    this.setState({
      currentIndex: valueToUse
    });
  }

  private getImages() {
    return this.props.images.map( (image, i: number) => <div 
    key={'CarImg_'+i}
    className={`${styles['carousel__image']} ${this.state.currentIndex === i ? styles['carousel__image--active'] : ''}`} 
    style={{backgroundImage: `url(${ image })`}}></div> )
  }
}
 
export default Carousel;