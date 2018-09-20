import React, { Component, Fragment } from "react";
import shuffle from "lodash/shuffle";
import cx from "classnames";

class Grid extends Component {
  state = {
    cards: [],
    clicked: [],
    checkCards: []
  }



  componentDidMount () {
    this.start();
  }

  start = () => {
    this.setState({ cards: shuffle([...this.props.cards, ...this.props.cards]) });
  }

  restart = () => {
    this.setState({
      cards: [],
      clicked: [],
      checkCards: []
    }, this.start);
  }

  showCard = (i) => {
    const { clicked } = this.state;

    if (clicked.length > 1 || clicked[0] === i)  {
      return;
    }

    const newClicked = [...clicked, i]; /* crée un tableau et prend tout les élements de clicked + index  */
    this.setState({
      clicked: newClicked
    });

    if (newClicked.length > 1) {
      if (this.state.cards[newClicked[0]] === this.state.cards[newClicked[1]]) {
        this.setState(({ checkCards }) => ({
          checkCards: [...checkCards, ...newClicked],
          clicked: [],
        }));
      }
      setTimeout(() => this.setState({ clicked: [] }) , 800);
    }
  }


  render () {
    const { cards, clicked, checkCards } = this.state;

    return (
      <Fragment>
      {
        checkCards.length === cards.length &&
        <Fragment>
          <p id="message">
            Bien joué !
          </p>
          <p id="rejouer">
            <button id="rej" onClick={this.restart}>Rejouer</button>
          </p>
        </Fragment>

      }

      <ul>
        {
          cards.map(({ faces, current }, i) => (
            <li key={i} onClick={() => this.showCard(i)} className={cx("card", { "flipped": clicked.indexOf(i) >= 0 || checkCards.indexOf(i) >= 0 })}>
                <img className="dos" src={faces[0]} />
                <img className="face" src={faces[1]} />

            </li>
          ))
        }
      </ul>
      </Fragment>
    )
  }
}

export default Grid;
