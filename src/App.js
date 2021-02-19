import React, { Component } from 'react';
import request from 'superagent'


export default class App extends Component {
  state = {
    skateboards: [],
  }


  componentDidMount = async () => {
    await this.fetchSkateBoards();
  }


  fetchSkateBoards = async () => {
    const data = await request.get('https://express-dummy-data.herokuapp.com/skateboards')

    this.setState({
      skateboards: data.body.result,
    })
  }


render() {

  const skateboards = this.state.skateboards;
  const boardRender = skateboards.map(board => {return <p>{board.name} {board.image}</p>})

  console.log(skateboards)

  return (
    <div>
      {boardRender}
    </div>
  );
}
}


