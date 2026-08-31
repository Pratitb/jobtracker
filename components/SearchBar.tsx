import { ArrowRight, Search, X } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className='relative'>
            <Search className='text-icon absolute top-2 left-2' size={18} />
            <input type="text" name="" id="" placeholder='search...' className='w-full border border-border focus:outline-0 rounded-lg pl-9 pr-16 py-1 text-base text-wordGray' />
            <ArrowRight className='text-icon absolute right-8 bottom-1.5' />
            <X className='text-icon absolute right-2 bottom-1.5' />
        </div>
    )
}

export default SearchBar