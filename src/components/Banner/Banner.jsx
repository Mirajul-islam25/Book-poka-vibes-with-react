import React from 'react';
import BannerImage from '../../assets/books.jpg'

const Banner = () => {
      return (
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={BannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="justify-evenly">
      <h1 className="text-5xl font-bold mb-10">Books to freshen <br /> up your bookshelf</h1>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
      );
};

export default Banner;