/**
 * Created by chelin on 2018/9/18
 */
import {GET} from '@/utils/request';

export function getMessage() {
	return GET('/api/newsMessage')
}