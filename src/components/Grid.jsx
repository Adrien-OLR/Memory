import React, { Component, Fragment } from "react";
import shuffle from "lodash/shuffle";

class Grid extends Component {
  state = {
    cards: [],
    clicked: [],
    checkCards: []
  }
  componentDidMount () {
    this.setState({ cards: shuffle([...this.props.cards, ...this.props.cards]) });
  }

  showCard = (i) => {
    const { clicked } = this.state;

    if (clicked.length > 1) {
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
        <p id="message">
          Bien joué
        </p>
      }
      <ul>
        {
          cards.map(({ faces, current }, i) => (
            <li key={i}>
              <img
                className="ygoface"
                src={faces[(checkCards.indexOf(i) >= 0 || clicked.indexOf(i) >= 0) ? 1 : 0]}
                onClick={() => this.showCard(i)}
                alt="" />
            </li>
          ))
        }
      </ul>
      </Fragment>
    )
  }
}

export default Grid;
