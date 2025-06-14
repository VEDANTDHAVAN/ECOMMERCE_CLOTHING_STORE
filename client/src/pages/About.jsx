/* eslint-disable no-unused-vars */
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-6 border-t-2'>
       <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-14'>
       <img className='w-full h-auto md:max-w-[450px]' src='t4.jpg' alt="" />
       <div className='flex flex-col justify-normal gap-2 md:w-2/4'>
        <p className=' text-cyan-800 text-left text-sm'>Welcome to <b>Fabric Fusion</b>, where timeless elegance meets modern innovation. We are more than just a clothing brand—we are a celebration of individuality, style, and quality. Founded with a vision to redefine fashion, we blend premium fabrics with cutting-edge designs to create pieces that inspire confidence and comfort.</p>
        <p className=' text-cyan-800 text-left text-sm'>At <b>Fabric Fusion</b>, every product tells a story of craftsmanship, sustainability, and artistry. We are committed to delivering not only exceptional style but also a seamless shopping experience. From versatile wardrobe essentials to bold statement pieces, our collections are curated to cater to diverse tastes and occasions.</p>
         <br />
        <p className=' text-cyan-800 text-left text-sm'>Join us on a journey to explore fashion that feels as good as it looks. With a promise of quality, affordability, and a touch of elegance, Fabric Fusion is here to make your style truly unforgettable. Experience the future of fashion with us, and let’s create something extraordinary together!</p>
        <br /> 
        <b className='font-extrabold text-left text-sm'>Our Mission</b>
        <p className=' text-cyan-800 text-left text-sm'>Our mission is to revolutionize the fashion industry by blending timeless elegance with modern innovation. We aim to empower individuals to express their unique style through premium-quality clothing that prioritizes comfort, sustainability, and affordability.</p>
        <h3 className='text-left font-bold text-sm'>We are committed to:</h3>
         <li>1) Crafting designs that celebrate individuality and inspire confidence.</li>
         <li>2) Using sustainable practices to create fashion that’s kind to the planet.</li>
         <li>3) Offering unparalleled quality and style at accessible prices.</li>
          <br />
         <p className='text-cyan-800 font-serif text-left text-sm'>Our ultimate goal is to redefine the way you experience fashion—making it not just a statement but a lifestyle. At Fabric Fusion, we believe that everyone deserves to look and feel their best, every step of the way.</p>
       </div>
      </div>
      <div className='text-4xl py-4'>
       <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm gap-1 mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
        <b className='text-2xl'>QUALITY ASSURANCE:</b>
        <p className='text-cyan-800 font-serif text-left'>At <b>Fabric Fusion</b>, quality is at the heart of everything we do. We are committed to delivering clothing that exceeds expectations in style, comfort, and durability.</p>
        <p className='text-cyan-800 font-serif text-left'>Your satisfaction is our top priority, and we stand behind every product we create. With Fabric Fusion, you can shop confidently, knowing you’re investing in fashion that’s built to last.</p> 
        <p className='text-cyan-800 font-serif text-left'>With Fabric Fusion, you’re not just buying clothes—you’re investing in products that are thoughtfully designed, responsibly crafted, and built to last. Quality is our promise, and your satisfaction is our priority.</p>  
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
       <b className='text-2xl'>Here&apos;s what sets us apart:-</b>
         <li><p className='text-cyan-800 font-serif text-left'><b>Premium Fabrics: </b>We source the finest materials to ensure a luxurious feel and long-lasting wear.</p></li>
         <li><p className='text-cyan-800 font-serif text-left'><b>Impeccable Craftsmanship:</b>Each piece is meticulously designed and crafted with attention to detail.</p></li>
         <li><p className='text-cyan-800 font-serif text-left'><b>Rigorous Testing: </b> Our products undergo strict quality checks to meet the highest standards.</p></li>
         <li><p className='text-cyan-800 font-serif text-left'><b>Sustainability: </b>We prioritize eco-friendly practices without compromising on quality.</p></li>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
        <b className='text-2xl'>Customer Satisfaction Guaranteed:</b>
        <p className='text-cyan-800 font-serif text-left'>At <b>Fabric Fusion</b>, your satisfaction is the foundation of our success. We are committed to ensuring that every customer enjoys not just our products but also the overall shopping experience.</p>
        <p className='text-cyan-800 font-serif text-left'> <b>Dedicated Support Team: </b> Our highly trained customer support team is always ready to assist you with any questions, concerns, or feedback. Whether it’s about product details, order tracking, or post-purchase assistance, we’re just a message or call away.</p> 
        <p className='text-cyan-800 font-serif text-left'>With Fabric Fusion, you’re not just buying clothes—you’re investing in products that are thoughtfully designed, responsibly crafted, and built to last. Quality is our promise, and your satisfaction is our priority.</p>  
       </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About