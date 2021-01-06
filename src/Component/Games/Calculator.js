import React,{ useState } from 'react'
import '../../Component_css/Games_CSS/Calculator.css'



function Calculator(){

    let [previousOperand, setPreviousOperand] = useState("")
    let [currentOperand, setCurrentOperand] = useState("")
    let [selectOperation, setSelectOperation] = useState(undefined)

    class CalculatorR {
        constructor(previousOperand, currentOperand){
            this.previousOperand = previousOperand
            this.currentOperand = currentOperand
        }
    
        clear(){
            this.setOperand()
            this.currentOperand = ""
            this.previousOperand = ""
            this.operation = undefined
            this.updateOperand()
        }

        delete(){
            this.setOperand()
            this.currentOperand = this.currentOperand.toString().slice(0,-1)
            this.updateOperand()
        }

        setOperand(){
            this.currentOperand = currentOperand
            this.previousOperand = previousOperand
            this.operation = selectOperation
        }

        updateOperand(){
           setCurrentOperand(this.currentOperand)
           setPreviousOperand(this.previousOperand)
           setSelectOperation(this.operation)
        }

        appendNumber(number){
            this.setOperand()
            if(number === "." && this.currentOperand.includes(".")) return
            this.currentOperand = this.currentOperand.toString() + number.toString()
            this.updateOperand()
        }

        chooseOperation(operation){
            this.setOperand()
            if(this.currentOperand === "") return
            if(this.previousOperand !== ""){
                this.compute()
            }
            this.operation = operation
            this.previousOperand = this.currentOperand 
            this.currentOperand = ""
            this.updateOperand()
        }

        compute(){
            this.setOperand()
            let computation 
            const prev = parseFloat(this.previousOperand)
            const current = parseFloat(this.currentOperand)
            if(isNaN(prev) || isNaN(current)) return
            switch(this.operation){
                case "+":
                    computation = prev + current
                    break
                case "-":
                    computation = prev - current
                    break
                case "*":
                    computation = prev * current
                    break
                case "÷":
                    computation = prev / current
                    break
                default:
                    return    
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = ""
            this.updateOperand()
        }


        updateDisplay(){
            setCurrentOperand(this.currentOperand)
            setPreviousOperand(this.previousOperand)
        }
    }

    let calculator = new CalculatorR(previousOperand, currentOperand)

    function allClear(evt) {
        calculator.clear()
        calculator.updateDisplay()
    }

    function numberButtons(evt){
        calculator.appendNumber(evt.target.innerText)
        calculator.updateDisplay()
    }
    
    function operationButtons(evt){
        calculator.chooseOperation(evt.target.innerText)
        calculator.updateDisplay()
    }

    function equalButton(evt) {
        calculator.compute()
        calculator.updateDisplay()
    }

    function deleteButton(evt){
        calculator.delete()
        calculator.updateDisplay()
    }


    return(
        <div>
            <div class="calculator-grid">
                <div class="output">
                    <div class="previous-operand">{previousOperand} {selectOperation}</div>
                    <div class="current-operand">{currentOperand}</div>
                </div>

                <button onClick={allClear} class="span-two">AC</button>
                <button onClick={deleteButton}>DEL</button>
                <button onClick={operationButtons}>÷</button>

                <button onClick={numberButtons}>1</button>
                <button onClick={numberButtons}>2</button>
                <button onClick={numberButtons}>3</button>
                <button onClick={operationButtons}>*</button>

                <button onClick={numberButtons}>4</button>
                <button onClick={numberButtons}>5</button>
                <button onClick={numberButtons}>6</button>
                <button onClick={operationButtons}>+</button>

                <button onClick={numberButtons}>7</button>
                <button onClick={numberButtons}>8</button>
                <button onClick={numberButtons}>9</button>
                <button onClick={operationButtons}>-</button>

                <button onClick={numberButtons}>.</button>
                <button onClick={numberButtons}>0</button>
                <button onClick={equalButton} class="span-two">=</button>
            </div>
        </div>
    )
}



export default Calculator