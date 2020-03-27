String.fromCharCode(97+Math.floor(Math.random() * 26))
import React from 'react'


import axios from 'axios'


class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.mouseMove = this.mouseMove.bind(this)






  }


  componentDidMount(){



  }

  componentDidUpdate(){



  }

  mouseMove(e){

    //console.log(e)

    // this.setState({bass: `${e.screenX /100000} ${e.screenY /100000} `, scale: `${e.screenY /2}` })
  }




  render() {



    return (
      <div onMouseMove={this.mouseMove} className="body">

        <div className='board'>

        </div>

      </div>




    )
  }
}
export default Main
