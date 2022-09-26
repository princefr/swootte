import { ChevronLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { useState } from "react";




const Button = ({number, click}) => {
    return (
        <button onClick={() => click(number)} className="flex h-6 w-6 items-center justify-center rounded-full p-6 text-black shadow-lg">
            <span>{number}</span>
        </button>
    )
}

const ButtonErase = ({click}) => {
    return (
        <button onClick={(() => click("<"))} className="flex h-6 w-6 items-center justify-center text-black rounded-full p-6 shadow-lg">
            <div className="items-center justify-center"><ChevronLeftIcon className="h-4 w-4 "></ChevronLeftIcon></div>
        </button>
    )
}


const PinCodePad = ({confirm, closeModal}) => {
    const numbers = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9",
        "<", "0", "v",
    ]



    const shuffle = (array) => {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        const z = array.filter(v => v !== 'v');
        const y = z.filter(v => v !== '<');
        y.splice(9, 0, '<');
        y.splice(11, 0, 'v');
        return y
      }

      const [padNumbers, setPadNumbers] = useState(shuffle(numbers))
      const [total, setTotal] = useState("")

      const addNumber = (number) => {
        console.log(number)
        if(number == "<" && total.length > 0) setTotal(total.slice(0, -1))
        if(number != '<' && total.length < 6) setTotal(total + number)
      }





    return (    
        <div className="flex flex-col w-96 items-center space-y-20 justify-center">
            <div className="flex flex-row space-x-4 mt-4">
                <div className={`h-4 w-4 p-2 rounded-full ${total.length > 0 ? 'bg-black' : 'bg-gray-400'}`}></div>
                <div className={`h-4 w-4 p-2 rounded-full ${total.length > 1 ? 'bg-black' : 'bg-gray-400'}`}></div>
                <div className={`h-4 w-4 p-2 rounded-full ${total.length > 2 ? 'bg-black' : 'bg-gray-400'}`}></div>
                <div className={`h-4 w-4 p-2 rounded-full ${total.length > 3 ? 'bg-black' : 'bg-gray-400'}`}></div>
                <div className={`h-4 w-4 p-2 rounded-full ${total.length > 4 ? 'bg-black' : 'bg-gray-400'}`}></div>
                <div className={`h-4 w-4 p-2 rounded-full ${total.length > 5 ? 'bg-black' : 'bg-gray-400'}`}></div>
            </div>
            <div className="grid grid-cols-3 gap-16">
                {
                   padNumbers.map((number) => {
                    if(number == "<") {
                        return <ButtonErase click={addNumber}></ButtonErase>
                    }
                    if(number == "v") {
                        
                    }else{
                        return <Button number={number} click={addNumber}></Button>
                    }
                    
                    
                   }) 
                }
            </div>

            <button onClick={(() => {
                closeModal()
                confirm(total)}
                )} className="h-10 w-full bg-black mt-10 focus:bg-opacity-25 hover:bg-opacity-50 disabled:bg-opacity-50" disabled={total.length < 6 }>
                <span className="text-white">Valider</span>
            </button>
        </div>
    )
}


export default PinCodePad