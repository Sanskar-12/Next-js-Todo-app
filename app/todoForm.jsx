"use client"

import React from 'react'

const todoForm = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Enter Title" />
          <input type="text" placeholder="Enter Description" />
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  )
}

export default todoForm
