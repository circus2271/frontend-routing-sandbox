// class AvailableGroups extends HTMLElement {
//   data: any;
//
//   constructor() {
//     super();
//   }
//
//   async connectedCallback() {
//     this.data = await getData()
// //    console.log(this.data)
// //    const currentGroup = data.groups?.filter(group => {
// //      return group.groupName === groupName
// //    })[0]
// //    const {groupName} = currentGroup
//     const {groups} = this.data
//
//     let groupsHtml = ``
//     groups.forEach(group => {
//       const {groupName} = group
//       groupsHtml += `
//         <li>
//           <a href="/${groupName}">
//             ${groupName}
//           </a>
//         </li>
//       `
//     })
//
// //    const content = this.querySelector('.content')
//     const listWrapper = this.querySelector('.content .list-wrapper')
//
// //    listWrapper.log
//     setTimeout(() => {
//
//       listWrapper.innerHTML = `
//         <ul>
//           ${groupsHtml}
//         </ul>
//       `
//
//       listWrapper.classList.add('visible')
//     }, defaultTimeout)
//   }
// }
//
// customElements.define('available-groups', AvailableGroups)
//

//class AvailableAlbums extends HTMLElement {
//  constructor() {
//    super();
//  }
//}
