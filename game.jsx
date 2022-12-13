class Board extends React.Component {

  renderSquare(i) {
    var text = this.props.board[i]
    if (text === '-') {
      text = null
    }
    return (
      <button className='square' onClick={() => this.props.onClick(i)}>
        {text}
      </button>
    )
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      board: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
      isXTurn: true,
    }
  }

  makeMove(i) {
    if (this.state.board[i] !== '-') {
      return
    }
    this.state.board[i] = this.state.isXTurn ? 'X' : 'O'
    this.state.isXTurn = !this.state.isXTurn
    this.setState({})
  }

  reset() {
    this.setState({
      board: ['-', '-', '-', '-', '-', '-', '-', '-', '-'],
      isXTurn: true,
    })
  }

  render() {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={(i) => this.makeMove(i)}/>
        <div className='game-info'>
          <div>Next player: O</div>
          <ol><button onClick={() => this.reset()}>Reset game</button></ol>
        </div>
      </div>
    )
  }
}

var domRoot = ReactDOM.createRoot(document.getElementById('game'))
domRoot.render(<Game />)
