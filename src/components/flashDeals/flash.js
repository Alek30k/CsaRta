const { CSSTransitionGroup } = React.addons;

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFooter: 1,
    };

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <SimpleSlider settings={this.settings} />
      </div>
    );
  }
}

class SimpleSlider extends React.Component {
  shouldComponentUpdate(nextProps) {
    // TODO: add proper implementation that compares objects
    return false;
  }

  render() {
    console.log("slider render");
    return (
      <Slider {...this.props.settings}>
        <div>
          <div className="card">
            <h4>Card 1 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <h4>Card 2 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <h4>Card 3 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>

        <div>
          <div className="card">
            <h4>Card 4 Title</h4>
            <p>
              Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
            </p>
          </div>
        </div>
      </Slider>
    );
  }
}

ReactDOM.render(<Parent />, document.querySelector("#root"));
