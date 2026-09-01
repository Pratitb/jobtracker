import { BellRing, ChevronLeft, Plus } from 'lucide-react'
import SearchBar from './SearchBar'
import Button from './Button'

interface HeaderProps {
    back?: boolean
    search?: boolean
    newApp?: boolean
}

const Header = ({ back, search, newApp }: HeaderProps) => {
    return (
        <div className='flex justify-between items-center'>
            {back && <ChevronLeft />}
            <div>
                <p className='font-bold capitalize'>page name</p>
            </div>
            <div>
                {/* {searchbar} */}
                {search && <SearchBar />}
                {/* {btn && new application button} */}
                {newApp && <Button btnName='new application' trailIcon={Plus} trailIconStyle='text-white' styles='bg-darkGray rounded-lg px-4 py-2 w-fit flex justify-center items-center gap-4' textStyles='text-white font-semibold capitalize' />}
                {/* {bell && notification bell icon} */}
                <BellRing size={20} />
            </div>
        </div>
    )
}

export default Header