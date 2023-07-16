export type openStatus = 'IsOpenWelcome' | 'IsOpenUserList' | 'IsOpenAddUser';
export type openPagesStatus = {
    IsOpenWelcome: boolean
    IsOpenUserList: boolean
    IsOpenAddUser: boolean
}


export const OpenWelcome: openStatus = 'IsOpenWelcome'
export const OpenUserList: openStatus = 'IsOpenUserList'
export const OpenAddUser: openStatus = 'IsOpenAddUser'