import React from 'react';
import withRefGroups from 'react-ref-groupie';

import './circles.scss';

class Circles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      num: 0,
      circlesConfig: true
    };
  }

  toggle = () => {
    const {
      refGroupsMethods: {
        circles: {
          moveUp,
          moveDown
        },
        squares: {
          moveLeft,
          moveRight
        }
      }
    } = this.props;

    const {
      toggled,
      circlesConfig
    } = this.state;

    if (toggled) {
      if (circlesConfig) {
        moveUp(this.increment);
      } else {
        moveLeft(this.increment);
      }
    } else {
      if (circlesConfig) {
        moveDown(this.increment);
      } else {
        moveRight(this.increment);
      }
    }

    if (circlesConfig) {
      this.setState(({ toggled }) => ({ toggled: !toggled }));
    }
  };

  increment = () => this.setState(({ num }) => ({ num: num + 1 }));

  setCirclesConfig = () => {
    this.setState({ circlesConfig: true });
  };

  setSquaresConfig = () => {
    this.setState({ circlesConfig: false });
  };

  render() {
    const {
      num,
      circlesConfig
    } = this.state;

    let refGroup;
    if (circlesConfig) {
      const {
        circles: {
          firstCircle,
          secondCircle,
          thirdCircle
        }
      } = this.props.getRefGroups({
        circles: `
          firstCircle
          secondCircle
          thirdCircle
        `
      });
  
      refGroup = {
        firstRef: firstCircle,
        secondRef: secondCircle,
        thirdRef: thirdCircle
      }
    } else {
      const {
        squares: {
          firstSquare,
          secondSquare,
          thirdSquare
        }
      } = this.props.getRefGroups({
        squares: `
          firstSquare
          secondSquare
          thirdSquare
        `
      });
  
      refGroup = {
        firstRef: firstSquare,
        secondRef: secondSquare,
        thirdRef: thirdSquare
      }
    }

    return (
      <React.Fragment>
        <div className={`config config--${circlesConfig ? 'circles' : 'squares'}`}>
          <div
            className="config__toggle"
            onClick={this.setCirclesConfig}
          >
            Use circles config
          </div>
          <div
            className="config__toggle"
            onClick={this.setSquaresConfig}
          >
            Use squares config
          </div>
        </div>
        <div
          onClick={this.toggle}
          className="circles"
        >
          <div
            ref={refGroup.firstRef}
            className="circles__first"
          />
          <div
            ref={refGroup.secondRef}
            className="circles__second"
          >
            {num}
          </div>
          <div
            ref={refGroup.thirdRef}
            className="circles__third"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRefGroups(Circles);
