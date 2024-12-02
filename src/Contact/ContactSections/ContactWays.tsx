const contactButtons = [
  {
    id: 1,
    content: "+20102548631"
  },
  {
    id: 2,
    content: "Afia@email.com"
  },
  {
    id: 3,
    content: "WHATSAPP"
  },
  {
    id: 4,
    content: "FACEBOOK"
  },
]


function ContactWays() {
  return(
      <div className="contact-ways w-[350px] content-center">
        {
          contactButtons.map(button =>
            <button
              key={button.id}
              className="contact-button block text-center text-[18px] bg-[white] w-[300px] h-[60px] mx-[auto] mb-[15px] py-[10px] border border-[#e5e5e5] rounded-[10px] transition transiton-[0.3s] hover:bg-[#054f6bd4] hover:text-white"
            >{
              button.content}
            </button>
          )}
      </div>
  )
}

export default ContactWays;