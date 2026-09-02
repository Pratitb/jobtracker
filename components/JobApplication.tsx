import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface JobApplicationProps {
    logo: string
    role?: string
    org?: string
    status?: string
    date?: string
    getActionFn?: () => void
}

const JobApplication = ({ logo, role, org, status, date, getActionFn }: JobApplicationProps) => {

    const logoSize = 40
    return (
        <div className='border-b border-b-border last-of-type:border-none flex justify-between items-start gap-4 py-3' onClick={getActionFn}>
            <Image className='rounded-xl' alt='organization logo' width={logoSize} height={logoSize} src={`https://img.logo.dev/${logo}?token=pk_bO29ljZDSCGLwX35OCU1wg`} />
            <div className='flex flex-col'>
                <p className='w-36 truncate font-bold leading-4'>{role}</p>
                <p className='text-sm mb-2'>{org}</p>
                <p className='text-xs'>{status}</p>
                <p className='text-xs'>{date}</p>
            </div>
            <ChevronRight className='text-icon self-center' />
        </div>
    )
}

export default JobApplication