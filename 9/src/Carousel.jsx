import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
import uniqueId from 'lodash/uniqueId';
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
    }

    handleNext = () => {
        this.setState((prevState) => ({
            activeIndex: (prevState.activeIndex + 1) % this.props.images.length,
        }));
    };

    handlePrev = () => {
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === 0 ? this.props.images.length - 1 : prevState.activeIndex - 1,
        }));
    };

    render() {
        const {images} = this.props;
        const {activeIndex} = this.state;

        return(
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={uniqueId()} className={cn('carousel-item', { active: index === activeIndex})}>
                        <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.handlePrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="next"
                    onClick={this.handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}
// END
