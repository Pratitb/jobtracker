'use client'

import Pill from '@/components/Pill'
import RecentApps from '@/components/Applications'
// import SearchBar from '@/components/SearchBar'
import { applicationData, PillNames } from '@/utils/staticData'
import { useState } from 'react'

const Applications = () => {
    const [activePill, setActivePill] = useState<string>('all')
    const handleActivePill = (item: string) => {
        setActivePill(item)
    }
    const filterFn = () => {
        if (activePill === 'all') return applicationData
        const filterData = applicationData.filter(a => a.status.toLowerCase() === activePill.toLowerCase())
        return filterData
    }
    return (
        <div>
            {/* <SearchBar /> */}
            <div className='flex gap-2 mt-4 max-w-fit overflow-x-auto mb-4'>
                {PillNames?.map((item: string) => <Pill key={item} getName={item} getActionFn={() => handleActivePill(item)} active={activePill === item} />)}
            </div>
            <RecentApps getApplicationData={filterFn()} head="all applications" />
        </div>
    )
}

export default Applications