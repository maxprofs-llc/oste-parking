// //Get free Spots
// export default (spots, {startDate, endDate}) => {
//     return spots.filter((spot) => {
//         const filterArray = spot.freeOn.filter((freeOn) => freeOn >= startDate && freeOn <= endDate)
//              return filterArray.length > 0
//     }).map((spot) => {
//          spot.freeOn.sort((a,b) => {
//              return a > b ? 1 : -1
//          })
//          return spot
//     }).sort((a,b) => {
//         return a.freeOn[0] > b.freeOn[0] ? 1 : -1
//     })
//  }