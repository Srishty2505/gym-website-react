import React from 'react'

function Slider() {
  return (
   <>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='imagebox'>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/73674f80778075.5ceb8de9562bc.jpg" class="d-block w-100" alt="..."></img>

        </div>
    </div>
    <div class="carousel-item">
    <div className='imagebox'>
      <img src="https://images3.alphacoders.com/608/thumb-1920-608046.jpg" class="d-block w-100" alt="..."></img>

        </div>

    </div>
    <div class="carousel-item">
    <div className='imagebox'>
      <img src="https://getwallpapers.com/wallpaper/full/5/1/1/200264.jpg" class="d-block w-100" alt="..."></img>

        </div>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}

export default Slider