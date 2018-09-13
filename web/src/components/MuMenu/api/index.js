/**
 * Created by chelin on 2018/9/12
 */
import {GET} from '../../../utils/request'

export function leftNavs() {
  return GET('/leftNavs')
}
