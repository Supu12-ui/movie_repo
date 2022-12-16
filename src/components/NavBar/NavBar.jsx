import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import {useDetectClickOutside} from "react-detect-click-outside";

export default function NavBar(){

    const [search, setSearch] = React.useState("");
    const [showSearch, setShowSearch] = React.useState(false);
    const ref = useDetectClickOutside({ onTriggered: toggleSearchOff });

    function handleSetSearch(event){
        setSearch(event.target.value);
    }

    function toggleSearchOn(){
        setShowSearch(true);
    }

    function toggleSearchOff(){
        setShowSearch(false);
    }

    return(
        <div className="p-4 drop-shadow-xl flex bg-neutral-800 sticky top-0 z-40 w-screen">
            <div className="flex items-center gap-1.5 cursor-pointer">
                <img className="h-7" src="https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/36170/bb53216b89/Screenshot_from_2022-04-21_16-20-35/e5c1d591956818f12b855d8124c5e90c.png"/>
            </div>
            <form className="relative flex w-1/2  ml-10" ref={ref}>
                <input
                    type="text" id="simple-search"
                    className="bg-neutral-800 border border-neutral-700 text-neutral-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full"
                    placeholder="Search..."
                    value={search}
                    onChange={handleSetSearch}
                    onMouseDown={toggleSearchOn}
                />
                { showSearch &&
                    <SearchResults search={search}/>
                }
            </form>
        </div>
    );
}