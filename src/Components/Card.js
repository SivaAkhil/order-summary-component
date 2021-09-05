import HeroImg from "../Asserts/order-summary-component-main/images/illustration-hero.svg";
import MusicIcon from "../Asserts/order-summary-component-main/images/icon-music.svg";

const Card = (props) => {
  return (
    <div className="bg-nuetral-veryPaleBlue w-5/6 rounded-3xl shadow-2xl max-w-sm">
      <img src={HeroImg} alt="" className="rounded-t-3xl" />
      <div className="flex flex-col p-4 text-center">
        <h1 className="font-redHat text-lg font-extrabold">Order Summary</h1>
        <p className="m-1 text-sm text-nuetral-desaturatedBlue font-medium">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like
        </p>

        <div className="flex justify-between items-center p-2 bg-blue-50 rounded-md shadow-sm my-2">
          <img
            src={MusicIcon}
            alt="music"
            className="h-8 rounded-full bg-primary-paleBlue"
          />
          <div className="w-2/4 flex flex-col text-left">
            <p className="font-semibold text-sm">Annual Plan</p>
            <p className="text-sm text-nuetral-desaturatedBlue font-medium">
              $59.99/year
            </p>
          </div>
          <button className="text-primary-brightBlue font-bold text-sm underline mr-1">
            Change
          </button>
        </div>

        <button className="bg-primary-brightBlue py-2  rounded-md text-purple-50 font-semibold shadow-2xl text-sm mt-4">
          Proceed to Payment
        </button>
        <button className="my-3 font-semibold text-nuetral-desaturatedBlue">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default Card;
