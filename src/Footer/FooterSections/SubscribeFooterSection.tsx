function SubscribeFooterSection() {
    return(
        <div className="footer-section subscribe">
            <h3 className='text-[35px] font-bold text-[#1565c0]'>Be Our Subscribers</h3>
            <p className='text-[20px]'>To get the latest news about health from our experts</p>
            <form className='mt-[20px]' action="#">
                <input type="email" className='p-[10px] rounder-[14px] w-[70%] rounded-[14px] mr-[12px]' placeholder="example@email.com" required />
                <button type="submit" className='text-center w-[25%] bg-[#1565c0] h-[40px] rounded-[14px] text-[white] font-bold'>Submit</button>
            </form>
        </div>
    );
}

export default SubscribeFooterSection;