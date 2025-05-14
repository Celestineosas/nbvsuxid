import FooterContent from "../../utilies/FooterContent";


export default function Footer() {
  return (
    <div 
      className='relative lg:h-[400px] h-[700px] max-sm:h-[500px] ' 
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 lg:h-[400px] h-[700px] max-sm:h-[500px] w-full'>
        <FooterContent />
      </div>
    </div>
  )
}