export const editMutation = function(storeData, item) {
  let storeItem = storeData.find(i => i.id == item.id)
  let index = storeData.indexOf(storeItem)
  storeData.splice(index, 1, item)
}