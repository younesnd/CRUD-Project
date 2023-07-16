import { useMemo } from 'react';
import { useImmer } from "use-immer";
import { openStatus , openPagesStatus } from '@/constants/UsersExpConstant';

const defaultOpenStatus : openStatus[] =['IsOpenWelcome','IsOpenUserList','IsOpenAddUser']

const prepareStatus = (currentStatus: openStatus): openPagesStatus  => {

    const openStatuses = {} as openPagesStatus
    for (const status of defaultOpenStatus) {
        openStatuses[status] = status === currentStatus 

    }
    return openStatuses
}


export const useOpenStatus = (currentStatus : openStatus = 'IsOpenWelcome') => {
    const [status, setStatus] = useImmer<openStatus>(currentStatus)
    const openStatuses = useMemo(()=> prepareStatus(status),[status])
    return {
        status,
        setStatus,
        ...openStatuses
    }

}

