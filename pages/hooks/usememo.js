import App from "next/app";
import React,{ useState,useEffect,useMemo} from "react";

export default function useMemoPage() {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)

    const sumarValor1 = ()=>{
        setN1(n1 + 1)
    }

    const sumarValor2 = ()=>{
        setN2(n2 + 1)
    }

    let total = useMemo(()=>{
        return n1 + n2
    },[n1,n2])

    return (
        <div>

            <h1>UseMemo</h1>

            <p>valor 1: {n1}</p>
            <p>valor 2: {n2}</p>

            <button onClick={sumarValor1}>Sumar valor 1</button>
            <button onClick={sumarValor2}>Sumar valor 2</button>
            <p>Total: {total}</p>

        </div>

    )
}