export default function PageTitleNoC({name}){
    return(
        <div className="bg-sec w-[393px] h-[89px] rad-bar flex drop transition-all justify-between items-center max-md:w-2xs ">
        <div className="h-[89px] bg-main w-[33px] rad-bar" />
            <h1 className=" font-Poppins text-text text-6xl  mt-2 max-md:text-3xl transition-all">{name}</h1>
        <div className="w-6"/>
      </div>
    )
}