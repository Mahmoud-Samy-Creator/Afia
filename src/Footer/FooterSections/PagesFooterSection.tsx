const FooterLinks = [
    {
        title: 'Our services',
        link: '#'
    },
    {
        title: 'Departments',
        link: '#'
    },
    {
        title: 'Contact',
        link: '#'
    },
    {
        title: 'Testimonials',
        link: '#'
    },
    {
        title: 'Doctors',
        link: '#'
    },
    {
        title: 'Get free quote',
        link: '#'
    },
]

function PagesFooterSection() {
return(
    <div className='pages'>
        <ul className='flex flex-col'>
            {FooterLinks.map((link, index) => (
                <li key={index} className='mb-[5px] text-white'><a href={link.link}>{link.title}</a></li>)
            )}
        </ul>
    </div>
);
}

export default PagesFooterSection;