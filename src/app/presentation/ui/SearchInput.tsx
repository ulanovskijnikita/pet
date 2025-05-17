export default function SearchInput() {

    return (

        <div className="p-[10px] laptop:px-[15px] laptop:py-[17px] focus-within:outline-[2px] w-[280px] laptop:w-[360px] desktop:w-[472px] flex outline-solid outline-[1px] rounded-btn justify-between outline-[#EAEAEA] gap-[15px]">

            <input className="active:border-none focus:border-none focus:outline-none active:outline-none font-functional text-main w-full laptop:pl-[10px]" placeholder="Search for more than 10,000 products" type="search" />

            <img className="w-[22px]" src="/icons/search.svg" alt="icon-search" />
        </div>        
    )
}