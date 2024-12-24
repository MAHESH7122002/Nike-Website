import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard"
const CustomerReviews = () => {
  return (
    <section id="reviews" className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        What Our 
        <span className="text-coral-red"> Customers </span> 
         Say?
      </h3>
      <p className="info-text text-center justify-center mt-4 m-auto max-w-lg">Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map((review,index)=>(
            <ReviewCard 
              key={review.customerName}
              {...review}
            />
          ))
        }

      </div>
    </section>
  )
}

export default CustomerReviews
