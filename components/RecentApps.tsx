'use client'

import React from 'react'
import Button from './Button'
import JobApplication from './JobApplication'
import { useRouter } from 'next/navigation'
import { ApplicationType } from '@/utils/types'

interface RecentAppsProps {
    getApplicationData?: ApplicationType[]
    btn?: string
    head?: string
}

const RecentApps = ({ getApplicationData, btn, head }: RecentAppsProps) => {
    const router = useRouter()
    const handleAllApplications = () => {
        router.push('/applications')
    }

    return (
        <div className='border border-border rounded-lg px-4 py-4'>
            {/* header */}
            <div className='flex justify-between items-center mb-4'>
                <p className='widgetName'>{head}</p>
                {btn && <Button getName={btn} getActionFn={handleAllApplications} styles='border border-border rounded-lg px-2 py-1 text-sm font-medium' />}
            </div>
            {/* applications */}
            <div>
                {getApplicationData?.map(item => <JobApplication key={`${item.role}-${item.org}`} logo={item.domain} role={item.role} org={item.org} status={item.status} date={item.appliedDate} />)}
            </div>
        </div>
    )
}

export default RecentApps