
import React from 'react'


import axios from 'axios'

let arr = []
class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: '',
      size: 10

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.mouseMove = this.mouseMove.bind(this)






  }


  componentDidMount(){
    this.create()
    console.log(arr)


  }

  componentDidUpdate(){



  }

  mouseMove(e){

    //console.log(e)

    // this.setState({bass: `${e.screenX /100000} ${e.screenY /100000} `, scale: `${e.screenY /2}` })
  }

  create(){
    arr = []
      for(let i=0; i<this.state.size;i++){
        arr.push([])
       for(let j=0; j<this.state.size;j++){
         arr[i].push(String.fromCharCode(97+Math.floor(Math.random() * 26)))
       }
      }
      this.setState({array: arr })
  }


  render() {


      console.log(this.state)
    return (

      <div onMouseMove={this.mouseMove} className="body">

        <div className='board'>
        {arr.map(x=>{
          return(
          x.map(y=>{
            return(
              <div key={new Date().getTime()*Math.random()} className='letter'>{y}</div>
            )
          }))
        })}
        </div>

      </div>




    )
  }
}
export default Main
