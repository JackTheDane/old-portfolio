import React from 'react';
import styles from './Carousel.module.scss';
import Swiper from 'react-id-swiper';

export interface CarouselProps {
  images: string[];
  className?: string;
}

class Carousel extends React.Component<CarouselProps> {

  public render() {

    const {
      className,
      images
    } = this.props;

    const params = {
      containerClass: `swiper-container ${styles.carousel} ${className} card my-4`,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletActiveClass: styles.slideIndexButtonActive,
        renderBullet: (idx: number, clsName: string) => `
          <button
            class="${styles.slideIndexButton} ${clsName ? clsName : ''}"}
          </button>
        `
      }
    }

    return (
      <Swiper {...params}>
        {
          images.map(
            (image, i: number) => (
              <div
                key={'CarImg_' + i}
                className={styles['carousel__image']}
                style={{ backgroundImage: `url(${image})` }}></div>
            )
          )
        }
      </Swiper>

      /* <button onClick={() => { this.changeSlide(-1) }} className={`btn ${styles['carousel__navigation-button']} ${styles['carousel__navigation-button--left']}`}>
        <i className="icon icon-arrow-left"></i>
      </button>
      <button onClick={() => { this.changeSlide(1) }} className={`btn ${styles['carousel__navigation-button']} ${styles['carousel__navigation-button--right']}`}>
        <i className="icon icon-arrow-right"></i>
      </button>

      <div className={styles.slideIndexButtonWrapper}>
        {
          images.map(
            (image: string, idx: number) => <button
              key={`btn-${idx}`}
              className={`${styles.slideIndexButton} ${currentIndex == idx ? styles.slideIndexButtonActive : ''}`}
              onClick={() => this.setCurrentIndex(idx)}>
            </button>
          )
        }
      </div> */
    );
  }

  public componentWillReceiveProps(nextProps: CarouselProps) {
    this.setState({
      currentIndex: 0
    })
  }

  // ---- Carousel interactions ---- //


}

export default Carousel;
