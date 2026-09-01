'use client'

import Pill from '@/components/Pill'
import RecentApps from '@/components/RecentApps'
import SearchBar from '@/components/SearchBar'
import { applicationData, PillNames } from '@/utils/staticData'
import { useState } from 'react'

const Applications = () => {
    const [activePill, setActivePill] = useState<string>('all')
    const handleActivePill = (item: string) => {
        setActivePill(item)
    }
    return (
        <div>
            <SearchBar />
            <div className='flex gap-2 mt-4 max-w-fit overflow-x-auto mb-4'>
                {PillNames?.map((item: string) => <Pill key={item} getName={item} getActionFn={() => handleActivePill(item)} active={activePill === item} />)}
            </div>
            <RecentApps getApplicationData={applicationData} head="all applications" />
        </div>
    )
}

export default Applications