import React from 'react'

const DueDateSection = ({ card }) => {
  const date = new Date(card.dueDate)

  const formatDate = () => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
    const timestamp = Intl.DateTimeFormat('en-US', options).format(date);
    return timestamp.replace(',', ' at');
  }

  const isPastDue = () => {
    return Date.parse(date) - Date.now() > 0;
  }

  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className="overdue completed">
        <input
          id="dueDateCheckbox"
          type="checkbox"
          className="checkbox"
          checked=""
        />

        {formatDate()}
        <span>{isPastDue() ? '(past due)' : ''}</span>
      </div>
    </li>
  )
}

export default DueDateSection;