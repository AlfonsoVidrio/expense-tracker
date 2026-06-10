import { useEffect } from "react";
import { BudgetForm } from "./components/BudgetForm"
import { BudgetTracker } from "./components/BudgetTracker";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseModal } from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget"
import { FilterByCategory } from "./components/FilterByCategory";

export const App = () => {
  const { state } = useBudget();

  const isValidBudget = state.budget > 0

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString())
    localStorage.setItem("expenses", JSON.stringify(state.expenses))
  }, [state])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de Gastos
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <div className="animate-fadeIn" key={isValidBudget ? 'tracker' : 'form'}>
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </div>
      </div>
      {isValidBudget && (
        <div className="animate-fadeIn" key="main-content">
          <main className="max-w-3xl mx-auto py-10">
            <FilterByCategory />
            <ExpenseList />
            <ExpenseModal />
          </main>
        </div>
      )}
    </>
  )
}
