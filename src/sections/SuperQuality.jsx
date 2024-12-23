import Button from '../components/Button';
import {shoe8} from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container '>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl lg:max-w-lg">We Provide Your <span className="text-coral-red">Super Quality</span> Shoes</h2>
        <p className="lg:max-w-lg mt-4 info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className="lg:max-w-lg mt-6 info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
            <Button 
            label = "View Details"
            />
          </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img 
          src={shoe8}
          alt='shoe8'
          width={570}
          height={570}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality
