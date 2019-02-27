/**
 * 第一个设计的数据结构
 */
const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "date": "2019-02-25",
    "price": 400,
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去杭州旅游",
    "date": "2019-03-25",
    "price": 900,
    "category": {
      "id": 1,
      "name": "旅游",
      "type": "outcome",
      "iconName": "ios-plane"
    }
  }
]

/**
 * 第二次设计的数据结构
 * 这时候对数据进行操作的时候：
 * const selectedItem = items.filter(item => item.id === selectedId)[0]
 * 
 * cosnt modifiedItem = items.map(item => {
 *  if (item.id === modifiedItem.id) {
 *     return { ...item, title: '更新后的标题' }
 *  } else {
 *    return item
 *  }
 * })
 * 
 * const filteredItems = items.filter(item !== selectedId)
 */
const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "date": "2019-02-25",
    "price": 400,
    "cid": 1
  },
  {
    "id": 2,
    "title": "存银行",
    "date": "2019-03-25",
    "price": 400,
    "cid": 2
  }
]

const categories = {
  "1": {
    "id": 1,
    "name": "旅游",
    "type": "outcome",
    "iconName": "ios-plane"
  },
  "2": {
    "id": 2,
    "name": "理财",
    "type": "income",
    "iconName": "ios-plane"
  }
}

/**
 * 第三次设计数据结构
 * 这个时候对数据的操作：
 * cosnt selectedItem = items[selectedId]
 * 
 * cosnt modifiedItems = {
 *  ...items,
 *  [modifiedItem.id]: modifiedItem
 * }
 * 
 * delete items[deletedId]
 * const filteredItems = {
 *    ...items
 * }
 * 
 * var obj = {a:1, b: 2, c: 3}
 * var obj1 = {...obj, c: 4}
 * delete obj1['a']
 * var obj2 = {...obj1}
 * 
 * Flatten State 数据平铺 不要有嵌套 类似外键的方式，打通数据之间的依赖关系
 */
const items = {
  "1": {
    "id": 1,
    "title": "去云南旅游",
    "date": "2019-02-25",
    "price": 400,
    "cid": 1
  },
  "2": {
    "id": 2,
    "title": "存银行",
    "date": "2019-03-25",
    "price": 400,
    "cid": 2
  }
}

const categories = {
  "1": {
    "id": 1,
    "name": "旅游",
    "type": "outcome",
    "iconName": "ios-plane"
  },
  "2": {
    "id": 2,
    "name": "理财",
    "type": "income",
    "iconName": "ios-plane"
  }
}