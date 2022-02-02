// Basic types
let id:number = 5
let company:string = 'Abdullah Ansari'
let isPublic:boolean = true
let x:any = 'any type can be stored'
let age:number

age = 30

let ids:number[] = [1, 2, 3, 4]
ids.push(2)

let arr:any[] = [1, true, 'hello']

// Tuple
let person:[number, string, boolean] = [1, 'Hamid', true]

// Tuple array
let employee: [number, string][]

employee = [
	[1, 'John'],
	[2, 'Jake'],
	[3, 'Gill'],
]

// Union
let pid: string | number = 3
let pid2: string | number = '3'

// Enum
enum Directions1 {
	Up = 1,
	Down,
	Right,
	Left
}

console.log(Directions1.Up)

enum Directions2 {
	Up = 'Up',
	Down = 'Down',
	Right = 'Right',
	Left = 'Left'
}

console.log(Directions2.Up)


// Objects
type User = {
	id: number,
	name: string
}
const user: User = {
	id: 1,
	name: 'John'
}

// Type assertion
let cid: any = 1;
// let customerID = <number>cid
let customerID = cid as number

// Functions
function addNumber(x:number, y:number):number {
	return x+y
}

console.log(addNumber(3, 4))

// Void (when you don't return anything)
function consoleMessage(message: string | number):void {
	console.log(message)
}

consoleMessage('i am message')

// Interfaces
interface UserInterface {
	readonly id: number		// this property is read only i.e. it can't be edited using user1.id
	name: string
	age?: number					// this poperty is optional as if ? is not added we can't define an object without that particular key
}

const user1:UserInterface = {
	id: 1,
	name: 'John'
}

// difference between type & interface is you can't use unions with type

type Point = number | string
// interface Point = number | string --- this will give error
const point: Point = 2;

// interface with functions
interface MathFunc {
	(x:number, y:number) : number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y


// Classes

interface PersonInterface {
	id: number
	name: string
	register(): string
}

class Person implements PersonInterface{
	// you can also add private or protected or public infornt of these
	id: number
	name: string

	constructor(id: number, name: string){
		// console.log(123)
		this.id = id
		this.name = name
	}

	register(){
		return `${this.name} is now registered`
	}
}

let brad = new Person(1, 'Brady Brad')
let john = new Person(2, 'John Pinto')

// console.log(john.register())
// console.log(brad, john);