// // AppStore.js
// import { EventEmitter } from 'events'
// import _ from 'lodash'
//
// export default _.extend({}, EventEmitter.prototype, {
//
//   // Initial data
//   data: {
//     ready: false,
//     globals: {},
//     about:[
//       {id: 1, content: 'hello'},
//       {id: 2, content: 'hiyea'},
//       {id: 3, content: 'OMG!'},
//     ],
//     menu: [
//       {id: 4, link: '', title: "Home"},
//       {id: 5, link: 'work', title: "Work"},
//       {id: 6, link: 'contact', title: "Contact"},
//     ],
//     workdetail:[
//       { slug: 'test',
//         details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lacinia lacus. Quisque aliquam lacus id erat auctor, ut feugiat arcu gravida. Nulla at euismod mauris. Donec non posuere libero. Aenean ante quam, dignissim vitae quam eget, aliquet sodales leo. Donec eu fringilla nisi, a commodo quam.',
//         heroImage: 'path/to/hero.jpg',
//         thumbNail: 'path/to/thumbnail.jpg' },
//       { slug: 'gillette',
//         details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut lacinia lacus. Quisque aliquam lacus id erat auctor, ut feugiat arcu gravida. Nulla at euismod mauris. Donec non posuere libero. Aenean ante quam, dignissim vitae quam eget, aliquet sodales leo. Donec eu fringilla nisi, a commodo quam.',
//         heroImage: 'path/to/hero.jpg',
//         thumbNail: 'path/to/thumbnail.jpg' },
//     ]
//   },
//
//   // Emit Change event
//   emitChange: function(){
//     this.emit('change')
//   },
//
//   // Add change listener
//   addChangeListener: function(callback){
//     this.on('change', callback)
//   },
//
//   // Remove change listener
//   removeChangeListener: function(callback) {
//     this.removeListener('change', callback)
//   }
//
// })
