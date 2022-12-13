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
    if (determineWinner(this.state.board) || this.state.board[i] !== '-') {
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

    var status
    var winner = determineWinner(this.state.board)
    if (winner === null) {
      status = 'Next player: ' + (this.state.isXTurn ? 'X' : 'O')
    }
    else if (winner !== '-') {
      status = 'Winner: ' + winner
    }
    else {
      status = 'Undecided!'
    }

    return (
      <div className='game'>
        <Board board={this.state.board} onClick={(i) => this.makeMove(i)}/>
        <div className='game-info'>
          <div>{status}</div>
          <ol><button onClick={() => this.reset()}>Reset game</button></ol>
        </div>
      </div>
    )
  }
}

var domRoot = ReactDOM.createRoot(document.getElementById('game'))
domRoot.render(<Game />)

function determineWinner(board) {
  var sequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (var i = 0; i < sequences.length; i++) {
    var [a, b, c] = sequences[i]
    if (board[a] !== '-' && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  for (var i = 0; i < 9; i++) {
    if (board[i] === '-') {
      return null
    }
  }

  return '-'
}
