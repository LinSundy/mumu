/**
 * Created by chelin on 2018/9/18
 */
import { GET } from '@/utils/request';

// 通知公告
export function getMessage() {
  return GET('/api/newsMessage');
}

// 文章列表
export function getHomeNews() {
  return GET('/api/homeNews');
}
