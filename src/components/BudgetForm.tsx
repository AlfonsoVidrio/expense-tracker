import { useState } from "react"
import type { ChangeEvent, SubmitEvent } from "react";
import { useBudget } from "../hooks/useBudget";

export const BudgetForm = () => {
    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget()

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        // console.log([e.target.id], e.target.value)
        setBudget(e.target.valueAsNumber)
    }

    const isValid = isNaN(budget) || budget <=0

    const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: 'add-budget', payload: {budget}})
    }

    return (
        <form className="space-y-5" onSubmit={ handleSubmit }>
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto
                </label>
                <input
                    id="budget"
                    type="number"
                    className="w-full bg-white border-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    name="budget"
                    value={budget}
                    onChange={ handleChange }
                />
            </div>
            <input 
                type="submit"
                value="Definir Presupuesto"
                className="bg-blue-600 hover:bg-blue700 cursor-pointer w-full p-2 text-white font-black disabled:opacity-40"
                disabled={isValid}     
            />
        </form>
    )
}
