/**
 * Created by chelin on 2018/9/18
 */
import {GET} from '@/utils/request';

// 通知公告
export function getMessage() {
  return GET('/api/newsMessage');
}

// 文章列表
export function getHomeNews() {
  return GET('/api/homeNews');
}

// 7天热门
export function getHot() {
  return GET('/api/hot');
}

// 最牛评论
export function getHotComment() {
  return GET('/api/hotComment');
}

// 友情链接
export function getLinks() {
  return GET('/api/links')
}
