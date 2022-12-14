import React from 'react'
import { Link } from 'react-router-dom'
import "./first.scss"

export default function First() {

  return (
    <div className="first">
        <div className="first-center-words"> </div>
        <div className="first-center-trees-containner">
          <div className="first-center-gray-trees" />
          <div className="first-center-green-trees" />
          <div className="first-bottom-prond" />
        </div>

        <div className="first-cloud-cantainner">
          <div className="first-left-cloud" />
          <div className="first-right-cloud" />
        </div>
        <div className="first-others">
          <div className="first-top-cloud" />
          <div className="first-top-stars" />

          <div className="first-border" />
        </div>
        <div className="first-button" >
          <Link to="intro">
          <button className="blob-btn" >
            进&nbsp;入&nbsp;官&nbsp;网
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
              </span>
            </span>
          </button>
          </Link>
          <br />
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                />
                <feBlend in2="goo" in="SourceGraphic" result="mix" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
  )
}
