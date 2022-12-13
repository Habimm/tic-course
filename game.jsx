class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div>
          <div>
            <button className='square'>X</button>
            <button className='square'>X</button>
            <button className='square'>X</button>
          </div>

          <div>
            <button className='square'>X</button>
            <button className='square'>X</button>
            <button className='square'>X</button>
          </div>

          <div>
            <button className='square'>X</button>
            <button className='square'>X</button>
            <button className='square'>X</button>
          </div>
        </div>
        <div className='game-info'>
          <div>Next player: O</div>
          <ol><button>Reset game</button></ol>
        </div>
      </div>
    )
  }
}

var domRoot = ReactDOM.createRoot(document.getElementById('game'))
domRoot.render(<Game />)
