import React from 'react'

const Post = () => {
  return (
    <>
        <div className="post">
        <div className="images">
          <img
            src="https://helios-i.mashable.com/imagery/articles/02C1arSK02HaAzNhFWnsVIQ/hero-image.fill.size_1536x863.v1719323406.png"
            alt="post1"
          />
        </div>
        <div className="texts">
          <h2>
            Grab an unlocked iPhone 15 from Woot for $120 off and level up your
            smartphone
          </h2>
          <p className="info">
            <a className="author">Kapil Bhattarai</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            As of June 25, get a new, unlocked iPhone 15 (128 GB) for $679.99 at
            Woot. That's a discount of 15%.
          </p>
        </div>
      </div>
    </>
  )
}

export default Post