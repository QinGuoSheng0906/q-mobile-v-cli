import { isLocalDev, BXFQ } from '@/api/server'
const api = BXFQ
export const UPLOADBASEURL = isLocalDev === true ? 'http://172.17.203.140:7899' + api + '/ofile/huawei/uploadZoomimg'
  : process.env.VUE_APP_BASE_URL + api + '/ofile/huawei/uploadZoomimg'
