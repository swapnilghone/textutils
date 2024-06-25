import React from 'react'
export default function Footer({mode}) {

  return (

    <footer className="footer mt-auto py-3 border-top">
      <div className={`d-flex flex-wrap justify-content-between align-items-center container text-${mode === "light"?"dark":"light"}`} >
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 ">© {(new Date().getFullYear())} TextUtils, <a className={`text-${mode === "light"?"dark":"light"} text-decoration-none fw-bold`} href='https://swapnilghone.github.io/portfolio' target='_blank' rel="noreferrer">Swapnil Ghone</a></span>
        </div>
      </div>
    </footer>
  )
}