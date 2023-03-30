import React, {useState} from 'react'
import Header from '../components/Header'
import '../styles/GamePage.css'
import data from '../data.js'

function GamePage() {

    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [question, setQuestion] = useState(0)
    

    const handleClick = (e) => {
        if(e.target.value === data[currentQuestion].correct){
            setCorrect((prev) => prev + 1)
        }
        else{
            setWrong((prev) => prev + 1)
        }
        setCurrentQuestion((prev) => prev + 1)
    }

    return (
        <div>
            <Header />
            {
                currentQuestion < 160? (
                    <>
                        <div className='points'>
                            <div>
                                {data[currentQuestion].correct}
                                <h4>{currentQuestion + 1}/{data.length}</h4>
                            </div>
                            <div className='correct-wrong-container'>
                                <p>Correct: <span>{correct}</span></p>
                                <p>Wrong: <span>{wrong}</span></p>
                            </div>
                        </div>
                        <div className='main-container'>
                            <div className='img-container'>
                                <img src={data[currentQuestion].flag} alt='flag of a country'/>
                            </div>
                            <div className='row-option'>
                                <button className='option' value={data[currentQuestion].options[0]} onClick={(e) => handleClick(e)}><span className='option-letter'>A:</span>{data[currentQuestion].options[0]}</button>
                                <button className='option' value={data[currentQuestion].options[1]} onClick={(e) => handleClick(e)}><span className='option-letter'>B:</span> {data[currentQuestion].options[1]}</button>
                            </div>
                            <div className='row-option'>
                                <button className='option' value={data[currentQuestion].options[2]} onClick={(e) => handleClick(e)}><span className='option-letter'>C:</span> {data[currentQuestion].options[2]}</button>
                                <button className='option' value={data[currentQuestion].options[3]} onClick={(e) => handleClick(e)}><span className='option-letter'>D:</span>{data[currentQuestion].options[3]}</button>
                            </div>
                        </div>
                    </>
                ): 
                <div className='final-container'>
                    <div className='final-msg'>
                        <p className='correct-answer'>Correct Answers: {correct}</p>
                        <p className='wrong-answer'>Wrong Answers: {wrong}</p>
                    </div>
                    <div className='final-msg'>
                        {correct > 80? <h1 className='msg'>Wow!! You must be Willy Fogg's cousin</h1>:<h1 className='msg'>Ough!!! Better stay at home</h1>}
                    </div>
                </div>
            }
        </div>
    )
}

export default GamePage
