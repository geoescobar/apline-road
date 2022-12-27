import React from "react";

function Reviews() {
  return (
    <div>
      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <div class="flex justify-center">
              <div class="p-6">
                <p class="text-gray-700 mb-4 text-light ">
                  "I recently went on a snowmobile tour and it was an absolute
                  blast! The scenery was breathtaking and the guide was
                  knowledgeable and made the experience so much fun."
                </p>
                <h5 class="text-gray-900 text-xl leading-tight font-light mb-2">
                  Matt T.
                </h5>
              </div>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <div class="flex justify-center">
              <div class="p-6">
                <p class="text-gray-700 text-base mb-4 text-light ">
                  "The ATV tour was the perfect experience! Being able to
                  experience the outdoors this way was an out of body
                  experience, I would recommend them to anyone. "
                </p>
                <h5 class="text-gray-900 text-xl leading-tight font-light mb-2">
                  Amy C.
                </h5>
              </div>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <div class="flex justify-center">
              <div class="p-6">
                <p class="text-gray-700 mb-4 text-light ">
                  "Anytime I go up to the mountains they are the first call I
                  make! Absoutely the best tours out there!"
                </p>
                <h5 class="text-gray-900 text-xl leading-tight font-light mb-2">
                  Christian P.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Reviews;
