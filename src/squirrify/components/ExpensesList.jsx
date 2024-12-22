import React from 'react'
import { IoMdAdd } from 'react-icons/io'

export const ExpensesList = ({ expenses }) => {
    return (
        <div className="list">
            <div className="expenses">
            {
                expenses.map((exp, i) => (
                    <div className="expense" key={i}>
                        <span className="icon">🍔</span>
                        <p className="expense-title">{exp.title}</p>
                        <span className="expense-cost">bs. {exp.cost}</span>
                    </div>
                )
            )}
        </div>
        </div>
    )
}
