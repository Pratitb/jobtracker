import { ApplicationType } from "@/utils/types"

export const getCount = (data: ApplicationType[], type: string) => {
    const filteredData = data?.filter(item => item.status.toLowerCase() === type)
    const filterDataLength = filteredData ? filteredData.length : 0
    return filterDataLength
}