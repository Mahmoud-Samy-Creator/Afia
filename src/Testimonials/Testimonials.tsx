import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './Testimonials.css';

import one from '../assets/Trust/test-1.png';
import two from '../assets/Trust/test-2.png';
import three from '../assets/Trust/test-3.png';
import four from '../assets/Trust/test-4.png';

const testimonials = [
    {
        id: 1,
        photo: one, name: "Mahmoud",
        pov: "I see that It was a great experience with Afia",
    },
    {
        id: 2,
        photo: two,
        name: "Esraa",
        pov: "I see that It was a great experience with Afia",
    },
    {
        id: 3,
        photo: three, name: "Ahmed",
        pov: "I see that It was a great experience with Afia",
    },
    {
        id: 4,
        photo: four, name: "Hassan",
        pov: "I see that It was a great experience with Afia",
    },
]

function Testimonials() {
  return(
    <div className='testimonials bg-[#c2e5ff7a] py-[100px] px-[15px]'>
      <h1 className="text-center text-black text-[35px] sm:text-[40px] lg:text-[64px] font-bold">What patient say about Afia</h1>
      <div className='testimonials-container container mx-auto grid mt-[90px]'>
        {
          testimonials.map(testimonial => (
            <div key={testimonial.id} className='testimonial text-center bg-[#7ba4e0] rounded-[14px] h-[250px]'>
              <img className='w-[100px] rounded-[50%] mx-auto mt-[-50px] border border-white border-[3px]' src={testimonial.photo} alt={testimonial.name} />
              <h3 className='text-[25px] text-white mt-[16px] font-bold'>{testimonial.name}</h3>
              <p className='text-white text-[25px] mt-[10px] w-[80%] mx-auto'>{testimonial.pov}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}



export default Testimonials;