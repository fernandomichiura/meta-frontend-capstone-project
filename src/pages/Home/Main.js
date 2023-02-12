import React from 'react';

import DeliveryIcon from '../../assets/delivery.svg';
import GreekSalad from '../../assets/greek-salad.png';
import Bruchetta from '../../assets/bruchetta.png';
import LemonDessert from '../../assets/lemon-dessert.jpg';
import Testimonial1 from '../../assets/testimonial_1.png';
import Testimonial2 from '../../assets/testimonial_2.png';
import Testimonial3 from '../../assets/testimonial_3.png';
import About1 from '../../assets/about_1.jpg';
import About2 from '../../assets/about_2.jpg';

import './Main.scss';
import Button from '../../components/Button';

const dishesInfo = [
  {
    name: 'Greek salad',
    img: GreekSalad,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$ 12.99',
    order: 'Order a delivery'
  },
  {
    name: 'Bruchetta',
    img: Bruchetta,
    description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$ 5.99',
    order: 'Order a delivery'
  },
  {
    name: 'Lemon Dessert',
    img: LemonDessert,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: '$ 5.00',
    order: 'Order a delivery'
  },
];

const testimonials = [
  {
    name: 'Jennifer Lee',
    commentary: 'Outstanding dinner service and food!',
    photo: Testimonial1,
    rating: 5,
  },
  {
    name: 'John Jack',
    commentary: 'Amazing experience!!',
    photo: Testimonial2,
    rating: 4.8,
  },
  {
    name: 'Sarah Taylor',
    commentary: 'Everyone had a wonderful time at Little Lemon',
    photo: Testimonial3,
    rating: 5,
  }
]

const Main = () => {

  return (
    <main id='c-main-home'>
      <section className='main-cards'>
        <header>
          <h1>This weeks specials!</h1>
          <Button styles={{ height: '48px' }}>Online Menu</Button>
        </header>

        <div className='cards-wrapper'>
          {dishesInfo.map((dish, index) => (
            <article key={index}>
              <div className='card-image-container'>
                <img src={dish.img} alt={dish.name} />
              </div>

              <div className='card-header'>
                <h4>{dish.name}</h4>
                <h4 className='header-price'>{dish.price}</h4>
              </div>

              <div className="card-body">
                <q>{dish.description}</q>

                <div className='body-delivery'>
                  <h4>{dish.order}</h4>
                  <span>
                    <img src={DeliveryIcon} alt="Order a delivery" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='main-testimonials'>
        <div className='testimonials-wrapper'>
          <h1>Testimonials</h1>
          
          <div className='testimonials-container'>
            {testimonials.map((testimonial, index) => (
              <article key={index}>
                <h3>Rating <small>({testimonial.rating})</small></h3>
                <h4>{testimonial.name}</h4>
                <img src={testimonial.photo} alt={testimonial.name} />
                <q>{testimonial.commentary}</q>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='main-about'>
        <article className='about-info'>
          <h1>About Us</h1>
          <h2>New York</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, rerum temporibus? At quasi iusto ducimus autem, perferendis maiores commodi, tempora expedita vero optio reprehenderit nostrum perspiciatis dolorum quae, corporis in?</p>
        </article>

        <article className='about-img'>
          <div className='img-container'>
            <img src={About1} alt="Two chefs having a chat" />
          </div>

          <div className='img-container'>
            <img src={About2} alt="Restaurant View" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Main;
