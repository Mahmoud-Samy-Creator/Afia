function SubscribeFooterSection() {
    return(
        <div className="footer-section subscribe">
            <h3 className='text-[25px] font-bold text-white'>Be Our Subscribers</h3>
            <form className='mt-[20px]' action="#">
                <input type="email" className='p-[10px] rounder-[14px] w-[70%] rounded-[14px] mr-[12px] ' placeholder="example@email.com" required />
                <button type="submit" className='text-center w-[25%] bg-white h-[40px] rounded-[14px] text-primary-bgColor font-bold'>Submit</button>
            </form>
        </div>
    );
}

export default SubscribeFooterSection;