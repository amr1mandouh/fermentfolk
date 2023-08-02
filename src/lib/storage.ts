import type {Container} from '../types'
const KEY='fermentfolk.containers'
export function sampleContainers():Container[]{return[{id:'batch-night',name:'Winter Crocks',place:'Common Culture Cellar',city:'Alexandria',startDate:'2026-11-06',endDate:'2026-11-07',items:[
{id:'m1',name:'Kimchi batch check',category:'kimchi',number:1,done:true,priority:true,notes:'Warm wall near the lamp.'},
{id:'m2',name:'Pickle brine note',category:'pickle',number:2,done:false,priority:false,notes:'Check the fig trees.'},
{id:'m3',name:'Koji tray note',category:'koji',number:3,done:false,priority:true,notes:'Photograph the wing edge.'},
{id:'m4',name:'Cheese aging visit',category:'cheese',number:4,done:false,priority:false,notes:'Log temperature with sighting.'},
{id:'m5',name:'Cider barrel note',category:'cider',number:5,done:true,priority:false,notes:'Use the macro lens.'}]},{id:'batch-lantern',name:'Lantern Count',place:'Garden Edge',city:'Giza',startDate:'2026-11-13',endDate:'2026-11-14',items:[]}]}
export function loadContainers(){try{const raw=localStorage.getItem(KEY);if(!raw)return sampleContainers();const x:unknown=JSON.parse(raw);if(!Array.isArray(x))throw Error();return x as Container[]}catch{return sampleContainers()}}
export function saveContainers(x:Container[]){localStorage.setItem(KEY,JSON.stringify(x))}

