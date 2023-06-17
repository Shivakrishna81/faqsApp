// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {onClickPlusOrMinus: false}

  onClickChangeSign = () => {
    this.setState(prevState => ({
      onClickPlusOrMinus: !prevState.onClickPlusOrMinus,
    }))
  }

  plusContainer = () => {
    const {onClickPlusOrMinus} = this.state
    const {details} = this.props
    const {answerText} = details
    if (onClickPlusOrMinus) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  imgLink = () => {
    const {onClickPlusOrMinus} = this.state
    const imgLink = onClickPlusOrMinus
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altValue = onClickPlusOrMinus ? 'minus' : 'plus'

    return (
      <button type="button" onClick={this.onClickChangeSign}>
        <img src={imgLink} alt={altValue} />
      </button>
    )
  }

  render() {
    const {details} = this.props
    const {questionText} = details

    return (
      <li className="listItem">
        <div className="sign">
          <h1 className="head">{questionText}</h1>
          {this.imgLink()}
        </div>
        {this.plusContainer()}
      </li>
    )
  }
}
export default FaqItem
